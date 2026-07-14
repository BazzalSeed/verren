# Verren — project handoff (from the tada-web pivot session, 2026-07-14)

**What this is:** the complete, self-sufficient context for building **Verren — the AI chief of
staff for financial advisors**. It was incubated in the tada-web repo (the founder's live AI
to-do app at gettada.app); everything worth keeping was copied INTO this repo — nothing below
requires tada-web.

**What's in this repo at handoff:**
- `index.html` — the chosen landing page design (self-contained HTML; details §4). **First work item.**
- `docs/narrative.md` — the LOCKED marketing copy every page surface renders. Copy changes go here first.
- `docs/research/` — six research briefs, every claim sourced with URLs:
  - `opportunity-one-pager.md` — the polished **external design-partner pitch** (positioning source of truth)
  - `nevis-brief.md`, `lightfield-brief.md` — competitor teardowns
  - `lightfield-build-notes.md` — how lightfield.app is engineered (tokens/type/3D-hero recipe; `index.html` implements it)
  - `wealth-crm-market-brief.md`, `aum-tam-addendum.md` — market sizing + AUM/fee-pool data
- `design/.nocache_server.py` — dev preview server (`python3 design/.nocache_server.py` → :8732 with `Cache-Control: no-store`; serves its own directory, so move it or run a root server for `index.html`).

---

## 1. Positioning (locked with the founder)

**Frame: "The AI chief of staff for financial advisors" — deliberately NOT "a CRM."**
- "CRM" is the villain, never our category: *"Most advisors got a CRM instead: a filing cabinet
  that remembers nothing you don't type and does nothing you don't click."* Use the word once as
  contrast (also keeps SEO); never adopt it. Don't say "legacy CRM" either — vendor-speak, and it
  implies we're a modern CRM.
- Two pillars — **"knows everything, handles everything"**:
  1. **Knows your book in real time** — self-updating client profiles from email/meetings/notes;
     surfaces what matters (life events, RMD deadlines, good clients gone quiet). Intelligence is
     a GROWTH story (wallet share, referrals, retention, practice valuation at sale), not just
     saved data entry.
  2. **Handles the follow-through — with your approval** — books follow-up meetings, drafts
     emails in the advisor's voice, runs outreach, preps every meeting. Never acts over the
     advisor's head: every action shows its concrete effect, fires only on explicit approval,
     full audit trail. (Locked product principle: **never auto-execute a side effect.**)
- **Trust story (SaaS, NOT on-prem — explicit founder decision):** *"We run our own AI models on
  infrastructure we control — client data is never sent to third-party AI providers (not OpenAI,
  not Anthropic, not Google)."* Open-weight models, no training on customer data, audit trail,
  "designed for" SEC/FINRA AI expectations. **Banned phrasing:** "data never leaves your firm"
  (v1 is multi-tenant SaaS). Single-tenant/VPC = roadmap language only. **No fake trust signals
  ever**: no SOC 2 badges, testimonials, client logos, or AUM claims until real.
- **Incumbent-CRM strategy: trojan horse.** Day 1 sits alongside (email/calendar sync, optional
  CRM sync); the living profile becomes the record advisors trust; retiring the old system is the
  customer's idea. Design-partner answer: *"It works alongside what you have."*
- **GTM now:** design-partner waitlist targeting independent advisors / small RIAs (the segment
  Nevis's sales-led motion ignores). CTA everywhere: **"Request early access."**
- Ambition arc (from the one-pager): chief of staff → the record → the operating platform for
  the practice, priced like wealth platforms — **seats are the on-ramp, bps-on-AUM is the endgame.**

## 2. Market facts to reach for (all sourced in docs/research/)

- ~300k US advisors; 16.5k SEC-registered RIA firms; advisors client-facing only **41%** of time.
- Meeting lifecycle: 13.5 hrs/client/yr → **frame as "1,350 hours a year on a 100-client book —
  two-thirds of a full-time hire"** (the per-client number alone sounds too small to automate).
- Incumbents: Redtail 26% share / Wealthbox 22% / Salesforce FSC; integration satisfaction 6.2/10.
- AI momentum: notetakers 0 → 40–60% adoption in one year (T3 2026); Jump $80M, Zocks $45M,
  Nevis $40M (Sequoia/ICONIQ) — all validate pieces; none combine living whole-relationship
  profile + gated execution + own-models trust, self-serve for the RIA long tail.
- Money: retail advised AUM ~$31T; ~1% fee → **$250–310B/yr fee pool**; wealth-tech monetizes in
  bps (Addepar 0.8–3bps, AssetMark ~50bps, Envestnet 60% asset-based revenue).
- Regulatory tailwind: SEC 2025 exam priorities + FINRA 2026 GenAI guidance make "where does
  client data go?" a budgeted compliance question.

## 3. Founders ("why us" — validated copy in the one-pager)

- **Seed Zeng** (seedzeng.com — the user) — Klaviyo founding engineer 2017–2020: built the Abacus
  streaming ingestion platform, scaled ~300× to 150k events/sec ("profiles that stay current" at
  scale IS the background). Now Senior Staff at DoorDash leading a 40+ engineer Storage org.
  Already shipped the core loop solo in Tada: multi-modal capture → structured extraction →
  human-gated agent execution, in production.
- **Hansen Liang** (hansenliang.com) — co-founder, product. 0-to-1 product lead at Klaviyo
  (launched Klaviyo Service and Klaviyo Reviews); independently building Convo, a personal CRM.
- Industry access: advisory bench of wealth managers + design-partner RIAs (Cerity Partners
  profile) — in progress; framed externally as "the ask," never as claimed traction.
- Pitch contact currently: cdzengpeiyun@gmail.com (likely wants a product-domain address).

## 4. The landing page (`index.html`) — state and near-term plan

Chosen after two design rounds (3 generic variants rejected; then "Tada-heritage" vs
"Lightfield-clean" head-to-head; Lightfield-clean won and was iterated with the founder).

**Design system = lightfield.app's register, applied exactly** (see `docs/research/lightfield-build-notes.md`):
- Fonts: **General Sans** (Fontshare — free twin of their licensed Untitled Sans) for display,
  weight 500, tracking -0.025em; **Inter** body at **15px** base; **DM Mono** uppercase labels;
  Fraunces kept only as a rare italic accent face.
- **Ink is never pure black** (founder: "their black is less sharp"): body/headings 85% black
  `rgba(0,0,0,.85)`, secondary 60%, **hero h1 = weight 400 at `rgba(0,0,0,0.72)`** — the light,
  airy statement is the look.
- Gradient wash `#c7c9d1 → #ebe8e5 → #fafafa`; obsidian `#0d0d0d` primary buttons, radius 6px;
  blur-pill sticky nav; one blue accent `#3182d4`; auto dark mode included.
- Hero centerpiece: **live-DOM 3D card stack** (client-profile card "Jordan Ellis" with surfaced
  signals; pending-approval card "Book follow-up — Thu 10:00 ✓ Approve" + drafted email snippet;
  app-frame skeleton behind) with JS float + pointer parallax. All data in mocks must stay
  obviously fictional.
- Tunable tokens are CSS vars in `:root` (`--wash-top/mid`, `--tilt`, `--cardA/B/C-rz`,
  `--card-radius`, `--card-shadow-a`, `--hero-h1-max`) — a tuning-knobs session drove these.
- Waitlist form is currently a **visual stub** (prevent-default → success message). The wired
  backend contract is §5.
- Wordmark in the file is still "Ta-da." — **needs rebranding to Verren** (first content task).

**Next planned step (agreed with founder before handoff):** iterate content **section by
section** — hero → problem/stats → how-it-works → trust → founders → waitlist → footer — with
the founder critiquing live against the rendered page.

**Technical gotchas learned the hard way (apply here too):**
- Embedded webviews (cmux/WKWebView) **suspend CSS animations AND rAF at t=0** when backgrounded —
  screenshots render frozen. Never leave elements invisible pending an animation (`animation …
  both` from `opacity:0` = permanently invisible there). Pattern that works: visible by default,
  entrance via JS-toggled CSS *transitions*; JS motion loops need a setInterval fallback if rAF
  doesn't tick within ~500ms. `index.html` already implements both. Verify motion in a real
  browser (Playwright/Chromium), not a webview screenshot.
- 3D card stacks: **`transform-style: flat` + z-index**, never `preserve-3d` for sibling cards —
  rotated planes intersect and visually slice through each other.
- When script-editing large HTML files, size-guard before writing (`assert len(new) < len(old)+N`)
  — a heredoc edit once ballooned this file's ancestor to 64MB.

## 5. Waitlist backend — contract (rebuild here; ~1 hour with tests)

Built and fully tested in the incubator repo; re-create in this stack:
- Table `waitlist_signup`: `id` (cuid PK), `created_at` (default now), `email` (unique), `note` (nullable text).
- `addWaitlistSignup(email, note) → boolean` — insert; on unique-violation return false; rethrow others.
- `POST /api/waitlist` (public, no auth), body `{ email, note?, company? }`:
  - `company` is a **honeypot**: if present, return `201 {"ok":true}` and write nothing.
  - email: trim + lowercase + regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`; invalid → `400 {"error":"Enter a valid email"}`.
  - note: trim, cap 2000 chars, empty → null.
  - Rate limit 5/min/IP (in-memory Map keyed on first `x-forwarded-for` hop is fine at this scale) → 429.
  - New signup → `201 {"ok":true}`; duplicate email → `200 {"ok":true}` (idempotent).
- Client behavior (for when the form gets wired): pending state; success message
  `You're on the list — we'll be in touch shortly.`; failure keeps the typed email and shows
  `Something went wrong — your email wasn't lost, try again.` (both strings are in narrative.md).
- Test cases that gated it: create→201 w/ normalized args; duplicate→200; invalid→400 (no store
  call); honeypot→201 (no store call); 6th request in a minute from one IP→429; plus a real-DB
  create-then-duplicate integration test.

## 6. Stack assumptions (inherited defaults — confirm with founder before scaffolding)

Likely same as the incubator: Next.js App Router, TypeScript only, Prisma/Postgres, Vercel.
**No Claude/Anthropic in the product runtime** (cost — and the trust story says self-hosted
open-weight models for client data; Gemini/OpenAI acceptable for non-client-data paths).
Never commit secrets; wire keys snake_case / TS camelCase; providers behind seams.

## 7. Open questions to surface early

1. **Name/brand:** repo is "verren" — presumably the product name. Confirm spelling/casing +
   domain, then rebrand `index.html` (wordmark, title, footer) and the one-pager.
2. Marketing site only first, or app skeleton too? (Agreed sequence was: site + waitlist →
   5–10 RIA design-partner conversations → then the CRM prototype.)
3. Waitlist + pitch contact email/domain.
4. Hosting/deploy target for the landing (static `index.html` today — trivially Vercel-able as-is
   or as the seed of a Next.js app).
