# Nevis Wealth — research brief

*Researched 2026-07-14. Sources cited inline; primary source is https://www.neviswealth.com/ plus press and registry data.*

---

## 1. Product

**One-liner:** "The first unified AI platform for wealth management" — AI that completes advisors' operational/admin work end-to-end so they spend time with clients instead. Anchor stat used everywhere: *"Advisors spend 80% of their time on admin. Nevis fixes that."* ([neviswealth.com](https://www.neviswealth.com/))

**Core features (as listed on the homepage):**
- **Meeting summaries** — "Capture AI meeting summaries with deep contextual awareness"
- **Automated task generation** — "Turn every client touchpoint into actionable tasks"
- **Smart meeting prep** — "Get intelligent client briefs before every meeting"
- **AI search** — "Find relevant client information in seconds"
- **Client-ready emails** — "Send personalized client emails automatically"
- **Account opening** — "Automate data collection and submissions" (custodian account opening is called out in press) ([neviswealth.com](https://www.neviswealth.com/); [fintech.global](https://fintech.global/2025/12/02/nevis-bags-35m-to-build-ai-for-wealth-management/))

**How it works / integrations:** Sequoia's memo describes an AI **"system of action"** that connects to the firm's existing CRMs, email, messaging apps, and document storage, then *acts* across them — generating reports, updating records, maintaining account changes — rather than just suggesting. Their press framing: advisors juggle data spread across "30+ systems." No named integration list is published on the site. ([sequoiacap.com](https://sequoiacap.com/article/nevis-bringing-ai-to-wealth-management/); [neviswealth.com/news/nevis-raised-40m/](https://www.neviswealth.com/news/nevis-raised-40m/))

**How agentic is it really?** More than a copilot, per Sequoia: autonomous workflow automation (report generation, record updates, account maintenance) rather than mere suggestion. But the publicly demonstrated surface is mostly *meeting-centric* (summaries → tasks → prep → emails) plus account-opening paperwork — i.e., agentic within well-scoped back-office workflows, not open-ended agents. CEO quote: *"an AI platform that can actually complete operational tasks end-to-end."* No public detail on human-in-the-loop/approval UX or agent architecture. ([sequoiacap.com](https://sequoiacap.com/article/nevis-bringing-ai-to-wealth-management/); [fintech.global](https://fintech.global/2025/12/02/nevis-bags-35m-to-build-ai-for-wealth-management/))

**Compliance posture:** SOC 2 Type I certified; "on track" for SOC 2 Type II and ISO 27001; enterprise agreements with OpenAI **and Anthropic** as model providers; explicit no-training-on-customer-data pledge ("Nevis never uses your private data to train or update AI models"). ([neviswealth.com](https://www.neviswealth.com/))

## 2. Positioning & messaging

- **Headline:** "The AI platform for wealth management"
- **Sub:** "AI that helps financial advisors grow and spend more time with clients"
- **Proof bar:** "$40M raised from the world's leading investors" · "Nevis powers the fastest growing wealth management firms"
- **Philosophy line (their contrarian stake):** "Financial advice will always be human led and AI will empower advisors, not replace them." Founder version: *"People don't want robots telling them how to manage their life savings"* (Swan); *"Advisors are being burned by false propositions"* (Burda). ([neviswealth.com](https://www.neviswealth.com/); [sequoiacap.com](https://sequoiacap.com/article/nevis-bringing-ai-to-wealth-management/))
- **Target customer:** US RIAs and wealth-management firms — mid-size, growth-oriented independents rather than private banks. Named customers: **United Capital, GC Wealth, Apollon Wealth, Dodds Wealth** (collectively $50B+ AUM). Testimonial from Michael Dodds: "a true partner built for forward-thinking RIAs." ([neviswealth.com](https://www.neviswealth.com/))
- **Messaging structure:** problem stat (80% admin) → "unified platform" claim → feature six-pack → trust stack (SOC 2, no-training pledge, investor logos, RIA testimonials). Notably testimonial-heavy for a company this young — 4 named executive quotes on the homepage. Anti-"AI bolted onto legacy systems" is a recurring dig: *"It doesn't bolt AI onto legacy systems; it uses it to transform how our firm operates"* (Breslin, GC Wealth). ([neviswealth.com/news/nevis-raised-40m/](https://www.neviswealth.com/news/nevis-raised-40m/))

## 3. Design language

Pulled from the live site's HTML/CSS (cdn.neviswealth.com assets):

- **Palette:** warm, near-monochrome editorial. Body ink is charcoal **#231F20** (the dominant color, not pure black) on a warm off-white **#F7F6F0** (their theme-color, essentially bone/cream). Accent is a restrained **teal-blue**: `--color-blue-bright: #1080B4`, strong variant `#346C83`, plus a marketing teal `#096080`. Secondary swatch system includes muted gold (`#C79F00`), olive, terracotta-orange (`#E09451`), violet — all desaturated, "heritage" tones. Semantic colors (green/red/yellow) exist but only in the product UI-kit. Light/dark favicon variants; theme-color flips black↔cream by color scheme.
- **Typography:** brand/display serif is **Romie** (`--font-family-brand: "Romie"` — a contemporary editorial serif by Margot Lévêque, fashionable in premium-brand sites), with **Inter / InterDisplay** (400/500/600) for everything else. So: serif wordmark + headline moments, clean grotesque body — the now-standard "trustworthy fintech with taste" pairing.
- **Layout & tone:** minimal, whitespace-heavy, trust-signal-driven (investor logos, testimonial cards, team photography). Tone is confident-institutional, not playful; copy is short declaratives. Reads as "private-bank stationery meets modern SaaS."
- **Relevance to Tada:** their cream `#F7F6F0` + charcoal + single restrained accent + serif-display-over-grotesque is structurally the same recipe as Tada's Clawdia palette (cream `#f0ece3`, rust `#c8632e`, EB Garamond/Geist) — the differentiation is accent hue (teal vs rust) and warmth/personality of the serif.

## 4. Company

- **Entity:** Nevis Wealth Technology Ltd, UK company no. 16016151, registered 9th Floor, 107 Cheapside, London EC2V 6DN. ([Companies House](https://find-and-update.company-information.service.gov.uk/company/16016151))
- **Founded:** 2024. **Emerged from stealth Dec 1, 2025** with the funding announcement. ([businesswire.com](https://www.businesswire.com/news/home/20251201734348/en/); [neviswealth.com/news](https://www.neviswealth.com/news/nevis-raised-40m/))
- **Founders (all ex-Revolut, overlapped there ~3 years):**
  - **Mark Swan, CEO** — Scottish (Aberdeen); interned at Al Gore's Generation Investment Management; Revolut operations from 2021.
  - **Philipp Burda, CPO** — Revolut head of fincrime and data science; started a web agency at 15.
  - **Ivan Chalov, COO** — ex-investment-bank trader; became Revolut's retail business GM. ([sequoiacap.com](https://sequoiacap.com/article/nevis-bringing-ai-to-wealth-management/))
- **Funding:** $5M seed (Sequoia, Sep 2024) + ~$35M Series A (Sequoia, ICONIQ, Ribbit Capital, announced Dec 2025) = **$40M total**. Sequoia partner: Luciana Lixandru. ([sequoiacap.com](https://sequoiacap.com/article/nevis-bringing-ai-to-wealth-management/); [businesswire.com](https://www.businesswire.com/news/home/20251201734348/en/))
- **Team size:** ~43–46 employees (mid-2026, per Tracxn/PitchBook aggregates). Culture is unabashedly Revolut-style hard-charging: careers page promises "grow your career 5x faster," 7-day meal credits, late-night ride support; "relentless execution." Office-first, London HQ. ([tracxn.com](https://tracxn.com/d/companies/nevis-wealth-technology/__p3ifDFjuzoI9qBdMiXdr48-IsMHivm-4uXzwZ7OlK3I); [neviswealth.com/careers](https://www.neviswealth.com/careers/))
- **Traction:** RIA customers managing **$50B+ combined AUM**; four named reference customers with executive testimonials; sponsor at Wealth Management EDGE conference. ([neviswealth.com](https://www.neviswealth.com/); [informaconnect.com](https://informaconnect.com/edge/sponsors/nevis-wealth/))

## 5. Pricing

**Not public.** No pricing page; sales-led (demo/contact). No third-party pricing leaks found as of 2026-07-14.

## 6. Weaknesses / gaps a new entrant could exploit

1. **Enterprise-only, opaque access** — no pricing, no self-serve, no free trial. Solo advisors and small RIAs (<$1B) have no on-ramp; a product-led, transparent-pricing entrant can own the long tail.
2. **Meeting-centric surface** — the shipped feature set clusters around meetings (summary/prep/tasks/emails). Capture from *other* channels (screenshots, forwarded docs, voice quick-add) and true task execution beyond paperwork look thin publicly.
3. **No published integration list** — "connects to your 30+ systems" is claimed but unverifiable; integration depth with Redtail/Wealthbox/Orion/Schwab custodial rails is a proof burden they haven't publicly met.
4. **UK-built for a US market** — London HQ + Revolut DNA selling to US RIAs; a US-native entrant can out-localize on custodian and compliance specifics (SEC/FINRA workflows).
5. **Youth + certification gap** — SOC 2 Type I only ("on track" for Type II/ISO 27001); large firms and private banks will wait. ~45 people supporting $50B AUM of customers implies stretched service.
6. **No public human-in-the-loop story** — for a product that "completes operational tasks end-to-end" in regulated finance, the approval/audit UX is undocumented; a rival can make visible, gated, auditable execution the headline (this is exactly Tada's "never auto-execute" stance, applied to a different domain).
7. **Burn-fast culture risk** — Revolut-style intensity is a churn/quality risk story competitors can quietly counter-position on ("built by people who'll still be here next year").

## 7. Nevis vs Lightfield (lightfield.app)

Different animals that superficially rhyme ("AI that does the CRM work for you"):

| | **Nevis** | **Lightfield** |
|---|---|---|
| Category | Vertical AI *platform layer* for wealth management — sits on top of existing CRMs/email/docs as a "system of action" | Horizontal **AI-native CRM** (a system of record that replaces the CRM), headline: "CRM that remembers everything and does the work for you" |
| Target | US RIAs / wealth firms ($50B+ AUM base) | Founder-led sales teams, early-stage/high-growth startups; fintech is one segment page, wealth managers are not a real focus |
| Agents | Scoped back-office workflow automation (meeting prep, account opening, record upkeep) | User-promptable agents ("build agents with a single prompt") for prospecting, follow-ups, pipeline hygiene |
| Compliance | Front-and-center: SOC 2, no-training pledge, enterprise AI-provider agreements | Essentially absent from marketing — their own fintech page doesn't discuss compliance |
| Motion | Sales-led, no public pricing | Product-led, public pricing page, Product Hunt launch |
| Pedigree | Ex-Revolut founders, $40M Sequoia/ICONIQ/Ribbit | Ex-Tome/Meta founders (Keith Peiris, Henri Liriani) |

Net: Nevis *augments* the advisor's existing stack inside one regulated vertical; Lightfield *replaces* the CRM for whoever will adopt it, sales-first. They'd only collide if Lightfield builds a serious advisor vertical (its fintech positioning today explicitly targets "founder-led fintech teams," not wealth managers). ([lightfield.app](https://lightfield.app/); [lightfield.app/blog/crm-for-fintech](https://lightfield.app/blog/crm-for-fintech); [saastr.com](https://www.saastr.com/saastr-ai-app-of-the-week-lightfield-the-ai-native-crm-that-killed-tomes-25-million-users-to-build-something-better/))

---

### Source index
- https://www.neviswealth.com/ (homepage copy, features, compliance, testimonials; CSS at cdn.neviswealth.com for design tokens)
- https://www.neviswealth.com/news/nevis-raised-40m/ · https://www.neviswealth.com/about/ · https://www.neviswealth.com/careers/
- https://sequoiacap.com/article/nevis-bringing-ai-to-wealth-management/ (founder backstories, product thesis)
- https://www.businesswire.com/news/home/20251201734348/en/ (launch press release)
- https://fintech.global/2025/12/02/nevis-bags-35m-to-build-ai-for-wealth-management/ · https://www.finextra.com/newsarticle/46993/
- https://tracxn.com/d/companies/nevis-wealth-technology/__p3ifDFjuzoI9qBdMiXdr48-IsMHivm-4uXzwZ7OlK3I · https://pitchbook.com/profiles/company/846571-87 (headcount)
- https://find-and-update.company-information.service.gov.uk/company/16016151 (UK registry)
- https://lightfield.app/ · https://lightfield.app/blog/crm-for-fintech · https://www.saastr.com/saastr-ai-app-of-the-week-lightfield-the-ai-native-crm-that-killed-tomes-25-million-users-to-build-something-better/
