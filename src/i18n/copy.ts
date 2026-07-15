/**
 * ALL marketing copy for verren.app, in every locale.
 *
 * This file is the single source of truth the components render from — edit
 * copy HERE (docs/narrative.md stays the positioning/intent doc). The `en`
 * tree was extracted verbatim from the components; `zh` is a first-pass
 * translation awaiting founder/ChatGPT review. Both trees must keep the
 * exact same shape (`zh` is typed against `en`).
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
      'AI that remembers every client detail, preps every meeting, and handles the follow-through — always with your approval, on models we run ourselves.',
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
      updatedNow: 'Profile updated just now',
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
        lead: "The big teams hired people. You got a CRM that's always out of date.",
        body: "Mega-teams run on associates and a chief of staff — someone whose whole job is knowing everything and handling everything. Most advisors got a database that's out of sync the moment a meeting ends: it remembers nothing you don't type and does nothing you don't click.",
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
        title: 'Profiles that keep themselves current',
        body: 'Email, meetings, texts, documents — captured automatically, from every source. Verren reads it all and writes what matters to the profile: household changes, goals, concerns, commitments. You type nothing.',
      },
      {
        num: '02',
        title: 'It knows your book — and tells you what matters',
        body: "Every client, current. Open anyone and you're fully briefed — and what you'd otherwise miss gets surfaced: a job change, an inheritance mention, an RMD coming due, a good client gone quiet.",
      },
      {
        num: '03',
        title: 'It does the work — with your approval',
        body: 'Books the follow-up the moment one is promised. Drafts the email in your voice. Runs the outreach. Every action waits for your go — then lands in a ledger your compliance officer can read.',
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
      detail: {
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
        body: "Designed around the rules that govern advisory firms — safeguarding, AI governance, books and records. When your CCO asks where client data goes, you'll have the best answer in the industry. And your DDQ gets answered by the founders who built the system.",
      },
      {
        num: '03',
        title: 'Nothing moves without you. Everything leaves a trail.',
        body: 'Every action is proposed first, shown in full, and runs only on your approval. Every read, write, prompt, and output is logged with model and timestamp — evidence you can hand to an examiner.',
      },
    ],
    cloud: {
      boundaryTitle: 'Verren private cloud',
      boundarySub: 'Infrastructure we control',
      nodeData: 'Your client data',
      linkTag: 'processed inside',
      nodeModel: 'Our open-weight models',
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
        { t: 'Books & records — 204-2 / 17a-4', d: 'Retention the way advisers are required to keep it' },
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
        bio: 'Before Verren, Seed was a Senior Staff Software Engineer at DoorDash, where he led a 40+ engineer storage organization, and previously a Tech Lead at Meta. Earlier, as a founding engineer at Klaviyo, he built the real-time customer-data platform that scaled to 150,000 events per second. At Verren, he leads product and engineering end to end.',
        label: 'seedzeng.com',
        href: 'https://www.seedzeng.com/',
      },
      {
        name: 'Hansen Liang',
        role: 'Founder & CEO',
        bio: "Hansen is a 0-to-1 product and business leader who helped take Klaviyo Service and Klaviyo Reviews from concept to market. He has shipped more than a dozen products across software and hardware and leads Verren's go-to-market, partnerships, and company strategy.",
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
    bodyRest: ' to shape the product around real workflows and real compliance requirements. Early access, a direct line to the founders, and your feedback in the product on a weekly cadence.',
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
    error: "Something went wrong — your email wasn't lost, try again.",
    success: "You're on the list — we'll be in touch shortly.",
  },
};

export type Copy = typeof en;

const zh: Copy = {
  meta: {
    title: 'Verren — 理财顾问的 AI 幕僚长',
    description:
      'AI 记住每一位客户的每个细节，为每场会议做好准备，并替你完成后续跟进 — 每一步都经你批准，运行在我们自有的模型上。',
    ogDescription: '尽数捕捉，提炼要点，放心行动。',
  },

  nav: {
    links: [
      { href: '#problem', label: '痛点' },
      { href: '#introducing', label: '认识 Verren' },
      { href: '#features', label: '功能' },
      { href: '#security', label: '安全' },
      { href: '#team', label: '团队' },
    ],
    cta: '申请早期使用',
  },

  footer: {
    line1: 'Verren — 理财顾问的 AI 幕僚长。',
    line2: '早期体验 · © 2026',
  },

  hero: {
    label: '为理财顾问与独立投顾（RIA）而生',
    h1: '你的 AI 幕僚长。',
    sub: 'AI 记住每一位客户的每个细节，为每场会议做好准备，并替你完成后续跟进 — 每一步都经你批准。',
    ctaPrimary: '申请早期使用',
    ctaSecondary: '了解工作方式',
    kicker: '运行在我们自有的模型上 — 客户数据绝不触达任何第三方 AI 服务商',
    book: {
      title: '你的客户名册',
      meta: '128 个家庭账户 · 全部保持最新',
      rows: [
        { initials: 'PN', name: 'Priya Natarajan', note: '周二会议后的跟进邮件已拟好', tag: '已备妥', ok: true },
        { initials: 'SO', name: 'Sam Okafor', note: '提及遗产事项 — 已写入档案', tag: '信号', ok: false },
        { initials: 'DW', name: 'Dana Whitfield', note: '已静默 94 天 — 问候信待你批准', tag: '待触达', ok: false },
        { initials: 'MT', name: 'Miguel Torres', note: 'RMD 还有 12 天到期', tag: '到期', ok: false },
      ],
    },
    approval: {
      title: '预约跟进会议 — 周四 10:00',
      sub: '根据今天的会议记录建议',
      result: '已加入你的日历 · 邀请已发送给 Jordan',
      approve: '✓ 批准',
      approved: '✓ 已批准',
      draftLabel: '已拟好的跟进邮件',
      snippet: '“Jordan 你好 — 很高兴今天聊到…”',
    },
    profile: {
      eyebrow: '家庭账户',
      name: 'Jordan Ellis',
      sub: '家庭账户 · $2.4M',
      updatedRest: '档案于 2 分钟前更新',
      updatedNow: '档案刚刚更新',
      signals: [
        { tag: '信号', text: '人生事件 — 新工作，工程 VP' },
        { tag: '到期', text: '下一笔 RMD 还有 41 天' },
      ],
    },
  },

  problem: {
    chip: '痛点',
    pages: [
      {
        num: '01',
        lead: '你的优势在客户关系，你的日程却不这么想。',
        body: '10 小时的工作日里，真正陪客户的不到 4 小时。剩下的 — 会前准备、记录、跟进、追自己许下的承诺 — 全是行政事务，却由公司里最贵的人亲自来做。',
        stat: '1,350 小时',
        statLabel: '100 个客户的名册，一年的行政工作量 — 相当于三分之二个全职员工',
        source: 'Kitces Research；GReminders',
      },
      {
        num: '02',
        lead: '大团队雇了人，你只得到一个永远过期的 CRM。',
        body: '头部团队有助理、有幕僚长 — 有人专职记住一切、打理一切。多数顾问得到的却是一个会议一结束就不同步的数据库：你不输入它就不记得，你不点击它就什么都不做。',
        stat: '41%',
        statLabel: '顾问真正花在客户身上的时间占比',
        source: 'Kitces Research',
      },
      {
        num: '03',
        lead: '代价不是时间，而是增长。',
        body: '过期的档案、漏掉的跟进，正是潜在客户冷掉、优质客户悄然流失的原因。AI 会议记录工具帮不上忙 — 它们只会记下来。至今没有人为独立顾问提供一个记住一切、打理一切的角色。',
        stat: '1.4 倍',
        statLabel: '自动化工作流的公司比手动作业的公司 AUM 增速更快（16.6% vs 12.1%）',
        source: 'Schwab RIA Benchmarking',
      },
    ],
  },

  introducing: {
    chip: '认识 Verren',
    paras: [
      {
        lead: '我是 Verren — 你事务所的幕僚长。',
        rest: '我接入你的邮箱和日历，与你现有的 CRM 并行工作，然后直接开始干活 — 无需迁移，也无需押上整个事务所。',
      },
      {
        lead: '我替你保持客户名册时刻最新。',
        rest: '每一份客户档案都会自动更新 — 家庭变化、目标、顾虑、承诺 — 并在你察觉之前，先告诉你什么值得注意。',
      },
      {
        lead: '后续跟进交给我 — 但由你批准。',
        rest: '我要做的每一件事，都会先完整呈现给你。你不说“执行”，一切都不会发生。',
      },
    ],
    kicker: '你专注做顾问，其余的交给我。',
    sign: '— Verren',
  },

  features: {
    chip: '功能',
    title: '一位出色的幕僚长会做什么。',
    pages: [
      {
        num: '01',
        title: '自动保持最新的客户档案',
        body: '邮件、会议、短信、文件 — 从每一个渠道自动捕捉。Verren 读取全部内容，把重要信息写入档案：家庭变化、目标、顾虑、承诺。你一个字都不用输。',
      },
      {
        num: '02',
        title: '它了解你的整个名册 — 并告诉你什么重要',
        body: '每位客户都保持最新。打开任何人，你都已了然于胸 — 那些容易漏掉的也会被主动提示：换了工作、提到遗产、RMD 快到期、优质客户变得沉默。',
      },
      {
        num: '03',
        title: '它替你干活 — 但由你批准',
        body: '承诺一出口，跟进会议随即预约好。邮件用你的语气拟好。客户触达自动运转。每个动作都等你放行 — 然后写入一份合规官能直接查阅的台账。',
      },
    ],
    flow: {
      sourcesLabel: '信息来源 — 每一个渠道',
      sources: [
        { kind: '邮件', text: '回复：Maya 的 529 教育金计划' },
        { kind: '会议', text: '三季度回顾 — Ellis 一家' },
        { kind: '短信', text: 'Jordan：“新的薪酬方案下来了…”' },
        { kind: '文件', text: 'Ellis_信托修订.pdf' },
      ],
      foot: '四个渠道 · 同一个家庭账户',
      seam: 'Verren 读取并更新',
      profile: {
        eyebrow: '家庭档案',
        name: 'Jordan Ellis',
        sub: '家庭账户 · $2.4M',
        rows: [
          { chip: '目标', text: 'Maya 的 529 — 在她三岁前启动' },
          { chip: '人生事件', text: '新职位，工程 VP — 股权按季度归属' },
          { chip: '薪酬', text: '新方案 — 股权补授已确认' },
          { chip: '更新', text: '信托受益人已变更' },
        ],
      },
    },
    book: {
      listLabel: '你的客户名册',
      items: [
        { name: 'Jordan Ellis', status: '现有客户', statusClass: 'chip-current', on: true },
        { name: 'Priya Natarajan', status: '潜在客户', statusClass: 'chip-prospect', on: false },
        { name: 'Dana Whitfield', status: '流失风险', statusClass: 'chip-risk', on: false },
      ],
      foot: '128 个家庭账户 · 全部保持最新',
      detail: {
        eyebrow: '家庭档案',
        name: 'Jordan Ellis',
        sub: '家庭账户 · $2.4M',
        sec1: '为你自动保持最新',
        facts: [
          { chip: '目标', text: 'Maya 的 529 — 在她三岁前启动' },
          { chip: '到期', text: '继承 IRA 的 RMD — 还有 41 天' },
          { chip: '人生事件', text: '新职位，工程 VP — 股权按季度归属' },
        ],
        sec2: '会前简报 — 周四 10:00',
        brief: '祝贺新职位。重提 Maya 的 529 — 三月起一直未定。在截止前安排继承 IRA 的 RMD；股权补授可能改变整体规划。',
      },
    },
    appr: {
      queueLabel: '等你放行',
      pendingFmt: '{n} 项待批',
      allClear: '全部处理完毕 — 没有事项在等你',
      approve: '✓ 批准',
      approved: '✓ 已批准',
      items: ['预约跟进 — Jordan Ellis', '发送跟进邮件 — Priya Natarajan', '问候 — 3 位沉默客户'],
      doneLabel: '已完成 · 已记录',
      done: ['✓ 会议已订 — 周四 10:00，邀请已发送', '✓ 邮件已发 — 你的语气、你的邮箱', '✓ 3 封问候已排期 — 明早 9:00'],
    },
  },

  security: {
    chip: '安全',
    title: '客户的数据，绝不是训练数据。',
    pages: [
      {
        num: '01',
        title: '你的数据，我们的模型',
        body: 'Verren 在我们自己掌控的基础设施上运行开源权重模型。客户数据绝不发送给任何第三方 AI 服务商 — 你捕捉的一切也绝不用于训练模型。你的客户名册，永远只属于你。',
      },
      {
        num: '02',
        title: '按你所在行业的标准来构建',
        body: '围绕监管投顾行业的规则设计 — 数据保护、AI 治理、账簿与记录。当你的合规官问“客户数据去了哪里”，你将拥有全行业最好的答案。而你的尽调问卷（DDQ），由亲手构建这套系统的创始人来回答。',
      },
      {
        num: '03',
        title: '未经你批准，一切不动。每一步都有迹可循。',
        body: '每个动作都先提案、完整呈现，仅在你批准后执行。每一次读取、写入、提示词与输出都连同模型和时间戳记录在案 — 可以直接交给监管检查的证据。',
      },
    ],
    cloud: {
      boundaryTitle: 'Verren 私有云',
      boundarySub: '我们自己掌控的基础设施',
      nodeData: '你的客户数据',
      linkTag: '在内部处理',
      nodeModel: '我们的开源权重模型',
      never: [
        { lead: '绝不发送给第三方 AI 服务商', rest: ' — 不给 OpenAI，不给 Anthropic，也不给 Google。' },
        { lead: '绝不用于训练模型', rest: ' — 你的客户名册永远只属于你。' },
      ],
    },
    comp: {
      label: '对标设计',
      checks: [
        { t: 'Reg S-P — 客户数据保护', d: '客户记录受保护；内置事件响应机制' },
        { t: 'FINRA 2026 生成式 AI 指引', d: '人工审批控制 · 提示词与输出留痕 · 模型版本记录' },
        { t: 'SEC AI 检查重点', d: '监管检查员真正可核查的 AI 治理' },
        { t: '账簿与记录 — 204-2 / 17a-4', d: '按投顾法规要求的方式留存记录' },
        { t: '加密与访问控制', d: '传输与静态全程加密 · 最小权限访问' },
      ],
    },
    audit: {
      action: '发送跟进邮件 — Priya Natarajan',
      approve: '✓ 批准',
      ledgerLabel: '审计记录',
      logs: [
        '09:41:22 · draft_email · 完整呈现 · 经你批准 · 模型 vx-70b',
        '09:41:24 · send_email · 已执行 · 提示词与输出已留痕',
        '09:44:03 · profile_write · 新增目标 · 来源：会议转录',
      ],
    },
  },

  team: {
    chip: '团队',
    members: [
      {
        name: 'Seed Zeng',
        role: '联合创始人 & CTO',
        bio: '创办 Verren 之前，Seed 是 DoorDash 的 Senior Staff 工程师，带领 40+ 人的存储团队，更早前在 Meta 担任 Tech Lead。作为 Klaviyo 的创始工程师，他构建了实时客户数据平台，规模扩展至每秒 15 万事件。在 Verren，他端到端负责产品与工程。',
        label: 'seedzeng.com',
        href: 'https://www.seedzeng.com/',
      },
      {
        name: 'Hansen Liang',
        role: '联合创始人 & CEO',
        bio: 'Hansen 是一位从 0 到 1 的产品与商业操盘手，曾主导 Klaviyo Service 和 Klaviyo Reviews 从概念走向市场，横跨软硬件交付过十余款产品。在 Verren，他负责市场拓展、合作与公司战略。',
        label: 'thehansenliang.com',
        href: 'https://www.thehansenliang.com/',
      },
      {
        name: 'Tyler Calder, CFP®',
        role: '顾问',
        bio: 'Tyler 是 Cerity Partners 的合伙人、CFP® 持证人，服务新英格兰地区的企业主与家庭。他以“规划先行”著称，将投资管理与税务、遗产策略融为一体 — 并确保 Verren 的产品扎根于高信任度顾问业务的真实场景。',
        label: 'ceritypartners.com',
        href: 'https://ceritypartners.com/team/tyler-calder/',
      },
    ],
  },

  waitlist: {
    chip: '早期体验',
    title: '成为创始设计伙伴。',
    bodyLead: '我们正在招募一小批顾问与 RIA 事务所',
    bodyRest: '，围绕真实的工作流与合规要求共同打磨产品。你将获得早期使用权、与创始人直接沟通的渠道，以及每周迭代进产品的反馈闭环。',
    nameLabel: '姓名',
    emailLabel: '工作邮箱',
    emailPlaceholder: 'you@yourfirm.com',
    emailError: '请使用公司邮箱 — 个人邮箱（Gmail、Yahoo 等）无法完成验证。',
    firmLabel: '公司网站',
    firmPlaceholder: 'yourfirm.com',
    firmError: '请输入有效的网址 — 例如 yourfirm.com',
    crmLabel: '当前使用的 CRM',
    crmPlaceholder: 'Redtail、Wealthbox、Salesforce…',
    noteLabel: '介绍一下你的业务',
    optional: '（选填）',
    subject: 'Verren — 早期使用申请',
    submit: '申请早期使用',
    sending: '发送中…',
    error: '出了点问题 — 你的邮箱没有丢失，请再试一次。',
    success: '你已在名单上 — 我们会尽快与你联系。',
  },
};

export const copy: Record<Locale, Copy> = { en, zh };

export function getCopy(locale: string | undefined): Copy {
  return copy[(locale as Locale) ?? defaultLocale] ?? copy[defaultLocale];
}
