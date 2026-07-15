# Site narrative — locked copy (single source of truth)

All design variants and the production landing page render THIS copy verbatim.
Do not reword in HTML/Astro; propose copy changes by editing this file first.

Section order (lightfield register — see docs/research/lightfield-section-anatomy.md):
Hero → Problem → Introducing Verren → Features → Trust → Founders → Waitlist → Footer.
Every section below the hero opens with the eyebrow-chip + offset-title molecule.
Emphasis inside copy = `**bold lead**` → dark ink (85%), rest muted (50%) — never
actual bold weight.

## Hero

- Tiny mono label above H1: `For financial advisors & RIAs`
- Headline: `Your AI Chief of Staff.`
  (previous locked headline, kept as alternate: `Every advisor deserves a chief of staff.`)
- Subline (short — the hero promises, the sections prove): `AI that remembers
  every client detail, preps every meeting, and handles the follow-through —
  always with your approval.`
- Primary CTA: `Request early access`
- Secondary CTA (anchor link to #features): `See how it works`
- Trust kicker (tiny mono caption under CTAs): `On models we run ourselves —
  client data never touches a third-party AI provider`

## Problem (id="problem") — pinned, three pages

- Chip: `The problem`
- NO overall section title — each page's lead plays that role at 28px; only
  the chip + page index stay pinned. (All rejected overall titles: v1 `You're
  the advisor — and the assistant.`; v2 `You didn't become an advisor to do
  data entry.`; v3 `Most of an advisor's day isn't advice.`; v4 `Hours lost
  to secretary work…`; v5 `The job nobody hired you for.`)
- Arc = the one-pager's problem narrative: time sink → big teams hired
  people, you got a CRM → the commercial cost (client acquisition +
  retention). Notetakers are a clause in page 3, not their own page.
- Each stat cites its source directly beneath it (no shared attribution line).
- Page 1 — lead: `Your edge is the relationship. Your calendar disagrees.`
  body: `Barely 4 hours of a 10-hour day are spent with clients. The rest —
  meeting prep, notes, follow-ups, chasing your own promises — is admin, done
  by the most expensive person in the firm.`
  stat: `1,350 hrs` / `a year of admin on a 100-client book — two-thirds of a
  full-time hire` — source: `Kitces Research; GReminders`
- Page 2 — lead: `The big teams hired people. You got a CRM.`
  body: `Mega-teams run on associates and a chief of staff — someone whose
  whole job is knowing everything and handling everything. Most advisors got
  a filing cabinet instead: it remembers nothing you don't type and does
  nothing you don't click.`
  stat: `41%` / `of advisor time actually spent with clients` — source:
  `Kitces Research`
- Page 3 — lead: `The cost isn't hours — it's growth.`
  body: `Stale profiles and dropped follow-ups are how prospects go cold and
  good clients quietly drift. AI notetakers won't catch it — they only write
  things down. Nobody has given the independent advisor someone who remembers
  everything and handles everything.`
  stat: `1.4×` / `faster AUM growth at firms with automated workflows than at
  manual ones (16.6% vs 12.1%)` — source: `Schwab RIA Benchmarking`

## Introducing Verren (id="introducing") — first person, Verren speaking

- Chip: `Introducing Verren`
- Statement paragraphs (19px, bold-lead / muted-tail), in Verren's voice:
  1. `**I'm Verren — a chief of staff for your practice.** I connect to your
     email and calendar, work alongside the CRM you already run, and start
     doing the work — nothing to migrate, nothing to bet the practice on.`
  2. `**I keep your book current so you don't have to.** Every client profile
     updates itself — household changes, goals, concerns, commitments — and I
     tell you what matters before you'd otherwise find out.`
  3. `**I handle the follow-through — with your approval.** Anything I'm about
     to do, I show you first, in full. Nothing runs until you say go.`
- Kicker: `**You stay the advisor. I'll do everything else.**`
- Sign-off (handwritten, Caveat): `— Verren`

## Features (id="features")

- Chip: `Features`
- Section title: `**What a great chief of staff does.**`
- Pinned pages (numbered; each visual is a FLOW diagram, not fake UI):
  1. — title: `The data enters itself`
     body: `Email, meeting notes, documents — captured automatically, from every
     source. AI extracts what matters and writes it to the profile: household
     changes, goals, concerns, commitments. You type nothing.`
     visual: sources (email/meeting/note/doc) light up → "AI extracts" seam →
     profile rows get written, one per source.
  2. — title: `It knows your book — and tells you what matters`
     body: `Every client, current. Open anyone and you're fully briefed — and
     what you'd otherwise miss gets surfaced: a job change, an inheritance
     mention, an RMD coming due, a good client gone quiet.`
     visual: the book as a list; rows expand one at a time into the briefing.
  3. — title: `It does the work — with your approval`
     body: `Books the follow-up the moment one is promised. Drafts the email in
     your voice. Runs the outreach. Every action waits for your go — then lands
     in a ledger your compliance officer can read.`
     visual: approval queue (left) → items approved once move to the
     "Done · logged" ledger (right); pending count ticks down.

## Security (id="security")

- Chip: `Security`
- Section title: `**Your clients' data is not training data.**`
- Body: `We run our own AI models on infrastructure we control. Client data is
  never sent to third-party AI providers — not OpenAI, not Anthropic, not
  Google. Nothing is used for training, and every action the AI takes is
  written to an audit trail your compliance officer can read.`
- Six points (hairline-ruled items, 3×2 grid, no badges — never claim a
  certification until real):
  1. `Our models, our infrastructure` / `Open-weight models, hosted and run on
     infrastructure we control. No third-party AI subprocessors — client data
     never touches OpenAI, Anthropic, or Google.`
  2. `No training on your data` / `Your book of business stays your book of
     business. Nothing you capture ever trains a model.`
  3. `Approval-gated by design` / `The AI never executes on its own. Every
     action is proposed, shown in full, and runs only on your explicit
     approval — the human-in-the-loop control FINRA's 2026 GenAI guidance
     calls for.`
  4. `A complete audit trail` / `Every AI read, write, prompt, and output —
     logged with model version and timestamp. Evidence your CCO can hand to
     an examiner.`
  5. `Built for the regulatory bar` / `Designed around the SEC's AI exam
     priorities and Reg S-P safeguarding duties: encrypted in transit and at
     rest, least-privilege access, records kept the way advisers must keep
     them.`
  6. `Straight answers in due diligence` / `Vendor security review shouldn't
     take a quarter. Your DDQ gets answered directly by the founders who
     built the system.`

## The team (id="founders") — photo gallery

- Chip: `The team`
- Section title: `**Built by the team behind Klaviyo's customer data engine.**`
- Three cards (photo · name · role · bio · link), photos in src/assets/team/:
  1. `Seed Zeng` / `Founder & CTO` / `Before Verren, Seed was a Senior Staff
     Software Engineer at DoorDash, where he led a 40+ engineer storage
     organization, and previously a Tech Lead at Meta. Earlier, as a founding
     engineer at Klaviyo, he built the real-time customer-data platform that
     scaled to 150,000 events per second. At Verren, he leads product and
     engineering end to end.` → https://www.seedzeng.com/
  2. `Hansen Liang` / `Founder & CEO` / `Hansen is a 0-to-1 product and
     business leader who helped take Klaviyo Service and Klaviyo Reviews from
     concept to market. He has shipped more than a dozen products across
     software and hardware and leads Verren's go-to-market, partnerships, and
     company strategy.` → https://www.thehansenliang.com/
  3. `Tyler Calder, CFP®` / `Advisor` / `Tyler is a Partner at Cerity Partners
     and a CFP® advising business owners and families across New England.
     Known for a plan-first approach, he integrates investment management with
     tax and estate strategy — and helps ensure Verren is built around the
     realities of high-trust advisory work.` →
     https://ceritypartners.com/team/tyler-calder/
- Sign-off (handwritten, Caveat): `— Seed & Hansen`

## Waitlist (id="waitlist")

- Chip: `Early access`
- Section title: `**Become a founding design partner.**`
- Body: `We're onboarding a small group of advisors and RIA firms to shape the
  product around real workflows and real compliance requirements. Early access,
  a direct line to the founders, and your feedback in the product on a weekly
  cadence.`
- Form fields: name · work email (required; personal domains BLOCKED:
  `Please use your firm email — personal addresses (Gmail, Yahoo, …) can't be
  verified.`) · firm website (accepts `yourfirm.com`, normalized to https://;
  basic validity check) · current CRM (optional) · practice note (optional,
  label `Tell us about your practice (optional)`)
- Submit button: `Request early access`
- Success message: `You're on the list — we'll be in touch shortly.`
- Error message: `Something went wrong — your email wasn't lost, try again.`
- Backend: the form posts client-side to Formspree (same account as
  seedzeng.com — endpoint f/xknqwvlo, delivers to the founders' inbox),
  subject `Verren — early access request`, `_gotcha` honeypot. Site stays
  fully static. TODO: create a dedicated Verren form in Formspree and swap
  the one endpoint constant in Waitlist.astro.

## Footer

- Line 1: `Verren — the AI chief of staff for financial advisors.`
- Line 2 (small): `Early access · © 2026`
