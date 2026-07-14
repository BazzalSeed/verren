# lightfield.app — build teardown

Researched by curling the raw HTML + CSS chunks and pulling the actual hero image
assets from Sanity's CDN (no JS execution needed — everything is server-rendered).
Verified 2026-07-14.

## Stack fingerprint

- **Framework:** Next.js, deployed on Vercel (`dpl_...` query-string on every static
  asset is the Vercel deployment ID; `/_next/static/chunks/*.css|*.js` is the App
  Router build output). Turbopack build (a `turbopack-*.js` chunk ships).
- **CMS:** Sanity.io. Every piece of hero/page content is wired through
  `data-sanity="id=homepage;type=homepage;path=body:...;base=https://lightfield-website.sanity.studio"`
  attributes (Sanity's visual-editing overlay markers), and all imagery is served
  from `cdn.sanity.io/images/3ccg9tet/production/...`. So: Next.js front end,
  content authored in Sanity Studio, images run through Next's `/_next/image`
  optimizer.
- **CSS:** Tailwind v4 (`@theme`/`@property` custom-property registration, the
  `--tw-*` variable soup, oklab/lab color functions) with a large **custom design
  token layer** on top — this is not stock Tailwind, it's a proper token system
  (see below).
- **Smooth scroll:** Lenis (`<html class="lenis">`). No GSAP/Framer Motion markers
  found in the shipped HTML/CSS class names.
- **Fonts:** self-hosted via `next/font` (woff2, `font-display: swap`, with
  auto-generated "Fallback" faces using `ascent-override`/`size-adjust` — the
  `next/font` fingerprint).

## Colors

Token system is organized as raw ramps (`--color-{hue}-z{0-12}` for lightness
steps, `--color-{hue}-t{0-11}` for black-alpha tints) feeding semantic aliases.
Key values pulled from the CSS:

```css
/* neutrals (the entire UI's grey scale) */
--color-neutral-z0:  #fafafa   /* page background */
--color-neutral-z1:  #f5f5f5   /* secondary surface */
--color-neutral-z10: #404040
--color-neutral-z12: #0d0d0d   /* near-black, "obsidian" bg */
--color-white:       #000... / lab(0% 0 0)  /* NB: this build's --color-black */

/* black-alpha tint ramp, used for borders/dividers/disabled states */
--color-neutral-t0:  #00000005
--color-neutral-t2:  #0000000f
--color-neutral-t4:  #0000001f   /* --color-border-moderate */
--color-neutral-t6:  #00000040   /* --color-content-subtle / disabled */
--color-neutral-t9:  #0009
--color-neutral-t11: #000000d9   /* --color-content-primary (body text) */

/* the one saturated accent: a blue used for links/brand/focus */
--color-blue-z5: #80bfff   /* --color-content-brand */
--color-blue-z8: #3182d4   /* --color-content-brand-strong */
--color-blue-t2: #80bfff1f  /* subtle blue wash background */
--color-blue-t3: #45a2ff3d

/* semantic aliases actually used in markup */
--color-background-primary:   var(--color-neutral-z0)   /* #fafafa */
--color-background-secondary: var(--color-neutral-z1)   /* #f5f5f5 */
--color-background-tertiary:  var(--color-white)
--color-background-primary-obsidian: var(--color-neutral-z12)  /* dark-mode surface */
--color-content-primary:   var(--color-neutral-t11)  /* body/heading text */
--color-content-secondary: var(--color-neutral-t9)
--color-content-tertiary:  var(--color-neutral-t? (lighter, used for h1 on mobile)
--color-border-subtle:   var(--color-neutral-t2)
--color-border-moderate: var(--color-neutral-t4)
```

Page background is not flat — the hero sits on a soft linear gradient wash:

```css
background: linear-gradient(to bottom, #c7c9d1, #ebe8e5);
```

(`bg-linear-to-b from-[#c7c9d1] to-[#ebe8e5]`, fixed full-viewport, sits *behind*
the hero image stack — this is what gives the page its cool grey-lavender-to-warm-cream
top-of-page glow.) This is the single most reproducible "brand feel" element and is
cheap to steal directly.

Semantically the whole palette is: near-white/near-black neutrals (functionally a
grayscale product), one restrained blue accent, and a background gradient wash. No
loud color — the color energy comes entirely from real app-UI screenshots in the
hero, not from the chrome.

## Typography

**Font stack (self-hosted, via `next/font`):**

| role | family | note |
|---|---|---|
| Display/headings | **untitledSans** | Klim Type Foundry, commercial (~$200+/license). Grotesk sans, geometric-humanist. |
| Serif accents (rare, italic pull-quotes) | **untitledSerif** | Klim Type Foundry, commercial, paired sibling of the above. |
| Body/UI | **Inter** | free, Google Fonts / Rsms. Variable weight 100–900 loaded. |
| Mono (code/labels) | **DM Mono** | free, Google Fonts. Weights 400/500. |

**Free substitution if you don't want to license Klim:**
- untitledSans → **General Sans** (Fontshare, free) or **Neue Montreal** (Fontshare,
  free) — both are geometric grotesks in the same family as untitledSans. Closest
  single swap: **Switzer** (Fontshare) or **Inter Tight** if you want zero extra
  font weight to load.
- untitledSerif → **Fraunces** (Google Fonts, has the same slightly-quirky serif
  personality) or **Newsreader**.
- Inter and DM Mono are already free — use as-is.

**Type scale** (custom `--text-*` tokens, not Tailwind's stock scale):

```css
--text-xxs: 11px / 1.45     --text-h4: 19px / 1.3
--text-xs:  12px / 1.45     --text-h3: 21px / 1.25
--text-sm:  13px / 1.5      --text-h2: 24px / 1.25
--text-base:15px / 1.5      --text-h1: 28px / 1.2
--text-lg:  17px / 1.5      --text-d4: 32px / 1.15   /* "display" size */
--text-2xl: 24px            --text-3xl: 30px
--text-4xl: 36px            --text-6xl: 60px / 1
```

Note the body base is **15px**, not 16 — everything reads slightly denser/smaller
than default browser sizing, which is part of why the site feels "engineered"
rather than "marketing-site large type." Letter-spacing tokens are minimal:
`--tracking-tight: -0.025em` (used on headings), `--tracking-wider: 0.05em` (used
on tiny uppercase labels).

## Spacing / radius / shadow scale

```css
--radius-sm:  4px
--radius-md:  6px    /* buttons use this: rounded-[6px] */
--radius-lg:  8px
--radius-xl:  10px   /* desktop nav pill: rounded-[10px] */
--radius-2xl: 12px   /* mobile nav pill: rounded-xl */
```

Container/grid system (12-col desktop, 4-col mobile, generous gutter):

```css
.container   { max-width: 1800px; padding-inline: 48–56px (var(--min-px)/--max-px)); margin-inline: auto; }
.layout-grid { display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 0.5rem; }   /* mobile */
.layout-grid { grid-template-columns: repeat(12, 1fr); column-gap: 1.5rem; }                  /* md+ */
```

No custom `box-shadow` "shadow scale" token was found — Tailwind's default
`shadow`/`drop-shadow-2xl` utilities are used directly on hero images
(`drop-shadow-2xl`, which is CSS `filter: drop-shadow(...)`, applied per-image, not
a design-token shadow recipe).

## Nav

Two navs are shipped, swapped by breakpoint (`hidden md:flex` / `md:hidden`), both
"floating pill" style:

- **Desktop:** `rounded-[10px]`, `py-1`, `w-max` (hugs content), sits centered/top,
  `backdrop-blur(17px)` (23px in dark mode) applied via a `::before` pseudo-element
  layered under the content (`surface-before` class) rather than directly on the
  nav — this lets them blur the background without blurring the nav's own
  content/text.
- **Mobile:** `rounded-xl` (12px), fixed height `h-8.5` (34px), full width, same
  `::before` blur trick.

Recipe:
```css
.navbar {
  position: relative;
  border-radius: 10px;
  z-index: 100;
}
.navbar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  backdrop-filter: blur(17px);
  pointer-events: none;
  z-index: -1;
}
```

## Buttons

```css
.button {
  display: inline-flex; align-items: center; justify-content: center;
  height: 32px; /* h-8 */
  padding: 0 8px 0 10px;
  border-radius: 6px;
  font-size: 13px; /* text-sm token = 13px here */
  gap: 6px;
  transition: colors 200ms;
}
```
Primary = `bg-interactive-secondary` (near-white/light-grey fill, dark text) +
trailing arrow icon that nudges right on hover (`group/link` + icon translate).
Secondary/"Book a demo" = `bg-interactive-tertiary`, transparent-ish, text-only
weight. Both are low-contrast, UI-app-chrome buttons — no bright CTA color
anywhere, consistent with the grayscale-first palette.

## Footer

Standard 4-column link footer (`Product` / `Company` / etc.) inside the same
`.container` + `.layout-grid`, `border-t` divider using the same
`--color-border-*` tokens, `text-sm` throughout. Nothing structurally novel.

---

## THE HERO — how the "3D" collage is actually built

**This is the single most important finding: it is not live 3D CSS.** There is no
`perspective`, `rotateX`, `rotateY`, `rotateZ`, or `transform-style: preserve-3d`
anywhere in the shipped stylesheet (checked — Tailwind v4 registers those CSS
custom properties globally via `@property` but every one of them resolves to
`initial`, i.e. unused). No WebGL/Three.js/Spline canvas either.

**What it actually is: three separately pre-rendered, already-tilted PNG
screenshots, absolutely positioned with a percentage-based offset and a
z-index, on top of a gradient background.** Each PNG already has its rotation,
perspective-ish skew, and soft drop shadow *baked into the pixels* — the images
were exported flat (from Figma/design tool or a real screenshot rotated in a
design tool) with transparent backgrounds around the rotated card.

Confirmed by fetching the actual hero assets from Sanity's CDN and inspecting
them directly:

1. `.../a52f6af4...-1305x1065.png` (mobile hero, single flattened composite of
   all 3 cards fanned out) and `.../e8dcf02c...-1596x471.png` (just the top
   "prompt" card cropped) — both are plain PNGs (despite the `.heif` URL
   extension — Sanity's CDN param naming is misleading; `file` identifies them
   as PNG) at ~2× shown size, alpha-transparent outside the rotated card shape,
   with a soft blurred shadow baked around the card edge.
2. On desktop the hero is **three independent images**, not one composite,
   stacked with plain CSS absolute positioning:

```html
<!-- z-2: front card — a short "prompt" bar -->
<div class="absolute md:top-[2%] md:right-[28%] md:w-[100cqw] z-2">
  <img src=".../e8dcf02c...-1596x471.png" class="drop-shadow-2xl" />
</div>

<!-- z-1: middle card — the AI chat/answer panel -->
<div class="absolute md:right-[38%] md:top-[14%] md:min-w-[550px] z-1">
  <img src=".../f4441e81...-1833x915.png" class="drop-shadow-2xl" />
</div>

<!-- z-0: back layer — the full app screenshot -->
<div class="absolute lg:relative lg:-bottom-[50px] lg:-right-[50px] z-0">
  <img src=".../1f492704...-1794x2130.png" class="drop-shadow-2xl" />
</div>
```

Each image, opened individually, is a single rotated rounded-rect card
(measured ≈ **-4° to -5° rotation**, consistent angle across all three layers —
they were rotated as one group before being split, or all sampled from the same
rotated artboard) with:
- white/near-white card background, `border-radius` ≈ 12–16px
- a very soft, large, low-opacity drop shadow (matches `drop-shadow-2xl`:
  Tailwind's `filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))`)
- crisp raster text/UI baked in at ~2× pixel density (retina-sharp)

**Reveal animation** (from a small hashed CSS module, `hero-block-alt`):

```css
@keyframes fade-blur-in {
  0%  { opacity: 0; filter: blur(6px); }
  100%{ opacity: 1; filter: blur(0); }
}
.fadeIn1 { opacity: 0; animation: 1.5s cubic-bezier(.16,1,.3,1) 0.5s both fade-blur-in; }
.fadeIn2 { opacity: 0; animation: 1.5s cubic-bezier(.16,1,.3,1) 1s   both fade-blur-in; }
```
i.e. layers fade+un-blur in on page load, staggered 500ms apart (no scroll-driven
animation, no parallax-on-scroll — Lenis is present for smooth *scroll feel*
site-wide, not for hero motion). There's also an `#overlay-hero-intro` full-bleed
div at `opacity:1` that appears to cross-fade away on load (a loading-state mask),
and JS toggles a `.spin` loader class (1.2s linear infinite `rotate(360deg)`)
while the intro overlay is up.

### How to rebuild this hero in pure HTML/CSS

You don't need a 3D engine. Recipe:

**1. Produce 2–3 flat card images already rotated ~4–6°**, each on transparent
background, with the shadow baked in (or use CSS `filter: drop-shadow(...)` live
— cheaper to iterate, costs a bit of paint performance, totally fine for 2-3
layers):

```html
<div class="hero-stack">
  <img class="hero-card hero-card--back"   src="app-screenshot.png"  alt="">
  <img class="hero-card hero-card--mid"    src="chat-panel.png"      alt="">
  <img class="hero-card hero-card--front"  src="prompt-bar.png"      alt="">
</div>
```

```css
.hero-stack {
  position: relative;
  width: min(1000px, 75vh);
  aspect-ratio: 1 / 1;           /* tune to your art */
}

.hero-card {
  position: absolute;
  width: 100%;
  height: auto;
  border-radius: 14px;
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))
          drop-shadow(0 8px 10px rgb(0 0 0 / 0.08));
  transform-origin: center;
  will-change: transform, opacity, filter;
}

/* If your source art is NOT pre-rotated, rotate live instead: */
.hero-card--back  { rotate: -4deg; bottom: -50px; right: -50px; z-index: 0; }
.hero-card--mid   { rotate: -4.5deg; top: 14%; right: 38%; min-width: 550px; z-index: 1; }
.hero-card--front { rotate: -5deg; top: 2%; right: 28%; z-index: 2; }

/* staggered fade-blur reveal on load */
@keyframes fade-blur-in {
  from { opacity: 0; filter: blur(6px); }
  to   { opacity: 1; filter: blur(0); }
}
.hero-card--mid   { opacity: 0; animation: fade-blur-in 1.5s cubic-bezier(.16,1,.3,1) .5s both; }
.hero-card--front { opacity: 0; animation: fade-blur-in 1.5s cubic-bezier(.16,1,.3,1) 1s  both; }
```

**2. Put it on the gradient wash background**, positioned `fixed`/full-bleed
behind everything, so the cards read as floating above atmosphere rather than a
flat page:

```css
.hero-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: linear-gradient(to bottom, #c7c9d1, #ebe8e5);
  pointer-events: none;
}
```

**3. If you want genuine perspective depth** (lightfield.app doesn't use this,
but if the goal is to go further than they did), layer real 3D on top of the same
2D-image technique instead of replacing it — wrap the stack in a perspective
container and tilt each *layer* independently in 3D, keeping the same stagger/
fade-in timing:

```css
.hero-stack-3d { perspective: 1600px; }
.hero-card {
  transform: rotateX(8deg) rotateY(-14deg) rotateZ(-4deg) translateZ(0);
  transform-style: preserve-3d;
}
.hero-card--mid   { transform: rotateX(6deg) rotateY(-10deg) rotateZ(-4.5deg) translateZ(60px); }
.hero-card--front { transform: rotateX(4deg) rotateY(-6deg)  rotateZ(-5deg)   translateZ(120px); }
```
This is a legitimate escalation, not what the real site does — flag it as an
enhancement, not a "match."

**Key takeaway for a builder:** the hard part of lightfield's hero isn't CSS at
all, it's producing 2–3 clean, consistently-lit, consistently-rotated app-UI card
renders (screenshot → open in Figma → group → rotate ~-4° → export PNG with
shadow, or export shadow-free and apply `drop-shadow` live as above). The CSS/DOM
side is three `position: absolute` images and a two-line stagger animation.

---

## Source files fetched during this research (scratchpad, not committed)

- Raw HTML: `lf.html`
- CSS chunks: `aa1147ab3fc56c52.css` (untitledSans/untitledSerif/DM Mono
  `@font-face`), `aea53d880a30d667.css` (Inter `@font-face` + hero fade-blur
  keyframes), `d2c3764c9807b68b.css` (main Tailwind v4 + design-token bundle)
- Hero image assets: `hero1.png` (mobile composite), `hero2.png` (prompt-bar
  card, desktop), `img1.png` (chat-panel card, desktop), `img2.png` (full app
  screenshot, desktop back layer)

All pulled from `https://lightfield.app/` and `https://cdn.sanity.io/images/3ccg9tet/production/...` on 2026-07-14.
