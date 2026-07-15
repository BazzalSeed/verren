# lightfield.app — typography & chrome deep-dive (implementable recipe)

Verified against the live site 2026-07-14 by curling the HTML + the three
`/_next/static/chunks/*.css` bundles and inspecting the rendered class usage.
This goes deeper than `lightfield-build-notes.md` — read that for the hero-collage
build and stack fingerprint; this file is the **type + chrome recipe** with
verbatim token values and, crucially, three corrections to the earlier notes.

---

## TL;DR — the three things that create the "premium light airy" feel

1. **One typeface, one weight.** The entire marketing page renders in
   **untitledSans at `font-weight: 400`** — *nothing is bold, nothing is a
   different family.* `--text-h1…h4--font-weight` and `--text-d4--font-weight`
   are all `400`. There are **zero `font-*` weight utilities and zero
   `tracking-*` utilities in the HTML** — every heading's tight tracking comes
   baked into its size token. Hierarchy is carried 100% by **size + ink opacity +
   whitespace**, never by weight or a second font.
2. **Small type, light ink.** Body base is **15px** (13px on mobile) and body
   copy sits at **50% black** (`content-quaternary`); headings top out at **28px
   at 85% black** (`content-primary`) — never pure black, never large-display.
   The two most-used sizes on the whole page are 12px and 13px.
3. **4% hairlines + gradient wash.** Sections are divided by a near-invisible
   **4%-black top border** (`border-surface-primary`, used 32×), and the page
   floats on a cool→warm gradient wash. That's the whole "chrome."

### Corrections to `lightfield-build-notes.md`
- **Body font is NOT Inter.** `inter_…` class appears **0 times** in the shipped
  HTML. Inter, untitledSerif, and DM Mono are loaded as `next/font` faces but the
  landing page is effectively **single-typeface untitledSans**. (`--default-font-family:
  var(--font-sans)` → `var(--untitled-sans)`.) Treat Inter/serif/mono as app-UI
  fonts, not landing-page fonts.
- **Buttons are smaller than previously noted.** Live primary button is
  `h-6.5` (**26px**), `text-xs` (**12px**), not h-8/13px.
- **Page body background is `#f5f5f5`** (`background-secondary` / neutral-z1), set
  on `<body>`, with `dark:` → obsidian `#0d0d0d`. `#fafafa` (`background-primary`)
  is a surface, not the base.

---

## 1. Type scale — verbatim tokens (custom `--text-*`, not stock Tailwind)

Each size token ships its own line-height AND letter-spacing. **The tracking is
part of the size** — you never add it by hand.

| token        | size  | line-height        | letter-spacing | weight | typical role (from live markup) |
|--------------|-------|--------------------|----------------|--------|---------------------------------|
| `--text-xxs` | 11px  | 1.45               | —              | 400    | tiniest labels                  |
| `--text-xs`  | 12px  | 1.45               | —              | 400    | **most-used size (59×)** — labels, meta, buttons |
| `--text-sm`  | 13px  | 1.5                | —              | 400    | **body copy on mobile (55×)**, captions |
| `--text-base`| 15px  | 1.5                | —              | 400    | **body copy on desktop**, quiet feature titles |
| `--text-lg`  | 17px  | 1.5                | —              | 400    | larger body / card titles (`md:text-lg`) |
| `--text-h4`  | 19px  | 1.3                | −0.01em        | 400    | small section subheads (16×)    |
| `--text-h3`  | 21px  | 1.25               | −0.015em       | 400    | (`md:text-h3`)                  |
| `--text-h2`  | 24px  | 1.25               | −0.02em        | 400    | secondary section titles        |
| `--text-h1`  | 28px  | 1.2                | −0.03em        | 400    | **largest thing on the page** — hero H1 AND every section title |
| `--text-d4`  | 32px  | 1.15               | −0.035em       | 400    | "display" — defined but **not used** on the landing |
| `--text-2xl` | 24px  | calc(2/1.5)≈1.33   | —              | 400    | stock Tailwind holdovers, rare  |
| `--text-3xl` | 30px  | ≈1.2               | —              | 400    | rare                            |
| `--text-4xl` | 36px  | ≈1.11              | —              | 400    | rare                            |
| `--text-6xl` | 60px  | 1                  | —              | 400    | not used on landing             |

**Read this:** there is no giant marketing headline. The hero title and every
section title are the *same* 28px `text-h1`. Nothing on the page is larger than
28px. The "engineered, not shouty" feel is this ceiling plus the 400 weight.

Global tracking/leading tokens (only the negative heading ones are ever applied,
via the size tokens above):
```css
--tracking-tight:  -0.025em;   --tracking-wider: 0.05em;   /* neither used as a utility */
--leading-tight: 1.25;  --leading-normal: 1.5;  --leading-relaxed: 1.625;
```

### Font faces (self-hosted via next/font, `font-display: swap`)
```css
--font-sans:  var(--untitled-sans);   /* → "untitledSans","untitledSans Fallback" — DEFAULT for everything */
--font-serif: var(--untitled-serif);  /* loaded, ~unused on landing */
--font-mono:  var(--md-mono);         /* DM Mono — loaded, ~unused on landing */
--default-font-family: var(--font-sans);
/* untitledSans + untitledSerif ship regular(400) + italic only. Inter ships 100–900 variable but is unused here. */
/* Fallback face: local(Arial) with ascent-override:95.3% descent-override:23.49% size-adjust:105.15% */
```
Free swap for untitledSans: **General Sans**, **Switzer**, or **Neue Montreal**
(Fontshare). Load a single 400 weight — do not load bolds, you never use them.

---

## 2. Ink / color — the opacity ladder that carries hierarchy

The whole UI is a **grayscale of black-on-#f5f5f5** built from a black-alpha ramp.
Color energy comes only from screenshots, not chrome.

**Black-alpha ramp `--color-neutral-t*` (hex → opacity):**
```
t0 #00000005 =  2%    t4 #0000001f = 12%    t8  #00000080 = 50%
t1 #0000000a =  4%    t5 #00000029 = 16%    t9  #0009     = 60%
t2 #0000000f =  6%    t6 #00000040 = 25%    t10 #000000bf = 75%
t3 #00000014 =  8%    t7 #00000059 = 35%    t11 #000000d9 = 85%
```
Lightness ramp: `z0 #fafafa`, `z1 #f5f5f5`, `z10 #404040`, `z12 #0d0d0d`.

**Semantic content colors → what they mean in practice:**
```css
--color-content-primary:    t11  /* 85% — headings, feature titles. NEVER pure black */
--color-content-tertiary:   t10  /* 75% — hero H1 on MOBILE (desktop upgrades to primary) */
--color-content-secondary:  t9   /* 60% — secondary body, quiet subtitles */
--color-content-quaternary: t8   /* 50% — DEFAULT BODY COPY (lighter than secondary!) */
--color-content-hint-moderate: t7 /* 35% — hints */
--color-content-subtle / disabled: t6  /* 25% */
--color-content-faint:      t4   /* 12% — faintest text/icon */
--color-content-inverse:        --color-white;      /* on dark */
--color-content-inverse-subtle: #fff9 (60% white);  /* on dark */
```
Key: **body copy is 50% ink, headings 85% ink.** That ~35-point opacity gap — not
a weight or size jump — is what separates title from paragraph. Copy this exactly.

**Accent — one restrained blue, links/brand/focus only:**
```css
--color-content-brand:        --color-blue-z5  #80bfff;
--color-content-brand-strong: --color-blue-z8  #3182d4;
--color-blue-t2: #80bfff1f;  --color-blue-t3: #45a2ff3d;  /* subtle blue washes */
```

**Backgrounds / surfaces:**
```css
--color-background-primary:   #fafafa (z0);   /* surface */
--color-background-secondary: #f5f5f5 (z1);   /* <body> base bg */
--color-background-primary-obsidian: #0d0d0d (z12);  /* whole-page dark mode */
--color-surface-primary/secondary/quaternary: t1/t0/t0  /* 2–4% panel washes */
/* faint panel fill seen in markup: bg-interactive-primary/3  (white @3%) */
```

**Borders — hairlines are the entire divider system:**
```css
--color-surface-primary  = t1 (4%)   /* USED AS THE MAIN HAIRLINE via `border-surface-primary` (32×) */
--color-border-subtle    = t2 (6%)
--color-border-moderate  = t4 (12%)  /* stronger dividers, ~12× */
/* dark mode hairline: content-inverse-subtle/50 */
```

**Gradient washes (verbatim):**
```css
/* hero atmosphere — cool grey-lavender → warm cream, fixed full-viewport behind cards */
background: linear-gradient(to bottom, #c7c9d1, #ebe8e5);
/* secondary neutral gradient used to fill image/canvas placeholders (6×) */
background: linear-gradient(to bottom, #a6a6a6, #c3c3c3);
```

---

## 3. Vertical rhythm, columns & spacing

Spacing base `--spacing: 0.25rem` (4px). Observed rhythm (Tailwind step → px):

**Section-level (big) separations:**
```
md:pt-48  = 192px      pt-24 / pb-24 = 96px       md:pt-[152px] = 152px
pt-16 = 64px           md:mt-36 = 144px           md:mt-24 = 96px
```
**Block-internal (tight) rhythm — the eyebrow→title→body gaps:**
```
mt-1 = 4px   mt-2 = 8px   mt-3 = 12px   mt-4 = 16px   mt-8 = 32px
pt-3 = 12px  pb-6 = 24px  py-4 = 16px   py-3 = 12px   pb-12 = 48px
```
Canonical feature item (verbatim from markup):
```html
<li>
  <div class="max-w-[330px] border-surface-primary border-t pt-3 pb-6">
    <h3 class="mt-2 text-base text-content-primary md:text-base">Every customer interaction in context</h3>
    <div class="mt-2 max-w-[310px] text-sm text-content-quaternary md:text-base">Every email, meeting…</div>
  </div>
</li>
<!-- list wrapper: flex flex-col justify-end gap-2 pb-12 -->
```
So: **4% top-border hairline → 12px pad → title (15px/85%) → 8px gap → body
(13→15px/50%) → 24px pad.** Items separated by `gap-2` (8px) + their own hairline.

**Hero column (verbatim):**
```html
<div class="… flex-col items-center md:mt-32 lg:max-w-[450px] lg:items-stretch">
  <div class="bg-current mb-3 h-4 w-5 text-content-primary" style="mask-image:…logo.svg"></div>
  <h1 class="text-balance text-center text-content-tertiary text-h1 lg:text-left lg:text-content-primary">
      CRM that remembers everything and does the work for you.</h1>
  <!-- mt-4 → button row: flex flex-wrap gap-2 -->
</div>
```
Hero notes: logo mark `mb-3` (12px) above the title; H1 is `text-h1` (28px);
`text-balance`; **centered + 75% ink on mobile → left-aligned + 85% ink on
desktop** (`text-center text-content-tertiary` → `lg:text-left lg:text-content-primary`).
Buttons `mt-4` below, `gap-2` between.

**Text column max-widths:** hero `450px`; feature title `330px`, feature body
`310px`; long body `md:max-w-4/12` (⅓ of the 12-col grid). Keep measure short.

**Container / grid:**
```css
.container   { max-width: 1800px; padding-inline: 48px (→56px fluid); margin-inline: auto; }
.layout-grid { display:grid; grid-template-columns: repeat(4,1fr);  column-gap: .5rem; }  /* mobile */
@media md    { grid-template-columns: repeat(12,1fr); column-gap: 1.5rem; }                /* desktop */
```

---

## 4. Chrome: radius, buttons, nav

**Radius scale (actual utilities used):** `rounded-[2px]`, `rounded-[4px]` (17×),
`rounded-[6px]` (**34× — the default for buttons/cards**), `rounded-[10px]`
(desktop nav), `rounded-xl`=12px (mobile nav/panels), `rounded-full` (rare).

**Button (primary CTA), verbatim classes:**
```
inline-flex items-center justify-center rounded-[6px]
h-6.5 (26px)  text-xs (12px)  gap-[6px]  pl-[10px] pr-[8px]
bg-interactive-secondary (neutral-t1 = 4% fill)  text-content-primary
hover:bg-interactive-secondary-hover (t2 = 6%)   transition-colors duration-50 ease-out
/* primary override seen: bg-interactive-primary/80 (white @80%); dark: bg-interactive-inverse-subtle */
group/link → trailing arrow icon nudges right on hover
```
Every button is a **barely-there 4–6% fill with 85% text** — no saturated CTA
color anywhere. Arrow-nudge micro-interaction on hover.

**Nav (floating pill, blur via `::before` so nav content stays sharp):**
```
class="navbar surface-before relative z-100 flex h-8.5 (34px) w-full items-center
       overflow-clip rounded-xl pr-1.5 pl-4
       before:absolute before:inset-0 before:rounded-xl before:backdrop-blur-[17px]
       md:hidden dark:before:backdrop-blur-[23px]"
```
Desktop nav = `rounded-[10px]`; both use the `::before` `backdrop-blur(17px)` /
`23px`-in-dark trick. Reusable recipe:
```css
.navbar { position: relative; border-radius: 12px; z-index: 100; }
.navbar::before {
  content:""; position:absolute; inset:0; border-radius:inherit;
  backdrop-filter: blur(17px); pointer-events:none; z-index:-1;
}
```

**Shadows:** no shadow token system. Hero cards use Tailwind `drop-shadow-2xl`
(`filter: drop-shadow(0 25px 25px rgb(0 0 0/.15))`) applied per image only.

---

## 5. Responsive type shifts (mobile → desktop)

The scale barely changes — it mostly **bumps body one step and switches alignment
+ ink**, not a dramatic display re-scale:
- Body: `text-sm` (13px) → `md:text-base` (15px).
- Card titles: `text-sm` → `md:text-lg` (13 → 17px), or `text-base` unchanged.
- Subheads: `text-base`/`text-sm` → `md:text-h3` (→21px).
- Hero H1: same 28px both; changes **alignment** (center→left) and **ink**
  (tertiary 75% → primary 85%), not size.
- Layout: 4-col grid (mobile) → 12-col (desktop); container pad 48→56px.

---

## 6. Minimal reproduction recipe (drop-in CSS)

```css
:root{
  --font-display: "General Sans", ui-sans-serif, system-ui, sans-serif; /* untitledSans substitute, load 400 only */
  --ink-title: rgba(0,0,0,.85);   /* content-primary  */
  --ink-body:  rgba(0,0,0,.50);   /* content-quaternary — body copy */
  --ink-sub:   rgba(0,0,0,.60);   /* content-secondary */
  --ink-faint: rgba(0,0,0,.12);
  --hairline:  rgba(0,0,0,.04);   /* surface-primary — the divider */
  --border-mod:rgba(0,0,0,.12);
  --bg:        #f5f5f5;           /* background-secondary */
  --surface:   #fafafa;
  --brand:     #80bfff;
  --wash: linear-gradient(to bottom,#c7c9d1,#ebe8e5);
  --r: 6px;
}
body{ background:var(--bg); color:var(--ink-body);
      font-family:var(--font-display); font-weight:400;
      font-size:15px; line-height:1.5; -webkit-font-smoothing:antialiased; }

h1,.t-h1{ font-size:28px; line-height:1.2;  letter-spacing:-.03em;  font-weight:400; color:var(--ink-title); text-wrap:balance; }
h2,.t-h2{ font-size:24px; line-height:1.25; letter-spacing:-.02em;  font-weight:400; color:var(--ink-title); }
h3,.t-h3{ font-size:21px; line-height:1.25; letter-spacing:-.015em; font-weight:400; color:var(--ink-title); }
.t-h4  { font-size:19px; line-height:1.3;  letter-spacing:-.01em;  font-weight:400; color:var(--ink-title); }
.t-quiet-title{ font-size:15px; line-height:1.5; font-weight:400; color:var(--ink-title); } /* feature titles */
.t-body{ font-size:15px; line-height:1.5; color:var(--ink-body); max-width:34ch; }
.t-label{ font-size:12px; line-height:1.45; color:var(--ink-sub); }  /* NO uppercase, NO letter-spacing */

.section{ padding-block:96px; }                 /* pt/pb-24; hero-adjacent up to 152–192px */
.divide-item{ border-top:1px solid var(--hairline); padding-top:12px; padding-bottom:24px; }
.divide-item > * + *{ margin-top:8px; }

.btn{ display:inline-flex; align-items:center; gap:6px; height:26px; padding:0 8px 0 10px;
      border-radius:var(--r); font-size:12px; color:var(--ink-title);
      background:rgba(0,0,0,.04); transition:background .05s ease-out; }
.btn:hover{ background:rgba(0,0,0,.06); }

.hero-wash{ position:fixed; inset:0; z-index:-1; background:var(--wash); pointer-events:none; }
```

**Rules of thumb to keep it "lightfield":**
- Never go bolder than 400. Never larger than 28px. Never darker than 85% for
  text, never lighter background contrast than a 4% hairline.
- Separate title from body with **opacity (85% vs 50%)**, not weight or size.
- One typeface. One accent color, used only for links/brand.
- Dividers are 4% hairlines; panels are 2–4% fills; buttons are 4–6% fills.
- Short measures (≤34ch body), generous section padding (96px+), tight internal
  rhythm (8/12/24px).

---

## Source files (scratchpad, not committed)
- `lf.html` (291 KB rendered HTML), CSS: `aa1147ab3fc56c52.css` (untitledSans/Serif
  + DM Mono faces), `aea53d880a30d667.css` (Inter faces + hero fade-blur keyframes),
  `d2c3764c9807b68b.css` (139 KB — Tailwind v4 + full design-token layer).
  Pulled from `https://lightfield.app/` on 2026-07-14.
