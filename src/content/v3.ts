/**
 * /v3 — concept variant copy. Unlisted + noindex; reachable by URL, not linked from the live nav.
 * /v2 (frozen) with ONE change: the Problem section is reframed as the
 * lifecycle arc so it maps 1:1 onto the flows section — winning is
 * expensive → onboarding kills momentum → keeping the book never stops.
 * Same big-stat-left layout as the live Problem; every number is real and
 * sourced (guardrails in src/i18n/copy.ts header apply):
 *   36 hrs  — Kitces Research (advisor time to acquire one new client)
 *   1 in 4  — industry NIGO benchmarks (SmartCommunications; Docupace)
 *   1,350h  — Kitces Research; GReminders (as on the live site)
 * Hero and flows are /v2's (imported defaults), everything else is the
 * live components read-only.
 */

export const v3 = {
  meta: {
    title: 'Verren — grow your book, Verren does the rest (concept /v3)',
    description:
      'The AI chief of staff for financial advisors: I keep your pipeline warm, take onboarding off your plate, and run your day-to-day — inside the tools your firm already uses.',
  },

  problem: {
    chip: 'The problem',
    pages: [
      {
        num: '01',
        lead: 'Winning a client costs you a week.',
        body: 'Every serious prospect means hours of portfolio analysis, a custom proposal, a pitch book, and follow-ups that can’t slip — nearly a full work-week of the most expensive hours in the firm: yours.',
        stat: '36 hrs',
        statLabel: 'of your own time to win a single new client',
        source: 'Kitces Research',
      },
      {
        num: '02',
        lead: 'Onboarding is where momentum dies.',
        body: 'The yes is the easy part. Then come applications, transfers, trusts, tax returns, beneficiary forms — weeks of paperwork where every bounced form makes your newest client wonder what they signed up for.',
        stat: '1 in 4',
        statLabel: 'new-account applications bounce back not-in-good-order and have to be redone',
        source: 'SmartCommunications; Docupace',
      },
      {
        num: '03',
        lead: 'And keeping the book never stops.',
        body: 'Follow-ups, scheduling, plan updates, rebalances, money movement — the everyday work that keeps a hundred relationships healthy. Miss enough of it and clients don’t complain. They quietly drift.',
        stat: '1,350 hrs',
        statLabel: 'a year of admin on a 100-client book — two-thirds of a full-time hire',
        source: 'Kitces Research; GReminders',
      },
    ],
  },
};
