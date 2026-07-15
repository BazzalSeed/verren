/**
 * ALL marketing copy for verren.app, in every locale.
 *
 * This file is the single source of truth the components render from — edit
 * copy HERE. The `en` tree is the finalized English; `zh` is a localized
 * Chinese adaptation (native marketing copy, not a literal translation).
 * Both trees must keep the exact same shape (`zh` is typed against `en`).
 *
 * Conventions
 * - `lead` = the dark clause of a title; `tail`/`rest` = the muted remainder.
 * - Strings containing `{n}` are JS templates (count placeholders).
 * - Names of fictional clients stay in English in both locales.
 *
 * Copy guardrails (apply to every locale)
 * - No fake trust signals: no SOC 2 / certification badges, testimonials,
 *   client logos, or AUM claims until they are real.
 * - Regulator/standard names only as "designed for / designed around" —
 *   never as a compliance claim.
 * - Banned phrasing: "data never leaves your firm" (it does leave — to OUR
 *   cloud; say "never sent to a third-party AI provider" instead).
 * - "CRM" appears as a contrast to us, never as our category.
 * - All mock client data stays obviously fictional.
 * - Emphasis = dark-ink lead + muted tail; never actual bold weight.
 */

export type Locale = 'en' | 'zh';
export const locales: Locale[] = ['en', 'zh'];
export const defaultLocale: Locale = 'en';

const en = {
  meta: {
    title: 'Verren — the AI chief of staff for financial advisors',
    description:
      'AI that remembers every client detail, preps every meeting, and handles the follow-through — always with your approval, using models we run ourselves.',
    ogDescription: 'Capture anything. Extract what matters. Take action with confidence.',
  },

  nav: {
    links: [
      { href: '#problem', label: 'The problem' },
      { href: '#introducing', label: 'Introducing' },
      { href: '#features', label: 'Features' },
      { href: '#security', label: 'Security' },
      { href: '#team', label: 'Team' },
    ],
    cta: 'Request early access',
  },

  footer: {
    line1: 'Verren — the AI chief of staff for financial advisors.',
    line2: 'Early access · © 2026',
  },

  hero: {
    label: 'For financial advisors & RIAs',
    h1: 'Your AI Chief of Staff.',
    sub: 'AI that remembers every client detail, preps every meeting, and handles the follow-through — always with your approval.',
    ctaPrimary: 'Request early access',
    ctaSecondary: 'See how it works',
    kicker: 'On models we run ourselves — client data never touches a third-party AI provider',
    book: {
      title: 'Your book',
      meta: '128 households · all current',
      rows: [
        { initials: 'PN', name: 'Priya Natarajan', note: "Follow-up drafted after Tuesday's review", tag: 'Prepped', ok: true },
        { initials: 'SO', name: 'Sam Okafor', note: 'Inheritance mention — added to profile', tag: 'Signal', ok: false },
        { initials: 'DW', name: 'Dana Whitfield', note: 'Quiet 94 days — check-in ready for approval', tag: 'Outreach', ok: false },
        { initials: 'MT', name: 'Miguel Torres', note: 'RMD due in 12 days', tag: 'Due', ok: false },
      ],
    },
    approval: {
      title: 'Book follow-up — Thu 10:00',
      sub: "Suggested from today's meeting notes",
      result: 'On your calendar · invite sent to Jordan',
      approve: '✓ Approve',
      approved: '✓ Approved',
      draftLabel: 'Drafted follow-up',
      snippet: '“Hi Jordan — great catching up…”',
    },
    profile: {
      eyebrow: 'Household',
      name: 'Jordan Ellis',
      sub: 'Household · $2.4M',
      updatedRest: 'Profile updated 2m ago',
      signals: [
        { tag: 'Signal', text: 'Life event — new job, VP Eng' },
        { tag: 'Due', text: 'Next RMD due in 41 days' },
      ],
    },
  },

  problem: {
    chip: 'The problem',
    pages: [
      {
        num: '01',
        lead: 'Your edge is the relationship. Your calendar disagrees.',
        body: 'Barely 4 hours of a 10-hour day are spent with clients. The rest — meeting prep, notes, follow-ups, chasing your own promises — is admin, done by the most expensive person in the firm.',
        stat: '1,350 hrs',
        statLabel: 'a year of admin on a 100-client book — two-thirds of a full-time hire',
        source: 'Kitces Research; GReminders',
      },
      {
        num: '02',
        lead: 'You hired people to help. The CRM is still out of date.',
        body: "Associates, assistants, notetakers — and still no one whose whole job is knowing everything and handling everything. The system of record stays a database that's out of sync the moment a meeting ends: it remembers nothing you don't type and does nothing you don't click.",
        stat: '41%',
        statLabel: 'of advisor time actually spent with clients',
        source: 'Kitces Research',
      },
      {
        num: '03',
        lead: "The cost isn't hours — it's growth.",
        body: "Stale profiles and dropped follow-ups are how prospects go cold and good clients quietly drift. AI notetakers won't catch it — they only write things down. Nobody has given the independent advisor someone who remembers everything and handles everything.",
        stat: '1.4×',
        statLabel: 'faster AUM growth at firms with automated workflows than at manual ones (16.6% vs 12.1%)',
        source: 'Schwab RIA Benchmarking',
      },
    ],
  },

  introducing: {
    chip: 'Introducing Verren',
    paras: [
      {
        lead: "I'm Verren — a chief of staff for your practice.",
        rest: 'I connect to your email and calendar, work alongside the CRM you already run, and start doing the work — nothing to migrate, nothing to bet the practice on.',
      },
      {
        lead: "I keep your book current so you don't have to.",
        rest: "Every client profile updates itself — household changes, goals, concerns, commitments — and I tell you what matters before you'd otherwise find out.",
      },
      {
        lead: 'I handle the follow-through — with your approval.',
        rest: "Anything I'm about to do, I show you first, in full. Nothing runs until you say go.",
      },
    ],
    kicker: "You stay the advisor. I'll do everything else.",
    sign: '— Verren',
  },

  features: {
    chip: 'Features',
    title: 'What a great chief of staff does.',
    pages: [
      {
        num: '01',
        title: 'I keep your client profiles current',
        body: 'Email, meetings, texts, documents — I capture it all automatically, from every source, and write what matters to the profile: household changes, goals, concerns, commitments. You type nothing.',
      },
      {
        num: '02',
        title: 'I know your book — and tell you what matters',
        body: "Open anyone and you're fully briefed — and I surface what you'd otherwise miss: a job change, an inheritance mention, an RMD coming due, a good client gone quiet.",
      },
      {
        num: '03',
        title: 'I do the work — with your approval',
        body: 'I book the follow-up the moment one is promised, draft the email in your voice, and run the outreach. Every action waits for your approval — then lands in a ledger your compliance officer can read.',
      },
    ],
    flow: {
      sourcesLabel: 'Sources — every channel',
      sources: [
        { kind: 'Email', text: 'Re: 529 plan for Maya' },
        { kind: 'Meeting', text: 'Q3 review — the Ellises' },
        { kind: 'Text', text: 'Jordan: “new comp package came through…”' },
        { kind: 'Doc', text: 'Ellis_trust_amendment.pdf' },
      ],
      foot: 'Four channels · one household',
      seam: 'Verren reads & updates',
      profile: {
        eyebrow: 'Household profile',
        name: 'Jordan Ellis',
        sub: 'Household · $2.4M',
        rows: [
          { chip: 'Goal', text: '529 for Maya — start before she turns 3' },
          { chip: 'Life event', text: 'New role, VP Eng — equity vests quarterly' },
          { chip: 'Comp', text: 'New package — equity refresh confirmed' },
          { chip: 'Update', text: 'Trust beneficiary changed' },
        ],
      },
    },
    book: {
      listLabel: 'Your book',
      items: [
        { name: 'Jordan Ellis', status: 'Current', statusClass: 'chip-current', on: true },
        { name: 'Priya Natarajan', status: 'Prospect', statusClass: 'chip-prospect', on: false },
        { name: 'Dana Whitfield', status: 'At risk', statusClass: 'chip-risk', on: false },
      ],
      foot: '128 households · all current',
      details: [
        {
          eyebrow: 'Household profile',
          name: 'Jordan Ellis',
          sub: 'Household · $2.4M',
          sec1: 'Kept current for you',
          facts: [
            { chip: 'Goal', text: '529 for Maya — start before she turns 3' },
            { chip: 'Due', text: 'RMD on the inherited IRA — 41 days' },
            { chip: 'Life event', text: 'New role, VP Eng — equity vests quarterly' },
          ],
          sec2: 'Meeting brief — Thursday 10:00',
          brief: "Congratulate the new role. Revisit Maya's 529 — open since March. Plan the inherited-IRA RMD before the deadline; the equity refresh may change the picture.",
        },
        {
          eyebrow: 'Household profile',
          name: 'Priya Natarajan',
          sub: 'Prospect · referred by the Okafors',
          sec1: 'Kept current for you',
          facts: [
            { chip: 'Goal', text: 'Roll over the 401(k) from her last role' },
            { chip: 'Signal', text: 'Mentioned selling her dental practice in ~2 years' },
            { chip: 'Next', text: 'Proposal follow-up promised by Friday' },
          ],
          sec2: 'Meeting brief — Monday 14:00',
          brief: 'Second meeting. Walk through the proposal; she asked about tax drag last time — bring the practice-sale transition plan.',
        },
        {
          eyebrow: 'Household profile',
          name: 'Dana Whitfield',
          sub: 'Household · $1.1M',
          sec1: 'Kept current for you',
          facts: [
            { chip: 'Signal', text: 'Quiet 94 days — last review in March' },
            { chip: 'Due', text: 'Annual review overdue' },
            { chip: 'Update', text: 'Opened the last two emails — no reply' },
          ],
          sec2: 'Suggested outreach',
          brief: 'A check-in is drafted in your voice — it references the kitchen remodel and the 529 question she raised in March. One click to approve.',
        },
      ],
    },
    appr: {
      queueLabel: 'Waiting on your go',
      pendingFmt: '{n} pending',
      allClear: 'all clear — nothing waiting on you',
      approve: '✓ Approve',
      approved: '✓ Approved',
      items: ['Book follow-up — Jordan Ellis', 'Send follow-up — Priya Natarajan', 'Check in — 3 quiet clients'],
      doneLabel: 'Done · logged',
      done: [
        '✓ Meeting booked — Thu 10:00, invite sent',
        '✓ Email sent — in your voice, from your address',
        '✓ 3 check-ins scheduled — tomorrow 9:00',
      ],
    },
  },

  security: {
    chip: 'Security',
    title: "Your clients' data is not training data.",
    pages: [
      {
        num: '01',
        title: 'Your data, our models',
        body: 'Verren runs open-weight models on infrastructure we control. Client data is never sent to a third-party AI provider — and nothing you capture ever trains a model. Your book of business stays your book of business.',
      },
      {
        num: '02',
        title: 'Built to the standards your firm answers to',
        body: "Designed around the rules that govern advisory firms — safeguarding, AI governance, books and records. When your CCO asks where client data goes, you'll have the best answer in the industry. And your DDQ is answered by the founders who built the system.",
      },
      {
        num: '03',
        title: 'Nothing moves without you. Everything leaves a trail.',
        body: 'Every action is proposed first, shown in full, and runs only after your approval. Every read, write, prompt, and output is logged with the model and timestamp — evidence you can hand to an examiner.',
      },
    ],
    cloud: {
      boundaryTitle: 'Verren private cloud',
      boundarySub: 'Infrastructure we control',
      nodeData: 'Your client data',
      nodeDataSub: 'Encrypted in transit & at rest',
      linkTag: 'processed inside',
      nodeModel: 'Our models',
      nodeModelSub: 'Open-weight · run by us',
      never: [
        { lead: 'Never sent to a third-party AI provider', rest: ' — not OpenAI, not Anthropic, not Google.' },
        { lead: 'Never used to train a model', rest: ' — your book of business stays yours.' },
      ],
    },
    comp: {
      label: 'Designed for',
      checks: [
        { t: 'Reg S-P — safeguarding', d: 'Client records protected; incident response built in' },
        { t: 'FINRA 2026 GenAI guidance', d: 'Human-in-the-loop controls · prompt & output logging · model-version records' },
        { t: 'SEC AI exam priorities', d: 'AI governance your examiner can actually inspect' },
        { t: 'Books & records — 204-2 / 17a-4', d: 'Records retained the way advisers are required to keep them' },
        { t: 'Encryption & access', d: 'Encrypted in transit and at rest · least-privilege access' },
      ],
    },
    audit: {
      action: 'Send follow-up — Priya Natarajan',
      approve: '✓ Approve',
      ledgerLabel: 'Audit trail',
      logs: [
        '09:41:22 · draft_email · shown in full · approved by you · model vx-70b',
        '09:41:24 · send_email · executed · logged with prompt + output',
        '09:44:03 · profile_write · goal added · source: meeting transcript',
      ],
    },
  },

  team: {
    chip: 'The team',
    members: [
      {
        name: 'Seed Zeng',
        role: 'Founder & CTO',
        bio: 'Before Verren, Seed was a Senior Staff Software Engineer at DoorDash, where he led a 40+ engineer storage organization; before that, he was a Tech Lead at Meta. Earlier, as a founding engineer at Klaviyo, he built the real-time customer-data platform that scaled to 150,000 events per second. At Verren, he leads product and engineering end to end.',
        label: 'seedzeng.com',
        href: 'https://www.seedzeng.com/',
      },
      {
        name: 'Hansen Liang',
        role: 'Founder & CEO',
        bio: "Hansen is a 0-to-1 product and business leader who took Klaviyo Service and Klaviyo Reviews from concept to market. He has shipped more than a dozen products across software and hardware and leads Verren's go-to-market, partnerships, and company strategy.",
        label: 'thehansenliang.com',
        href: 'https://www.thehansenliang.com/',
      },
      {
        name: 'Tyler Calder, CFP®',
        role: 'Advisor',
        bio: 'Tyler is a Partner at Cerity Partners and a CFP® advising business owners and families across New England. Known for a plan-first approach, he integrates investment management with tax and estate strategy — and helps ensure Verren is built around the realities of high-trust advisory work.',
        label: 'ceritypartners.com',
        href: 'https://ceritypartners.com/team/tyler-calder/',
      },
    ],
  },

  waitlist: {
    chip: 'Early access',
    title: 'Become a founding design partner.',
    bodyLead: "We're onboarding a small group of advisors and RIA firms",
    bodyRest: ' to shape the product around real workflows and real compliance requirements. You get early access, a direct line to the founders, and your feedback reflected in the product every week.',
    nameLabel: 'Name',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@yourfirm.com',
    emailError: "Please use your firm email — personal addresses (Gmail, Yahoo, …) can't be verified.",
    firmLabel: 'Firm website',
    firmPlaceholder: 'yourfirm.com',
    firmError: 'Enter a valid website — e.g. yourfirm.com',
    crmLabel: 'Current CRM',
    crmPlaceholder: 'Redtail, Wealthbox, Salesforce…',
    noteLabel: 'Tell us about your practice',
    optional: '(optional)',
    subject: 'Verren — early access request',
    submit: 'Request early access',
    sending: 'Sending…',
    error: 'Something went wrong — please try again.',
    success: "You're on the list — we'll be in touch shortly.",
  },
};

export type Copy = typeof en;

const zh: Copy = {
  meta: {
    title: 'Verren — 理财顾问的 AI 助理',
    description:
      '记住每位客户的重要信息，准备每场会议，推进每项后续工作——所有操作都由你确认，并运行在我们自主部署的模型上。',
    ogDescription: '信息尽数收拢，重点自动提炼，行动始终可控。',
  },

  nav: {
    links: [
      { href: '#problem', label: '痛点' },
      { href: '#introducing', label: 'Verren' },
      { href: '#features', label: '功能' },
      { href: '#security', label: '安全' },
      { href: '#team', label: '团队' },
    ],
    cta: '申请早期体验',
  },

  footer: {
    line1: 'Verren — 理财顾问的 AI 助理。',
    line2: '早期体验 · © 2026',
  },

  hero: {
    label: '专为理财顾问与独立注册投资顾问（RIA）打造',
    h1: '你的专属 AI 助理。',
    sub: '记住每位客户的重要信息，准备每场会议，推进每项后续工作——每一步都由你确认。',
    ctaPrimary: '申请早期体验',
    ctaSecondary: '了解如何运作',
    kicker: '基于我们自主部署的模型——客户数据绝不会发送给第三方 AI 服务商',
    book: {
      title: '你的客户',
      meta: '128 个家庭客户 · 信息均为最新',
      rows: [
        { initials: 'PN', name: 'Priya Natarajan', note: '周二回顾会后的跟进邮件已拟好', tag: '已准备', ok: true },
        { initials: 'SO', name: 'Sam Okafor', note: '提到继承事项——已更新档案', tag: '动态', ok: false },
        { initials: 'DW', name: 'Dana Whitfield', note: '94 天未联系——问候邮件待你确认', tag: '待联系', ok: false },
        { initials: 'MT', name: 'Miguel Torres', note: 'RMD 将在 12 天后到期', tag: '临期', ok: false },
      ],
    },
    approval: {
      title: '安排跟进会议——周四 10:00',
      sub: '根据今天的会议记录生成',
      result: '已加入日历 · 邀请已发送给 Jordan',
      approve: '✓ 确认',
      approved: '✓ 已确认',
      draftLabel: '跟进邮件草稿',
      snippet: '“Jordan 你好——很高兴今天和你聊了聊……”',
    },
    profile: {
      eyebrow: '家庭客户',
      name: 'Jordan Ellis',
      sub: '家庭客户 · $2.4M',
      updatedRest: '档案更新于 2 分钟前',
      signals: [
        { tag: '动态', text: '职业变动——新任工程副总裁' },
        { tag: '临期', text: '下一笔 RMD 将在 41 天后到期' },
      ],
    },
  },

  problem: {
    chip: '痛点',
    pages: [
      {
        num: '01',
        lead: '客户关系才是你的核心竞争力，日程却被杂事占满。',
        body: '10 小时的工作日里，真正与客户交流的时间不到 4 小时。剩下的时间都花在会前准备、记录、跟进和兑现承诺上——这些行政工作，却由团队里成本最高的人亲自完成。',
        stat: '1,350 小时',
        statLabel: '管理 100 位客户一年所需的行政工作量——相当于三分之二名全职员工',
        source: 'Kitces Research；GReminders',
      },
      {
        num: '02',
        lead: '你请了人来帮忙，CRM 却还是永远过期。',
        body: '助理、运营、会议记录工具都配齐了——却依然没有一个角色专职记住一切、打理一切。所谓的系统记录，仍是一个会议一结束就不同步的数据库：你不录入，它就不记得；你不点击，它就不行动。',
        stat: '41%',
        statLabel: '顾问真正花在客户身上的时间占比',
        source: 'Kitces Research',
      },
      {
        num: '03',
        lead: '真正的代价不只是时间，而是增长。',
        body: '客户档案过时、跟进事项遗漏，会让潜在客户失去兴趣，也让优质客户悄然流失。AI 会议记录工具解决不了这些问题——它们只负责记录。独立顾问真正缺少的，是一个能掌握全局并把事情推进到底的助手。',
        stat: '1.4 倍',
        statLabel: '采用自动化工作流的机构，AUM 增速高于依赖人工流程的机构（16.6% vs 12.1%）',
        source: 'Schwab RIA Benchmarking',
      },
    ],
  },

  introducing: {
    chip: 'Verren 如何工作',
    paras: [
      {
        lead: '我是 Verren——你的 AI 助理。',
        rest: '我接入你的邮箱和日历，与现有 CRM 配合工作，并立即开始处理事务——不需要迁移数据，也不需要冒险更换核心系统。',
      },
      {
        lead: '我会让你的客户信息始终保持最新。',
        rest: '家庭变化、目标、顾虑和承诺会自动写入客户档案；重要动态会在你可能错过之前主动提醒你。',
      },
      {
        lead: '我会推进后续工作——每一步都由你确认。',
        rest: '任何操作都会先完整展示给你；未经确认，绝不执行。',
      },
    ],
    kicker: '你专注于客户，我负责把其余事情推进到位。',
    sign: '— Verren',
  },

  features: {
    chip: '核心能力',
    title: '真正好的助理，会为您做到这些。',
    pages: [
      {
        num: '01',
        title: '我为你把客户档案保持最新',
        body: '邮件、会议、短信和文件——我从每个渠道自动捕捉，逐一读取，把家庭变化、目标、顾虑和承诺等重要信息写入档案。你一个字都不用输。',
      },
      {
        num: '02',
        title: '我熟悉你的每位客户——并主动告诉你什么值得关注',
        body: '打开任何一份档案，你都能快速掌握全貌；容易错过的变化我也会主动提示：工作变动、继承事项、即将到期的 RMD，或久未联系的重要客户。',
      },
      {
        num: '03',
        title: '我把后续工作做完——每一步由你把关',
        body: '你一承诺跟进，我就订好会议、用你的语气拟好邮件、持续推进客户触达。每个动作都先等你确认——执行后写入合规负责人可直接查阅的记录。',
      },
    ],
    flow: {
      sourcesLabel: '信息来源——覆盖每个沟通渠道',
      sources: [
        { kind: '邮件', text: '回复：Maya 的 529 教育储蓄计划' },
        { kind: '会议', text: '第三季度回顾——Ellis 家庭' },
        { kind: '短信', text: 'Jordan：“新的薪酬方案已经确认……”' },
        { kind: '文件', text: 'Ellis_信托修订文件.pdf' },
      ],
      foot: '四个渠道 · 汇入同一家庭档案',
      seam: 'Verren 自动读取并更新',
      profile: {
        eyebrow: '家庭客户档案',
        name: 'Jordan Ellis',
        sub: '家庭客户 · $2.4M',
        rows: [
          { chip: '目标', text: 'Maya 的 529——在她三岁前开始投入' },
          { chip: '职业变动', text: '新任工程副总裁——股权按季度归属' },
          { chip: '薪酬', text: '新薪酬方案——股权追加授予已确认' },
          { chip: '变更', text: '信托受益人已变更' },
        ],
      },
    },
    book: {
      listLabel: '全部客户',
      items: [
        { name: 'Jordan Ellis', status: '资料最新', statusClass: 'chip-current', on: true },
        { name: 'Priya Natarajan', status: '潜在客户', statusClass: 'chip-prospect', on: false },
        { name: 'Dana Whitfield', status: '需关注', statusClass: 'chip-risk', on: false },
      ],
      foot: '128 个家庭客户 · 信息均为最新',
      details: [
        {
          eyebrow: '家庭客户档案',
          name: 'Jordan Ellis',
          sub: '家庭客户 · $2.4M',
          sec1: '自动更新的关键信息',
          facts: [
            { chip: '目标', text: 'Maya 的 529——在她三岁前开始投入' },
            { chip: '临期', text: '继承 IRA 的 RMD——还有 41 天' },
            { chip: '职业变动', text: '新任工程副总裁——股权按季度归属' },
          ],
          sec2: '会前简报——周四 10:00',
          brief: '祝贺客户履新。再次讨论 Maya 的 529 计划——该事项自 3 月起一直待定。在截止日前安排继承 IRA 的 RMD；新的股权授予也可能影响整体规划。',
        },
        {
          eyebrow: '家庭客户档案',
          name: 'Priya Natarajan',
          sub: '潜在客户 · 由 Okafor 夫妇推荐',
          sec1: '自动更新的关键信息',
          facts: [
            { chip: '目标', text: '将上一份工作的 401(k) 转入管理' },
            { chip: '动态', text: '提到计划在约两年后出售自己的诊所' },
            { chip: '待办', text: '已承诺周五前发送方案跟进' },
          ],
          sec2: '会前简报——周一 14:00',
          brief: '第二次会面。逐项讲解方案；她上次关注税务损耗——记得带上诊所出售的过渡规划。',
        },
        {
          eyebrow: '家庭客户档案',
          name: 'Dana Whitfield',
          sub: '家庭客户 · $1.1M',
          sec1: '自动更新的关键信息',
          facts: [
            { chip: '动态', text: '已 94 天未联系——上次回顾在 3 月' },
            { chip: '临期', text: '年度回顾已逾期' },
            { chip: '更新', text: '最近两封邮件已读——未回复' },
          ],
          sec2: '建议的触达',
          brief: '一封问候邮件已用你的语气拟好——提到了她家厨房翻新，以及她 3 月问过的 529 问题。点击确认即可发送。',
        },
      ],
    },
    appr: {
      queueLabel: '待你确认',
      pendingFmt: '{n} 项待确认',
      allClear: '已全部处理 · 暂无待确认事项',
      approve: '✓ 确认',
      approved: '✓ 已确认',
      items: ['安排跟进会议——Jordan Ellis', '发送跟进邮件——Priya Natarajan', '联系 3 位近期未互动的客户'],
      doneLabel: '已完成 · 已留痕',
      done: ['✓ 会议已安排——周四 10:00，邀请已发送', '✓ 邮件已发送——使用你的语气和邮箱', '✓ 3 封问候邮件已排期——明早 9:00'],
    },
  },

  security: {
    chip: '安全',
    title: '客户数据，不是模型训练材料。',
    pages: [
      {
        num: '01',
        title: '你的数据，由我们的模型处理',
        body: 'Verren 在我们自主管理的基础设施中运行开放权重模型。客户数据绝不会发送给第三方 AI 服务商，也绝不会用于训练任何模型。你的客户关系与数据始终归你所有。',
      },
      {
        num: '02',
        title: '围绕投顾机构面对的标准与要求设计',
        body: '围绕投顾机构面对的监管要求设计，包括数据保护、AI 治理以及账簿与记录。当 CCO 或合规负责人询问客户数据流向时，你可以给出清晰、可信的答案；尽调问卷（DDQ）也由亲手构建系统的创始团队直接回复。',
      },
      {
        num: '03',
        title: '没有你的确认，系统不会执行；每一步都有完整记录。',
        body: '每个动作都会先提出并完整展示，只有在你确认后才会执行。每一次读取、写入、提示词和输出，都会连同所用模型与时间戳完整记录，可作为监管检查所需的证据。',
      },
    ],
    cloud: {
      boundaryTitle: 'Verren 私有云环境',
      boundarySub: '我们自主管理的基础设施',
      nodeData: '你的客户数据',
      nodeDataSub: '传输与存储全程加密',
      linkTag: '仅在环境内处理',
      nodeModel: '我们的模型',
      nodeModelSub: '开放权重 · 自主部署',
      never: [
        { lead: '绝不发送给第三方 AI 服务商', rest: '——包括 OpenAI、Anthropic 和 Google。' },
        { lead: '绝不用于训练模型', rest: '——你的客户关系与数据始终归你所有。' },
      ],
    },
    comp: {
      label: '设计依据',
      checks: [
        { t: 'Reg S-P——客户信息保护', d: '保护客户记录，并内置安全事件响应机制' },
        { t: 'FINRA 2026 生成式 AI 指引', d: '人工确认机制 · 提示词与输出留痕 · 模型版本记录' },
        { t: 'SEC AI 检查重点', d: '可供监管检查人员核查的 AI 治理记录' },
        { t: '账簿与记录——204-2 / 17a-4', d: '按照投顾机构适用的要求留存记录' },
        { t: '加密与访问控制', d: '传输中与静态数据均加密 · 最小权限访问' },
      ],
    },
    audit: {
      action: '发送跟进邮件——Priya Natarajan',
      approve: '✓ 确认',
      ledgerLabel: '操作审计记录',
      logs: [
        '09:41:22 · draft_email · 已完整展示 · 经你确认 · 模型 vx-70b',
        '09:41:24 · send_email · 已执行 · 提示词与输出已记录',
        '09:44:03 · profile_write · 新增目标 · 来源：会议记录',
      ],
    },
  },

  team: {
    chip: '团队',
    members: [
      {
        name: 'Seed Zeng',
        role: '联合创始人兼 CTO',
        bio: '创办 Verren 前，Seed 曾任 DoorDash Senior Staff Software Engineer，带领 40 多人的存储基础设施团队；此前曾任 Meta 技术负责人。更早期，他作为 Klaviyo 创始工程师，打造了每秒处理 15 万事件的实时客户数据平台。如今，他全面负责 Verren 的产品与工程。',
        label: 'seedzeng.com',
        href: 'https://www.seedzeng.com/',
      },
      {
        name: 'Hansen Liang',
        role: '联合创始人兼 CEO',
        bio: 'Hansen 擅长从 0 到 1 打造并商业化新产品，曾推动 Klaviyo Service 和 Klaviyo Reviews 从概念走向市场，横跨软件与硬件推出十余款产品。如今，他负责 Verren 的商业拓展、合作伙伴关系与公司战略。',
        label: 'thehansenliang.com',
        href: 'https://www.thehansenliang.com/',
      },
      {
        name: 'Tyler Calder, CFP®',
        role: '行业顾问',
        bio: 'Tyler 是 Cerity Partners 合伙人及 CFP® 认证理财规划师，长期为新英格兰地区的企业主与家庭提供财富管理服务。他坚持“规划先行”，将投资管理、税务与遗产规划融为一体，并从一线投顾视角帮助 Verren 扎根于高信任业务的真实需求。',
        label: 'ceritypartners.com',
        href: 'https://ceritypartners.com/team/tyler-calder/',
      },
    ],
  },

  waitlist: {
    chip: '早期招募',
    title: '成为首批产品共创伙伴。',
    bodyLead: '我们正在邀请少数理财顾问和 RIA 机构',
    bodyRest: '，与我们一起围绕真实工作流和合规要求打磨产品。你将优先体验产品、直接与创始团队沟通，并看到反馈每周进入产品迭代。',
    nameLabel: '姓名',
    emailLabel: '工作邮箱',
    emailPlaceholder: 'you@yourfirm.com',
    emailError: '请使用工作邮箱。Gmail、Yahoo 等个人邮箱无法验证所属机构。',
    firmLabel: '机构官网',
    firmPlaceholder: 'yourfirm.com',
    firmError: '请输入有效网址，例如 yourfirm.com',
    crmLabel: '当前使用的 CRM',
    crmPlaceholder: 'Redtail、Wealthbox、Salesforce…',
    noteLabel: '介绍一下你的机构与业务',
    optional: '（选填）',
    subject: 'Verren——早期体验申请',
    submit: '申请早期体验',
    sending: '发送中…',
    error: '提交失败，请稍后再试。',
    success: '申请已收到，我们会尽快联系你。',
  },
};

export const copy: Record<Locale, Copy> = { en, zh };

export function getCopy(locale: string | undefined): Copy {
  return copy[(locale as Locale) ?? defaultLocale] ?? copy[defaultLocale];
}
