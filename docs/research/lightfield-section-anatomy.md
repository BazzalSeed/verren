# lightfield.app — homepage section anatomy

Companion to `lightfield-build-notes.md` (which covers tokens, type, and the hero
mechanics). This file is about **information architecture and section layout**: the
order of sections, how each one titles itself, the grid it sits on, and the exact
pattern used to present capabilities. Derived from the live server-rendered HTML +
the shipped CSS chunks, fetched 2026-07-14 (`lf.html`, `allcss.txt` in scratchpad).

> **Grid caveat:** the offset-grid readings below are inferred from Tailwind span
> classes (`col-span-4` / `md:col-span-6` on a 12-col `.layout-grid`), not from a
> rendered screenshot (no browser was available in this session to verify pixels).
> The class math is unambiguous, but treat "eyebrow cols 1–4, heading cols 5–10" as
> a class-level inference, not a measured fact.

---

## The one repeated primitive: the "heading-inline" block

Almost every section below the hero opens with the **same header molecule**, so
learn it once. Markup:

```html
<div class="heading-inline container md:border-t md:pt-4">   <!-- optional hairline divider on top -->
  <div class="layout-grid gap-y-4">                          <!-- 12-col grid -->
    <div class="col-span-4">                                 <!-- LEFT: narrow eyebrow column -->
      <div class="… rounded-[4px] border-[0.5px] border-border-moderate
                  monocaps-xxs px-1.5 py-1.25 text-content-quaternary">
        Foundations                                          <!-- the eyebrow LABEL -->
      </div>
    </div>
    <div class="col-span-4 md:col-span-6 [&_strong]:text-content-primary">  <!-- OFFSET: heading -->
      <h2 class="text-h1">
        <p><strong>Full customer context to build</strong></p>              <!-- lead = dark -->
      </h2>
    </div>
  </div>
</div>
```

Three things make this the signature of the whole page:

1. **The eyebrow is a bordered mono chip, not free-floating text.** A tiny outlined
   pill: `border-[0.5px]`, `rounded-[4px]`, mono-caps at **9px / letter-spacing 1px /
   weight 500** (`monocaps-xxs`), colored `content-quaternary` (the faintest ink) —
   `px-1.5 py-1.25`, `w-max` so it hugs its text. One or two words: *Introducing
   Lightfield, Foundations, Features, Testimonials, Security, Recent, Blog.*
2. **The chip sits in the far-left grid column (cols 1–4); the heading is offset to
   its right (cols 5–10, `col-span-6`).** Nothing is centered. The section title is
   *not* full-bleed — it lives in a ~6-column band pushed off the left margin, which
   is what gives the page its asymmetric, "engineered spec-sheet" feel. On mobile
   both stack to `col-span-4` (full width).
3. **The heading is a light-weight statement, ~28px.** `text-h1` here = **28px,
   line-height 1.2, letter-spacing −0.03em, font-weight 400** — big but not
   marketing-huge, and *not bold by default*. Weight/contrast comes from wrapping the
   emphasized clause in `<strong>` (→ `content-primary`, the darkest ink) while the
   rest of the wrapper stays `content-quaternary`. This **bold-lead / muted-tail**
   treatment recurs in body copy too (see statement-block).

Dividers between sections are **thin top hairlines** (`md:border-t border-surface-primary`
on the heading-inline), not color bands. The page background stays one continuous
near-white (`#fafafa`) the whole way down — no alternating stripes, no full-bleed
color sections. Separation is done with **whitespace + a single hairline**, nothing
heavier.

---

## Section-by-section outline (top → bottom)

### 0. Hero — `home-hero`
- **Purpose / copy:** one big claim. `<h1>`: *"CRM that remembers everything and does
  the work for you."* Two buttons (*Try for free*, *Book a demo*). Two tiny mono
  captions label the floating app cards (*Pipeline generation*, *Outbound agents that
  run on your CRM*). No eyebrow chip on the hero itself.
- **Layout:** the 3-card tilted PNG collage on the gradient wash (fully documented in
  `lightfield-build-notes.md` — not repeated here). `mb-[250px]` — a very large gap
  before the next section, letting the hero breathe.
- **Note:** the hero is the *only* place with imagery-forward energy above the fold.

### 1. Statement / "Introducing" — `statement-block`
- **Purpose:** the narrative "here's the shift" paragraph — the villain-vs-us frame.
- **Copy pattern:** eyebrow chip **"Introducing Lightfield"** + three short paragraphs
  at `text-h4` (**19px, weight 400**), `max-w-[580px]`, `space-y-[1em]`. Each paragraph
  **leads with a bold clause** (`<strong>` → primary ink) and trails into muted
  (`content-quaternary`):
  - *"**Traditional CRMs expect you to log notes…** They're built to record work, drown
    you in admin…"*
  - *"**Lightfield is an AI-native CRM that does the work for you.** Every customer
    interaction is captured automatically…"*
  - *"**You sell, and agents do the rest.**"* (a one-line kicker to close)
- **Layout:** same offset grid — chip in cols 1–4, the paragraph stack in
  `md:col-span-6`. Generous vertical padding (`pt-48 pb-24`). No image. Pure typography.

### 2. Video — `<section>` (unlabeled)
- A *"Watch video"* embed. **Skipping per brief — we won't use video.** Structurally
  it's a full-width media slot between the statement and the foundations grid.

### 3. Foundations — `foundation-block` (the 3-pillar "how it works")
- **Purpose:** the three load-bearing capabilities, presented as pillars.
- **Copy:** eyebrow **"Foundations"** + `h2.text-h1` two-line statement (`<br>`):
  *"Full customer context to build / and scale your company."* Then three items:
  1. *Every customer interaction in context* — "Every email, meeting… pulled in the
     moment it happens…"
  2. *Agents you build with prompts, not code* — "Describe what you want in natural
     language…"
  3. *An open platform, designed for agents* — "Connect through our open API and MCP…"
- **Layout — this is the key "capabilities" recipe:** a two-column split inside the
  `.container`/`layout-grid`:
  - **Text column (`col-span-4`, forced `md:order-first` = LEFT):** a `<ul>` of 3
    `<li>`. Each item is a small card `max-w-[330px]` with a **top hairline**
    (`border-t pt-3 pb-6`), an `<h3>` label at **text-base** (`content-primary`), and a
    body at **text-sm→base** (`content-quaternary`, `max-w-[310px]`). The list is
    `flex-col justify-end` — items bottom-align against the visual.
  - **Visual column (`col-span-8` = RIGHT):** a full-height Lottie `<canvas>` animation
    (`h-[740px]`). (We'd substitute a static diagram/screenshot; no icons are used.)
- **No icons.** The only ornament per item is the hairline rule above it.

### 4. Features — `features-block` (the numbered capability showcase)
- **Purpose:** the long tail of "what you can do" — **8** capabilities, numbered 01–08.
- **Copy:** eyebrow **"Features"** + `h2.text-h1` *"What you can do with Lightfield."*
  Then 8 titled items (each: number, title, description, and a screenshot):
  01 A prioritized view of your market · 02 Prep, capture, and summarize meetings ·
  03 Answer questions about your business · 04 Send personalized emails at scale ·
  05 Give engineers stronger customer signal · 06 Build and edit your pipeline in bulk ·
  07 Bring stale deals back to life · 08 Fill in missing data across your entire CRM.
- **Layout — a SCROLL-PINNED cross-fade, not a card grid.** The mechanism:
  - A **sticky** number index (`sticky top-[50vh]`) pins 01–08 on the right while you
    scroll; the active number highlights (`content-subtle` → primary).
  - The **title** (`.feature-title`, `text-lg`) and **description** (`.feature-description`,
    `text-base`, `content-quaternary`) are rendered as **8 absolutely-stacked layers**
    (`absolute bottom-0/top-0`) that swap in place as the scroll position advances —
    so one column of text morphs through all 8 states rather than repeating 8 times.
  - The screenshot/media panel (right) cross-fades in lockstep.
  - Widths: title `max-w-4/12`, description `max-w-4/12` — everything lives in ~a third
    of the grid; the media takes the rest.
- **Takeaway:** conceptually it's "one feature on screen at a time, scrubbed by scroll,"
  driven by a sticky container + stacked opacity layers. **We should replicate the
  *look* (number + title + muted body + screenshot, no icons) as a plain static grid or
  simple stacked rows — the scroll-scrubbing is expensive and unnecessary for 3 items.**

### 5. Testimonials — `testimonial-block`
- Eyebrow **"Testimonials"** + `h2` *"Built for high growth companies."* A wall of
  founder quotes (14.ai, ScaleAgentic, Underflow, CashQ, Reeva…), each with name/title.
- **We deliberately omit this** — the handoff bans testimonials until real.

### 6. Security — `security-block`
- Eyebrow **"Security"** + `h2` *"Built for trust."* A row of compliance badges:
  **SOC II Type II · HIPAA · ISO 27001** (some marked *Coming soon*).
- **We deliberately omit the badge row** — handoff bans SOC-2/compliance badges until
  real. BUT: our narrative *does* have a Trust section ("Your clients' data is not
  training data") — we present that as **copy in the statement/foundations pattern**,
  not as a badge wall.

### 7. Changelog — `changelog-block`
- Eyebrow **"Recent"** + `h2` *"Changelog."* Dated release notes. **Not applicable
  pre-launch** — omit.

### 8. Blog / News — `blog-router-block`
- Eyebrow **"Blog"** + `h2` *"News."* Three article cards with dates. **Omit** — no blog.

### 9. Final CTA + Footer — `<section>` (unlabeled)
- Big closing line `h2` *"Join thousands of companies using Lightfield."* + *Try free*
  button, then the standard multi-column link footer (© Lightfield 2026, "Built in San
  Francisco"). Structurally the CTA reuses the big-statement type; the footer is the
  4-column link grid from the build-notes.

---

## What lightfield does NOT do (the actual restraint)

Important correction to the common assumption: lightfield is **not** minimal in section
*count* — it ships a testimonial wall, a compliance-badge row, a changelog, and a blog.
Its restraint is entirely in **type, color, and decoration**:

- **No feature icons anywhere.** Capabilities are numbered (01–08) or hairline-ruled and
  carried by *screenshots + text*, never by icon glyphs.
- **No color bands / striped sections.** One continuous near-white background top to
  bottom; sections are separated by whitespace and a single top hairline.
- **No bright CTA color.** Buttons are grayscale UI chrome (see build-notes).
- **No centered marketing headings.** Everything is left/offset on the grid; section
  titles sit in an offset ~6-col band, not centered, not full-bleed.
- **No oversized hero type.** Section titles are 28px, body is 15–19px — deliberately
  small and dense ("engineered," not "marketing-loud").
- **Muted body ink.** Descriptive copy is `content-quaternary` (the faintest tint);
  only the lead clause of each statement gets dark ink via `<strong>`.

**Our restraint is stricter still** (from `handoff.md`): we additionally drop the
testimonial-block, the security-badge row, the changelog, and the blog — because we have
no real testimonials, certs, releases, or posts yet, and the handoff bans fake trust
signals. So our page = **hero → statement → 3-pillar foundations → (optional feature
grid) → trust-as-copy → founders → waitlist → footer**, all on the one restrained
type/color system above.

---

## Recommendation — mapping OUR sections onto their patterns

Our `narrative.md` actually defines **seven** content surfaces (Hero, Problem,
How-it-works, Trust, Founders, Waitlist, Footer), and there is **no section literally
titled "Introducing Verren."** The brief asked to map three (hero, "Introducing Verren"
narrative, features). Rather than collapse seven into three, treat the lightfield
patterns as a **reusable vocabulary** and apply it across all our surfaces. **Open
question for the lead:** the closest existing copy to an "Introducing Verren"
statement-block is our **Problem** section — do you want a *new* dedicated intro-narrative
section, or should the Problem copy play that role? (I recommend the latter — it already
reads as a bold-lead statement.)

### The reusable title/section vocabulary (adopt verbatim)

| Element | Recipe |
|---|---|
| **Eyebrow chip** | bordered mono-caps pill: `border-[0.5px]` `rounded-[4px]`, mono 9px / +1px tracking / weight 500, faintest ink, `w-max`, one–two words. Sits in the **left grid column**. |
| **Section title** | ~28px, **weight 400** (light), tracking −0.03em, offset into cols 5–10 (not centered, not full-bleed). Emphasis via `<strong>` (dark) on the lead clause; rest muted. |
| **Divider** | single top hairline on the heading block; no color bands. |
| **Body** | 15–19px, `content-quaternary`, bold-lead / muted-tail. |
| **Capability item** | number **or** top-hairline + label (text-base, dark) + body (muted). **No icons.** |

### The three requested maps

1. **Hero** → their `home-hero`. Already implemented (the live-DOM card stack in our
   `index.html`). No eyebrow chip on the hero. Keep the single big claim + two buttons.
   Our copy: eyebrow *"For financial advisors & RIAs"* already fits the tiny-mono-label
   role above the H1.

2. **"Introducing Verren" narrative** → their **`statement-block`**. This is the
   cleanest, highest-value pattern to steal. Apply it to our **Problem** section:
   - Eyebrow chip: **"The problem"** (or "Introducing Verren" if the lead wants the
     literal intro).
   - Body = our Problem copy at `text-h4` (19px), `max-w-580`, bold-lead / muted-tail —
     e.g. **"You're the advisor — and the assistant."** as the dark lead, the rest muted.
     Our section titles are already full sentences, so they drop straight into the
     bold-lead treatment.

3. **Features** → their **`foundation-block`**, *not* the 8-item scroll showcase. Our
   "How it works" has exactly **3 beats** (Everything flows in / It knows your book / It
   does the work), which maps 1:1 onto their 3-pillar hairline-list-beside-a-visual:
   - Eyebrow: **"How it works"**; title *"What a great chief of staff does"* at 28px.
   - Text column LEFT (`order-first`): 3 `<li>`, each top-hairline + `<h3>` label +
     muted body. **No icons.**
   - Visual column RIGHT: one static diagram/screenshot (substitute for their Lottie).
   - Only reach for the `features-block` numbered-showcase pattern if we later expand to
     a longer capability list — and build it **static (plain grid / stacked rows), never
     scroll-scrubbed.**

### Where the other narrative sections land (bonus)

- **Trust** ("Your clients' data is not training data") → `statement-block` header +
  the 3 trust points as a `foundation-block`-style hairline list. **Do NOT** copy their
  `security-block` badge row (banned).
- **Founders** → `statement-block` (bold-lead paragraph + sign-off links). No new pattern.
- **Waitlist** → their final-CTA section shape (big statement + single action), with our
  form in place of their button.
- **Footer** → their 4-column link footer, trimmed to our two lines.
