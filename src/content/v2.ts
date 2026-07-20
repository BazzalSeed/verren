/**
 * /v2 — the concept variant. Unlisted + noindex; reachable by URL, not
 * linked from the live nav. en at /v2, zh at /zh/v2 (native localization,
 * same conventions as src/i18n/copy.ts — zh is NOT a literal translation).
 * Design history: docs/superpowers/specs/2026-07-19-three-copy-positioning-design.md
 * (three copies converged into one, then /v3's lifecycle Problem folded in).
 *
 * The pitch: outcome headline ("Grow your book. Verren does the rest."),
 * chief-of-staff identity in the sub (zh: AI 助理, per the localization
 * conventions), the Problem as the lifecycle arc (win → onboard → keep,
 * every stat real and sourced), and Features as the three flows from
 * docs/tyler-flows.md — intimate, proactive, first person.
 *
 * Introducing, Security, Team, Waitlist are the live components imported
 * read-only (already locale-aware). Live-site guardrails apply (see
 * src/i18n/copy.ts header). Mock client data obviously fictional — names
 * stay English in both locales.
 */

const en = {
  meta: {
    title: 'Verren — grow your book, Verren does the rest (concept /v2)',
    description:
      'For financial advisors: I keep your pipeline warm, take onboarding off your plate, and run your day-to-day — inside the tools your firm already uses.',
  },

  // merged over the live hero copy (card-stack mock data stays identical);
  // rendered with the loud label — the audience line is the headline's
  // address line
  hero: {
    label: 'For financial advisors & wealth management firms',
    h1: 'Grow your book. Verren does the rest.',
    sub: 'I’m Verren. I keep your pipeline warm, take onboarding off your plate, and run your day-to-day — inside the tools your firm already uses, always with your approval.',
  },

  // Introducing, reframed for this variant: no chief-of-staff identity —
  // the messaging bridges the three lifecycle problems straight into the
  // three flows (same structure and typography as the live section)
  introducing: {
    chip: 'Introducing Verren',
    paras: [
      {
        lead: 'I’m Verren. I solve exactly those three problems.',
        rest: 'The week you lose winning a client, the paperwork that stalls onboarding, the daily grind of keeping the book — I take them over, inside the tools your firm already runs. Nothing to migrate, nothing to bet the practice on.',
      },
      {
        lead: 'I do the work — not just the reminding.',
        rest: 'Proposals drafted, accounts opened, checklists chased, follow-ups sent — and every client profile stays current, so I can tell you what matters before you’d otherwise find out.',
      },
      {
        lead: 'And anything irreversible waits for you.',
        rest: 'Anything I’m about to do, I show you first, in full. Nothing runs until you say go.',
      },
    ],
    kicker: 'You stay the advisor. I’ll do everything else.',
    sign: '— Verren',
  },

  // the lifecycle arc, mapping 1:1 onto the flows section — every number
  // real and sourced: 36 hrs (Kitces), 1 in 4 NIGO (SmartCommunications;
  // Docupace), 1,350 hrs (Kitces; GReminders)
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

  // flows: signature header (the name renders in the wordmark hand); pages
  // are intimate + proactive + about YOUR life getting easier
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
    logged: 'done · logged',
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

export type V2Copy = typeof en;

const zh: V2Copy = {
  meta: {
    title: 'Verren — 专注增长，其余交给 Verren（概念版 /v2）',
    description:
      '为理财顾问打造：替你盯住每个潜在客户，接手开户建档，打理每天的日常——就在你们已经在用的工具里。',
  },

  hero: {
    label: '专为理财顾问与独立注册投资顾问（RIA）打造',
    h1: '专注增长，其余交给 Verren。',
    sub: '我是 Verren。我替你盯住每个潜在客户，接手开户建档，打理每天的日常——就在你们已经在用的工具里，每一步都由你确认。',
  },

  introducing: {
    chip: '认识 Verren',
    paras: [
      {
        lead: '我是 Verren，就为解决这三件事。',
        rest: '赢一位客户要搭进去的一整周、卡在纸面流程里的开户、永远做不完的日常维护——这些我来接手，就在你们已经在用的工具里完成。无需迁移，也不用拿业务冒险。',
      },
      {
        lead: '我不只是提醒你，而是把事做完。',
        rest: '方案我来拟，账户我来开，文件清单我来盯，跟进邮件我来发——每位客户的档案始终保持最新，重要的事，我会在你错过之前告诉你。',
      },
      {
        lead: '而任何不可逆的操作，永远等你确认。',
        rest: '我要做的每一件事，都会先完整地给你看。你不点头，就什么都不会执行。',
      },
    ],
    kicker: '你专注做顾问，其余交给我。',
    sign: '— Verren',
  },

  problem: {
    chip: '痛点',
    pages: [
      {
        num: '01',
        lead: '赢下一位客户，要花掉你一整周。',
        body: '每一位认真的潜在客户，都意味着数小时的组合分析、一份定制方案、一册推介材料，和一次都不能漏的跟进——加起来接近一整周的工作时间，而且花的是全公司最贵的时间：你的。',
        stat: '36 小时',
        statLabel: '赢得一位新客户平均要投入的顾问个人时间',
        source: 'Kitces Research',
      },
      {
        num: '02',
        lead: '开户环节，最容易把热情耗光。',
        body: '客户点头只是开始。接下来是开户申请、资产转入、信托文件、报税单、受益人表格——几周的纸面流程里，每一份被退回的表格，都会让新客户开始怀疑自己的选择。',
        stat: '1/4',
        statLabel: '的新开户申请因材料不合规（NIGO）被退回重做',
        source: 'SmartCommunications；Docupace',
      },
      {
        num: '03',
        lead: '而客户维护，永远没有终点。',
        body: '跟进、排会、更新规划、再平衡、资金调拨——让上百段客户关系保持健康的日常工作。漏得多了，客户不会抱怨，只会悄悄流失。',
        stat: '1,350 小时',
        statLabel: '一个 100 位客户的客户群一年的行政工作量——相当于三分之二个全职人力',
        source: 'Kitces Research；GReminders',
      },
    ],
  },

  flows: {
    chip: '核心能力',
    titlePre: '这些事，',
    titleHand: 'Verren',
    titlePost: '替你做。',
    pages: [
      {
        num: '01',
        id: 'prospecting',
        title: '我替你盯住每个潜在客户',
        body: '给我一个名字就够了。我在 yCharts 里分析对方的现有组合，按你们公司的模型草拟定制方案，用内网素材组好推介材料——并在 CRM 里持续推进每一次跟进，不让任何一个潜在客户冷掉。',
      },
      {
        num: '02',
        id: 'onboarding',
        title: '开户建档，我来接手',
        body: '我把你的沟通记录——Zocks 的会议转写、Outlook 的邮件往来——整理成一份 12–18 个月的客户规划路线图，按商定的投资策略开好账户，并盯紧文件清单（信托、报税单等），不让任何事卡在纸面流程上。',
      },
      {
        num: '03',
        id: 'ongoing',
        title: '每天的日常，我来打理',
        body: 'CRM 里的任务与跟进，Outlook 里的会议安排，eMoney 里的财务规划保持最新，Red Black 里备好交易，Schwab 与 Fidelity 之间的资金调拨——每一件都办妥并留痕，任何不可逆的操作都会等你确认。',
      },
    ],
  },

  prospectingVisual: {
    eyebrow: '新潜在客户',
    name: 'Morgan Hale',
    sub: '由 Winters 夫妇推荐 · 周四首次通话',
    stages: [
      { tool: 'yCharts', text: '已分析现有组合——发现持仓集中风险' },
      { tool: 'Models', text: '已按你们公司的模型拟好定制方案' },
      { tool: 'Intranet', text: '已用最新素材组好推介材料' },
      { tool: 'CRM', text: '跟进节奏已排好——销售管道已更新' },
    ],
    working: '处理中',
    done: '✓ 完成',
    footIdle: '正在盯你的销售管道 · 6 位潜在客户进行中',
    footDone: '推介材料已就绪——已发你审阅',
  },

  onboardingVisual: {
    roadmapLabel: '客户规划路线图 · 由你的会议记录生成',
    roadmap: [
      { when: '第1个月', text: '整合外部账户 · 开立联名与 IRA 账户' },
      { when: '第3个月', text: '为 Maya 开设 529 · 教育金规划回顾' },
      { when: '第6个月', text: '与遗产律师一起审阅信托' },
      { when: '第12个月', text: '首次年度回顾 · 税损收割' },
    ],
    checklistLabel: '文件清单 · 自动跟踪',
    checklist: [
      '信托文件',
      '2023 + 2024 报税单',
      '受益人指定表',
      '原托管机构对账单',
    ],
    sourceNote: '来源：Zocks 会议记录 · Outlook',
  },

  ongoingVisual: {
    label: '今天，在你的客户册上',
    approve: '✓ 确认',
    approved: '✓ 已确认',
    logged: '完成 · 已留痕',
    rows: [
      { tool: 'CRM', text: '三封跟进邮件已拟好并发出', status: '完成 · 已留痕' },
      { tool: 'Outlook', text: 'Chen 家的回顾会改到周四 14:00', status: '完成 · 已留痕' },
      { tool: 'eMoney', text: 'Whitfield 的规划已更新——目标进度正常', status: '完成 · 已留痕' },
      { tool: 'Red Black', text: '再平衡已备好 · 涉及 12 个账户', status: 'approval' },
      { tool: 'Schwab', text: '$25,000 转至 Ellis 支票账户', status: 'approval' },
    ],
    foot: '每一步都有记录 · 未经你确认，任何操作都不会执行',
  },
};

export type V2Locale = 'en' | 'zh';

export function getV2Copy(locale: string | undefined): V2Copy {
  return locale === 'zh' ? zh : en;
}
