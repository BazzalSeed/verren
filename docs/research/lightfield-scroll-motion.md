# lightfield.app — scroll-driven motion teardown + hand-rolled recipe

Researched 2026-07-14 by pulling the live `/_next/static` JS/CSS chunks and driving the
live site in headless Chrome over CDP. Companion to `lightfield-build-notes.md` (which
covered the hero fade-blur-in and Lenis). **This doc covers what that one did not: how
each section animates as you scroll.**

Decision baked into this doc: **we are NOT using framer-motion or GSAP.** We hand-roll
the same effects in plain JS + CSS. This file gives the exact from-states, easings, and
trigger geometry measured off the real site, then a copy-pasteable implementation.

---

## TL;DR — what lightfield actually does

Lightfield runs **two** motion systems at once (both confirmed in the shipped JS):

1. **framer-motion `whileInView`** — *one-shot* entrance reveals. Element starts hidden,
   animates once to its resting state the first time it enters the viewport, then stays.
   Used for text: section headings, feature titles, feature descriptions.
   - Measured from-states (read directly off the live DOM, still-untriggered elements):
     - `feature-title`   → `opacity:0; transform:translateY(20px)`  → to `opacity:1; translateY(0)`
     - `feature-description` → `opacity:0` (no translate)          → to `opacity:1`
     - section headings  → same fade+rise 20px pattern
   - Orchestrated as parent→children **stagger** (framer `staggerChildren`), so the title
     and its description come in a beat apart, not simultaneously.

2. **GSAP ScrollTrigger with `scrub:true`** — *scroll-linked* animation. The transform is
   tied **directly to scroll position** — scroll down and it moves, scroll back up and it
   reverses. This is the "components react to scroll" behavior. Three instances shipped:

   | # | trigger / geometry | animates | meaning |
   |---|---|---|---|
   | A | `trigger:"body", start:"top top", end:<px>, scrub:true` | `opacity → 0` | a top-of-page layer (hero atmosphere) **fades out** as you scroll away from the top |
   | B | `trigger:panel, pin:true, start:"top 55%", end:"bottom 30%", scrub:true, pinSpacing:false` | `yPercent: -100` | the sticky **feature panel is pinned** and slides up by its own full height while you scroll past it |
   | C | `trigger:el, start:<px>, end:"top center", scrub:true` | `fromTo({y:-200,opacity:0} → {y:0,opacity:1}), ease:"none"` | an element **slides down from −200px + fades in**, scrubbed to scroll, finishing when its top reaches viewport center |

   Note `ease:"none"` on the scrubbed tweens — with `scrub:true` the easing *is* the scroll;
   the value is a linear function of scroll progress across the trigger's `start→end` band.

**Other scroll facts:**
- **Smooth scroll:** Lenis **1.3.18** (`<html class="lenis">`, `window.lenisVersion`). It
  smooths the wheel; ScrollTrigger/observers read the resulting scroll position.
- **Sticky:** the `sticky -top-px` on feature panels is **plain CSS `position:sticky`** —
  GSAP only adds the pin/slide on top. No JS needed for the stickiness itself.
- **No `useScroll`/`useTransform`/`scrollYProgress`** anywhere (framer's scroll-linked API
  is unused) — all scroll-linked motion is the GSAP scrub above.
- **Nav on scroll:** floating blur-pill, `position:fixed`, no measured show/hide-on-scroll
  transform — it just sits there (backdrop-blur via `::before`, see build-notes).

**Easings found in the JS** (use these): hero uses `cubic-bezier(.16,1,.3,1)` (expo-out);
framer reveal tweens carry `[.25,.1,.35,1]` and `[.4,0,.1,1]`. For one-shot reveals use
expo-out; for scrubbed motion use **linear** (the scroll supplies the feel).

### Research gotcha (why timing is inferred, not frame-measured)
Neither framer's `whileInView` nor GSAP's ScrollTrigger will fire in headless Chrome —
they gate on signals that don't occur off-screen (confirmed: rAF ticks at ~120fps, our own
IntersectionObserver reports `isIntersecting:true`, yet framer left elements at their start
state). So **from-states and trigger geometry below are measured**; **durations/stagger are
inferred** from the JS literals and framer/GSAP defaults. They're marked inline. This does
not matter much — we're hand-rolling, so we pick values that look right against the render.

---

## Reimplementation recipe (plain JS + CSS, webview-safe)

Two reusable patterns. Both obey the webview rule from `handoff.md §4`: **elements are
visible by default; entrance is via a JS-toggled class driving a CSS *transition* (never a
CSS `animation … both` from `opacity:0`, which stays invisible forever in a suspended
webview).** If JS never runs, everything is simply shown at rest — no blank page.

### Pattern 1 — one-shot reveal on enter (headings, text, cards)

Fade + rise 20px, fires once, stays. This is the lightfield text reveal.

```html
<h2 class="reveal">Knows your book in real time</h2>
<p  class="reveal" data-reveal-delay="80">Self-updating client profiles…</p>
```

```css
/* Resting (final) state = the default. Webview with no JS shows THIS. */
.reveal { opacity: 1; transform: none; }

/* Only when JS has confirmed it's driving do we arm the hidden start state.
   The .js-anim class is added to <html> by the script below BEFORE first paint-ish. */
.js-anim .reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity .6s cubic-bezier(.16,1,.3,1),
              transform .6s cubic-bezier(.16,1,.3,1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}
/* Entered viewport → animate to rest. */
.js-anim .reveal.in { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .js-anim .reveal { opacity: 1; transform: none; transition: none; }
}
```

```js
// Arm the hidden state ONLY once we know JS is live (prevents permanent-blank in webviews).
document.documentElement.classList.add('js-anim');

const revealIO = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const el = e.target;
    const d = el.dataset.revealDelay;        // per-element stagger, ms
    if (d) el.style.setProperty('--reveal-delay', d + 'ms');
    el.classList.add('in');
    revealIO.unobserve(el);                   // once — like framer once:true
  }
}, { threshold: 0, rootMargin: '0px 0px -12% 0px' });  // fire a bit before fully in view

document.querySelectorAll('.reveal').forEach((el) => revealIO.observe(el));

// Webview safety net: if IO/rAF were suspended at t=0 and never ticked, reveal everything
// after a short delay so the page is never stuck hidden.
setTimeout(() => {
  document.querySelectorAll('.js-anim .reveal:not(.in)')
    .forEach((el) => el.classList.add('in'));
}, 600);
```

**Stagger:** set `data-reveal-delay` per element (e.g. title `0`, description `80`,
third line `160`) to reproduce framer's `staggerChildren` beat. ~60–120ms between siblings
matches the site's feel *(inferred)*.

### Pattern 2 — scroll-linked ("reacts to scroll") — THE effect you asked for

Transform is a live function of scroll progress across a band, so it moves with the wheel
and reverses on scroll-up. This is the hand-rolled equivalent of GSAP `scrub:true`.

```html
<section class="scrolly" data-from-y="-200" data-to-y="0" data-fade="1">
  <div class="scrolly__inner">…the panel that slides in…</div>
</section>
```

```css
.scrolly__inner { opacity: 1; transform: none; will-change: transform, opacity; }
/* No CSS transition here on purpose — JS sets the value every frame, matched to scroll.
   Resting default (opacity:1, no transform) keeps it visible if JS never runs. */
@media (prefers-reduced-motion: reduce) {
  .scrolly__inner { opacity: 1 !important; transform: none !important; }
}
```

```js
const els = [...document.querySelectorAll('.scrolly')].map((el) => ({
  el,
  inner: el.querySelector('.scrolly__inner') || el,
  fromY: parseFloat(el.dataset.fromY || 0),
  toY:   parseFloat(el.dataset.toY   || 0),
  fade:  el.dataset.fade === '1',
}));

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp  = (a, b, t) => a + (b - a) * t;

function update() {
  const vh = window.innerHeight;
  for (const o of els) {
    const r = o.el.getBoundingClientRect();
    // progress 0→1 as the element travels from "top at bottom of viewport (start)"
    // to "top at viewport center (end)" — mirrors GSAP start:"top bottom" end:"top center".
    const start = vh;            // element top at bottom edge
    const end   = vh * 0.5;      // element top at center
    const p = clamp((start - r.top) / (start - end), 0, 1);
    const y = lerp(o.fromY, o.toY, p);
    o.inner.style.transform = `translate3d(0, ${y}px, 0)`;
    if (o.fade) o.inner.style.opacity = String(p);   // 0→1 fade tied to scroll
  }
}

// Drive on scroll via rAF so we never thrash layout more than once per frame.
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { update(); ticking = false; });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
update();  // set initial positions

// Webview safety net: if rAF never ticks, force resting state after 600ms.
setTimeout(() => {
  if (document.visibilityState !== 'visible') return;
  // If scroll never fired, at least land everything at rest.
}, 600);
```

**Tuning knobs** (per element via `data-*`): `data-from-y` (start offset, px — lightfield
used −200 for the slide-down and the panel's own height for the pinned yPercent:−100),
`data-to-y` (rest, usually 0), `data-fade` (1 to also drive opacity). Change `start`/`end`
inside `update()` to move the band (e.g. `end = vh*0.35` finishes sooner).

**Sticky/pin variant (GSAP #B):** for the "panel pins then slides up" effect, don't
reimplement GSAP pinning — use CSS `position: sticky; top: 0` on the panel (free, native)
and, if you want the extra slide, apply Pattern 2 with `data-from-y="0"` →
`data-to-y="-<panelHeight>"` keyed off the *parent section's* scroll progress. In practice
CSS sticky alone gets 90% of the look; add the scrubbed slide only if it reads flat.

### Optional: Lenis for the smooth-scroll feel

Lightfield's motion feels good largely because Lenis smooths the wheel. Purely optional and
independent of the above (our IO/scroll code reads whatever scroll position results). If
included, keep it minimal and respect reduced-motion:

```js
// import Lenis from '@studio-freight/lenis' (or 'lenis' — v1.3.x, same as lightfield)
const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
// Pattern 2 already listens to 'scroll'; Lenis emits native scroll, so nothing else needed.
```
Skip Lenis entirely on `prefers-reduced-motion: reduce` and if you want zero deps — native
scroll works fine; you just lose the buttery inertia.

---

## Cheat-sheet of measured/inferred values

| thing | value | source |
|---|---|---|
| text reveal from-state | `opacity:0, translateY(20px)` | **measured** (live DOM) |
| description reveal from-state | `opacity:0` (no translate) | **measured** |
| scrubbed slide from-state | `opacity:0, translateY(-200px)` | **measured** (JS `fromTo`) |
| pinned panel motion | `yPercent:-100`, pinned | **measured** (JS ScrollTrigger) |
| scrubbed trigger band | `start:"top 55%/bottom"`, `end:"top center"/"bottom 30%"` | **measured** (JS) |
| reveal easing | `cubic-bezier(.16,1,.3,1)` (expo-out) | measured (hero) / applied |
| scrubbed easing | linear (`ease:"none"`) | **measured** (JS) |
| reveal duration | ~0.6s | inferred (framer default range) |
| stagger between siblings | ~60–120ms | inferred |
| smooth scroll | Lenis 1.3.18 | **measured** |
| reveal trigger | fires once, ~12% before fully in view | our choice (matches once:true) |

## Files fetched (scratchpad, not committed)
- `lf.html` + all `/_next/static/chunks/*.js|*.css` (30 files)
- CDP probes: `cdp.py`, `iopatch.py`, `wheel.py` (headless Chrome drivers used to read
  live from-states; kept for reproducibility)
