# Three-copy positioning test — design

Date: 2026-07-19 · Status: approved (brainstorm with Seed) · Scope: LOCAL ONLY, never deployed

## Purpose

A feedback instrument, not an A/B traffic test. Three copies of the marketing
site, each the strongest form of one distinct pitch, shown side-by-side to
advisors (Tyler and peers). The ask: *"Three ways we describe the same product —
which one would make you take the meeting?"*

Two clean experimental layers:

- **Main vs. the two variants** — role pitch vs. outcome pitch (headline axis)
- **/claude vs. /claude-team** — same outcome headline, both first person; the
  identity behind it differs: "the AI chief of staff" vs. "the support team
  you never hired" (identity axis)

All three must stay recognizably the Verren site (premium shell, hero card
stack, pinned scrubs, Problem stats, Security, Team, Waitlist). Divergence
lives in copy only. Flow content sourced from `docs/tyler-flows.md`.

## The three copies

### `/` — role pitch (untouched)

"Your AI Chief of Staff." I-voice, capabilities features. The control; nothing
changes. (If the identity pitch wins, follow-up: port /claude's earlier
sharpened targeting — audience in H1, wealth-management label — to main.)

### `/claude` — outcome × chief of staff (I-voice)

- Label: `For financial advisors & wealth management firms`
- H1: **Win the client. Onboard them. Keep them.** ("Win them" directly under
  the audience label read as winning the advisors — the object is explicit.)
- Sub: *Verren is the AI chief of staff that runs all three — prospecting,
  onboarding, and the everyday work of serving your book — inside the tools
  your firm already uses, always with your approval.*
- Rest as already built: flows section "What a great chief of staff does."
  with I-voice pages (I win you the client / I make their first year
  effortless / I keep the whole book moving) and the three named-tool visuals;
  Problem, Introducing, Security, Founders, Waitlist reused read-only.

### `/claude-team` — outcome × support team (I-voice; revised 2026-07-19)

Iteration note: the first build used we-voice throughout; Seed cut it —
Verren stays first person ("one entity doing a whole team's work IS the
pitch"), and speaker-framing headers were dropped in favor of the promise.

- Label + H1: identical to /claude (isolates the identity variable).
- Sub: *I'm Verren — the support team you never hired. I work your pipeline,
  onboard your clients, and run the daily grind — inside the tools your firm
  already uses, always with your approval.*
- Flows header: **What `Verren` does for you.** — the name renders in the
  signature hand (Caveat, same as wordmark/sign-off). Page titles likewise
  signature-signed: *`Verren` wins you the client* / *`Verren` makes their
  first year effortless* / *`Verren` keeps the whole book moving*; bodies
  stay in Verren's first person. Same three visuals.
- Introducing: live copy with ONLY the opening statement overridden — "I'm
  Verren — the support team you never hired. The associate, the client
  service desk, the ops person — the team big-firm advisors take for
  granted, in one hire. …" Paras 2–3 / kicker / sign come from the live
  copy at render time (stay in sync).
- Audience prominence (this variant): hero label promoted to the headline's
  address line (15px, title ink — still size/ink hierarchy, never weight),
  plus a "for financial advisors" mono lockup beside the wordmark in the
  nav so the targeting persists at every scroll position.
- Problem, Security, Founders, Waitlist reused read-only. Problem p2 ("You
  hired people to help…") is this copy's setup and needs no changes.

## Implementation shape

No component duplication: parameterize the existing claude namespace.

- `ClaudeLayout` takes optional `meta` prop (title/description), defaulting to
  /claude's.
- `ClaudeHero` takes optional `overrides` prop (label/h1/sub) merged over the
  live hero object, defaulting to /claude's.
- `ClaudeFlows` takes optional `flows` prop, defaulting to /claude's.
- New `TeamIntroducing` component (fork of live Introducing markup, team copy).
- Content: `src/content/claude.ts` (updated hero) + `src/content/claude-team.ts`.
- Route: `src/pages/claude-team/index.astro`.

## Guardrails (unchanged from live site)

No invented trust signals; approval-gated framing for trading/money movement;
never "data never leaves your firm"; tool names are integration framing, not
partnerships; mock client data obviously fictional. Repo is public — this doc
and `docs/tyler-flows.md` stay uncommitted until the repo-visibility question
is settled.

## Verification

Build green; both routes render; desktop 1440 + mobile 390 screenshots; no
horizontal overflow; document height stable while animations run.
