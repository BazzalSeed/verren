/**
 * /v2 — the converged concept variant. Unlisted + noindex; reachable by URL, not linked from the live nav.
 * Design history: docs/superpowers/specs/2026-07-19-three-copy-positioning-design.md
 * (started as three copies — role / outcome×CoS / outcome×team — and
 * converged: "support team" priced the product down, "headcount" was
 * CFO-speak, and chief of staff survived as the only person-word carrying
 * seniority AND breadth).
 *
 * The pitch: outcome headline ("Grow your book. Verren does the rest."),
 * chief-of-staff identity in the sub, and the Features section replaced by
 * the three flows from docs/tyler-flows.md — intimate, proactive, first
 * person, about making the ADVISOR's life easier — under the signature
 * header "What *Verren* does for you."
 *
 * Everything else (Problem, Introducing, Security, Team, Waitlist) is the
 * live components imported read-only. Live-site guardrails apply (see
 * src/i18n/copy.ts header). Mock client data obviously fictional.
 */

export const vc = {
  meta: {
    title: 'Verren — grow your book, Verren does the rest (concept /v2)',
    description:
      'The AI chief of staff for financial advisors: I keep your pipeline warm, take onboarding off your plate, and run your day-to-day — inside the tools your firm already uses.',
  },

  // hero: overrides merged over the live hero copy (card-stack mock data
  // stays identical to the live site). Rendered with the loud label —
  // the audience line is the headline's address line.
  hero: {
    label: 'For financial advisors & wealth management firms',
    h1: 'Grow your book. Verren does the rest.',
    sub: 'I’m Verren — the AI chief of staff for financial advisors. I keep your pipeline warm, take onboarding off your plate, and run your day-to-day — inside the tools your firm already uses, always with your approval.',
  },

  // flows: signature header (the name renders in the wordmark hand); pages
  // are intimate + proactive + about YOUR life getting easier, mapped to
  // Tyler's three flows (docs/tyler-flows.md)
  flows: {
    chip: 'Features',
    titlePre: 'What',
    titleHand: 'Verren',
    titlePost: 'does for you.',
    pages: [
      {
        num: '01',
        id: 'prospecting',
        title: 'I keep your pipeline warm',
        body: 'Give me a name. I analyze the prospect’s portfolio in yCharts, draft a proposal against your firm’s models, assemble the pitch book from your intranet — and keep every follow-up moving in your CRM so no prospect goes cold.',
      },
      {
        num: '02',
        id: 'onboarding',
        title: 'I take onboarding off your plate',
        body: 'I turn your discussion notes — Zocks transcripts, Outlook threads — into a 12–18 month client roadmap, open accounts to match the agreed strategy, and chase the document checklist so nothing stalls in paperwork.',
      },
      {
        num: '03',
        id: 'ongoing',
        title: 'I run your day-to-day',
        body: 'Tasks and follow-ups in your CRM. Scheduling in Outlook. Plans current in eMoney. Trades prepped in Red Black, money moving at Schwab and Fidelity — each one done and logged, and anything irreversible waits for your approval.',
      },
    ],
  },

  prospectingVisual: {
    eyebrow: 'New prospect',
    name: 'Morgan Hale',
    sub: 'Referred by the Winters · intro call Thursday',
    stages: [
      { tool: 'yCharts', text: 'Current portfolio analyzed — concentration flagged' },
      { tool: 'Models', text: 'Custom proposal drafted against your firm’s models' },
      { tool: 'Intranet', text: 'Pitch book assembled from your latest materials' },
      { tool: 'CRM', text: 'Follow-up sequence scheduled — pipeline updated' },
    ],
    working: 'working',
    done: '✓ done',
    footIdle: 'Watching your pipeline · 6 prospects active',
    footDone: 'Pitch ready — in your inbox for review',
  },

  onboardingVisual: {
    roadmapLabel: 'Client roadmap · drafted from your meeting notes',
    roadmap: [
      { when: 'Month 1', text: 'Consolidate outside accounts · open joint + IRAs' },
      { when: 'Month 3', text: '529 plan for Maya · education funding review' },
      { when: 'Month 6', text: 'Trust review with estate attorney' },
      { when: 'Month 12', text: 'First annual review · tax-loss pass' },
    ],
    checklistLabel: 'Document checklist · tracked automatically',
    checklist: [
      'Trust documents',
      '2023 + 2024 tax returns',
      'Beneficiary designations',
      'Prior custodian statements',
    ],
    sourceNote: 'Sources: Zocks meeting notes · Outlook',
  },

  ongoingVisual: {
    label: 'Today, across your book',
    approve: '✓ Approve',
    approved: '✓ Approved',
    rows: [
      { tool: 'CRM', text: 'Three follow-ups drafted and sent', status: 'done · logged' },
      { tool: 'Outlook', text: 'Chen review moved to Thu 2:00p', status: 'done · logged' },
      { tool: 'eMoney', text: 'Whitfield plan refreshed — goals on track', status: 'done · logged' },
      { tool: 'Red Black', text: 'Rebalance prepped · 12 accounts', status: 'approval' },
      { tool: 'Schwab', text: '$25,000 to Ellis checking', status: 'approval' },
    ],
    foot: 'Every action logged · nothing moves without your approval',
  },
};
