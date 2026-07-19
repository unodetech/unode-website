/* ----------------------------------------------------------------------
 * i18n dictionaries — single source of truth for all copy on the site.
 * Add a key here first, then reference it from a page or component.
 *
 * Conventions:
 *   - Tech / brand names (React, Next.js, Supabase, Amlakey, etc.) stay
 *     in Latin script in both locales.
 *   - Western digits (0–9) throughout — modern Saudi B2B convention;
 *     Eastern Arabic numerals read as classical / religious for the
 *     target tech audience.
 *   - Arrows: rendered locale-aware in <ArrowRight /> based on a flag.
 * -------------------------------------------------------------------- */

export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];

/** Stable list of stack technology names — Latin in both locales. */
export const STACK = [
  "React",
  "React Native",
  "Next.js",
  "Supabase",
  "TypeScript",
  "PostgreSQL",
  "Swift",
  "Kotlin",
  "OpenAI",
  "Anthropic",
] as const;

export const STACK_FULL = [
  ...STACK,
  "Node.js",
  "Vercel",
  "Cloudflare",
  "Stripe",
  "Figma",
] as const;

/* ----------------------------------------------------------------------
 * English dictionary — shape is the canonical source of truth.
 * -------------------------------------------------------------------- */

const en = {
  nav: {
    work: "Work",
    services: "Services",
    studio: "Studio",
    startProject: "Start a project",
    home: "Unode home",
    primary: "Primary",
  },
  langToggle: {
    label: "العربية",
    aria: "العربية",
  },
  hero: {
    label: "Unode Studio",
    labelDate: "",
    headlineA: "Software that ships,",
    headlineB: "scales, and ",
    headlineC: "outlives",
    headlineD: "the trend cycle.",
    sub: "Unode is a development partner for ambitious teams. We design, ship, and operate consumer and enterprise software end-to-end.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
  },
  work: {
    label: "— Work",
    titleA: "Built, shipped, and run",
    titleB: "by the same team, end to end.",
    note: "Every product below is one we built and run ourselves — improved week after week.",
    statusLive: "Live",
    statusBeta: "Beta",
    statusSoon: "In development",
    readCaseStudy: "Read case study",
    amlakey: {
      name: "Amlakey",
      tagline: "Property management for landlords",
      description:
        "An iOS and web app that turns rent collection, utility tracking, and reporting into a single calm workflow. Built for the Saudi market with Hijri calendar and Ejar integration.",
      primaryLabel: "amlakeyapp.com",
      appStore: "App Store",
      previewAlt:
        "Amlakey dashboard on iPhone showing monthly rent collection and occupancy at a glance",
    },
    masarQiyas: {
      name: "Masar Qiyas",
      tagline: "Exam prep for Saudi standardized tests",
      description:
        "A focused practice platform for GAT (Qudurat) and SAAT (Tahsili). Real questions, progress tracking, and adaptive study plans that meet students where they are.",
      primaryLabel: "masarqiyas.com",
    },
  },
  servicesHome: {
    label: "— Services",
    titleA: "How we work",
    titleB: "with teams.",
    note:
      "We partner with teams that need engineering done right the first time — and built to keep working long after launch.",
    items: [
      {
        index: "01",
        title: "Product engineering",
        body: "Web, mobile, AI features. From sketch to App Store.",
      },
      {
        index: "02",
        title: "Platform development",
        body: "B2B SaaS, multi-tenant systems, durable architectures.",
      },
      {
        index: "03",
        title: "KSA market integrations",
        body: "Ejar · Absher · STCPay · SEC · NWC. We’ve built these. We know the gotchas.",
      },
      {
        index: "04",
        title: "0→1 launches",
        body: "Design, build, and launch a new product in 90 days.",
      },
    ],
    stackLabel: "Stack",
    ctaPrimary: "Discuss your project",
    seeAll: "See all services",
  },
  studioHome: {
    label: "— Studio",
    titleA: "A studio built",
    titleB: "for the long game.",
    intro:
      "Unode is a privately held technology studio. We solve real problems and build software that lasts. We build our own products, and we partner with teams who want that same standard applied to theirs.",
    readMore: "Read more about the studio",
    legalLine: "Unode Company LLC · CR 7053929092",
    principles: [
      {
        tag: "01",
        title: "Built to last",
        body: "We don't hand off and walk away. The standard is to design and build something that's still useful five years from now.",
      },
      {
        tag: "02",
        title: "Focused, never scattered",
        body: "Every project gets full attention. Done with care, end to end.",
      },
      {
        tag: "03",
        title: "Useful before clever",
        body: "Software earns its place by being opened tomorrow. We optimize for that, not for novelty.",
      },
    ],
  },
  contact: {
    label: "— Contact",
    titleA: "Working on something",
    titleB: "we should know about?",
    note:
      "Tell us about it. We read every note — partnerships, custom builds, hiring conversations, all of it.",
    ctaPrimary: "Start a project",
    ctaSecondary: "Book a 30-min call",
    generalLabel: "General",
    supportLabel: "Product support",
    generalEmail: "info@unode.tech",
    supportEmail: "support@unode.tech",
  },
  footer: {
    blurb: "A technology studio. Privately held.",
    workLabel: "Work",
    studioLabel: "Studio",
    directLabel: "Direct",
    about: "About",
    services: "Services",
    contact: "Contact",
    copyright: "© 2026 Unode Company",
    legal: "Unode Company LLC · CR 7053929092",
    amlakey: "Amlakey",
    masarQiyas: "Masar Qiyas",
  },
  /* /services page ---------------------------------------------------- */
  servicesPage: {
    metaTitle: "Services",
    metaDescription:
      "Product engineering, platform development, KSA market integrations, and 0→1 launches. Built for teams that need it done right.",
    heroLabel: "— Services",
    heroTitle: "How we work with teams.",
    heroBody1:
      "Unode partners with founders, growth-stage product teams, and corporate innovation groups — building software designed to solve real problems and last.",
    heroBody2: "We don’t sell hours. We sell shipped software.",
    ctaStartProject: "Start a project",
    ctaBookCall: "Book a 30-min call",
    capabilitiesLabel: "— Capabilities",
    capabilities: [
      {
        index: "01",
        title: "Product engineering",
        tagline: "Web, mobile, AI-augmented features. From sketch to App Store.",
        body: "Custom React Native, Next.js, and Swift work. We design the interaction, build the system, and ship it. Best fit when you have a strong product POV but need engineering depth to execute it.",
      },
      {
        index: "02",
        title: "Platform development",
        tagline: "B2B SaaS, multi-tenant systems, durable architectures.",
        body: "Greenfield or rescue work on platforms intended to last. Supabase, PostgreSQL, edge functions, queues, observability. We make decisions you don’t have to revisit in 18 months.",
      },
      {
        index: "03",
        title: "KSA market integrations",
        tagline: "Ejar · Absher · STCPay · SEC · NWC · Tawakkalna · Nafath.",
        body: "We’ve shipped these in production. We know the gotchas — sandbox quirks, certification timelines, edge cases the docs don’t mention. Worth its weight when you’re entering the Saudi market from elsewhere.",
      },
      {
        index: "04",
        title: "0→1 launches",
        tagline: "Design, build, and launch a new product in 90 days.",
        body: "For founders and corporate innovation teams who need to move fast without burning a year on agency overhead. We’re embedded; you’re the customer; the goal is users by day 90.",
      },
    ],
    processLabel: "— How it works",
    process: [
      {
        index: "01",
        title: "Intro call",
        body: "30 minutes. Free. We ask hard questions about your goal.",
      },
      {
        index: "02",
        title: "Scoping doc",
        body: "1 week. Written brief, milestones, budget, risks.",
      },
      {
        index: "03",
        title: "Design + build",
        body: "Sprint-based. Demo every Friday. You own the work.",
      },
      {
        index: "04",
        title: "Launch + operate",
        body: "We ship together. If you want, we keep operating it.",
      },
    ],
    stackLabel: "— Stack",
    antiLabel: "— What we don’t do",
    anti: [
      { index: "01", body: "White-label or unbranded agency work." },
      {
        index: "02",
        body: "Pure staff augmentation (one dev rented by the month). We engage as a team or not at all.",
      },
      { index: "03", body: "WordPress, low-code, or no-code builds." },
      {
        index: "04",
        body: "Anything we can’t ship to a high standard. We say no a lot.",
      },
    ],
    finalCtaTitle: "Have a project in mind?",
    finalCtaBody: "Tell us about it. The first call is always free.",
  },
  /* /studio page ------------------------------------------------------ */
  studioPage: {
    metaTitle: "Studio",
    metaDescription:
      "Unode is a privately held technology studio building consumer and enterprise software for the long game.",
    heroLabel: "— Studio",
    heroTitle: "A studio built for the long game.",
    heroBody:
      "Unode is a privately held technology studio. We build software with the same care we’d want applied to our own products — because half the time, it is our own products.",
    howWeThinkLabel: "— How we think",
    principles: [
      {
        index: "01",
        title: "Built to last",
        body: "We don’t hand off and walk away. We design and build with the standard required to keep something useful five years from now — whether it’s our product or yours.",
      },
      {
        index: "02",
        title: "Focused, never scattered",
        body: "Every project gets full attention from people who care about it. Done with the same care, end to end — design through ship.",
      },
      {
        index: "03",
        title: "Useful before clever",
        body: "Software earns its place by being opened tomorrow. We optimize for that — not for novelty, not for what looks good in a deck. If a screen doesn’t pay rent, it doesn’t ship.",
      },
    ],
    focusLabel: "— Focus areas",
    focusIntro:
      "Our work clusters around three categories where we keep finding interesting problems.",
    focus: {
      consumer: {
        label: "Consumer software",
        bodyBefore: "Apps people open every day. Our flagship is ",
        bodyAfter: ".",
      },
      operational: {
        label: "Operational platforms",
        body: "B2B SaaS for industries that have lived in spreadsheets too long.",
      },
      ksa: {
        label: "Saudi market infrastructure",
        body: "Banking, real estate, education, and identity integrations specific to KSA.",
      },
    },
    workingLabel: "— Working with us",
    workingBodyBefore:
      "We work with founders and teams who have a clear point of view about what they’re building and want a partner who can execute at the level of the best in-house team. If that sounds like you, ",
    workingLink: "start a project",
    workingBodyAfter: "",
    companyLabel: "— Company",
    companyName: "Unode Company LLC",
    companyCity: "Riyadh, Saudi Arabia",
    companyCR: "CR 7053929092",
    companyPrivate: "Privately held",
    companyEst: "",
    companyDuns: "D-U-N-S 986467763",
    finalCtaTitle: "Have a project in mind?",
    finalCtaBody: "Tell us about it. The first call is always free.",
  },
  /* Contact form — used in the home Contact section and /contact ------ */
  contactForm: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Work email",
    emailPlaceholder: "you@company.com",
    companyLabel: "Company",
    companyPlaceholder: "Company or team",
    projectTypeLabel: "Project type",
    projectTypes: [
      { value: "Product engineering", label: "Product engineering" },
      { value: "Platform", label: "Platform" },
      { value: "0→1 launch", label: "0→1 launch" },
      { value: "Other", label: "Other" },
    ],
    messageLabel: "Message",
    messagePlaceholder: "What are you building? What's the goal and timeline?",
    submit: "Send message",
    submitting: "Sending…",
    successTitle: "Thanks — your message is in.",
    successBody:
      "We read every note and usually reply within a day or two. Talk soon.",
    errorTitle: "That didn't send.",
    errorBody: "Please try again, or email us directly at info@unode.tech.",
    optional: "optional",
  },
  /* /contact page ----------------------------------------------------- */
  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Tell us about your project. Partnerships, custom builds, and hiring conversations — we read every note.",
    heroLabel: "— Contact",
    heroTitle: "Let's talk about what you're building.",
    heroBody:
      "Send a note with the shape of the project and we'll come back with honest thoughts on how we'd approach it. The first call is always free.",
    altLabel: "— Prefer to reach out directly",
  },
  /* Case studies — /work/[slug] --------------------------------------- */
  caseStudy: {
    common: {
      backLabel: "All work",
      liveLabel: "Live",
      problemLabel: "— The problem",
      buildLabel: "— What we built",
      stackLabel: "— Stack",
      visitLabel: "Visit site",
      finalCtaTitle: "Have a project in mind?",
      finalCtaBody: "Tell us about it. The first call is always free.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Book a 30-min call",
    },
    amlakey: {
      metaTitle: "Amlakey — Case study",
      metaDescription:
        "How we built Amlakey: an iOS and web property-management app for Saudi landlords, with Hijri calendar, Ejar, SEC, and NWC integrations.",
      name: "Amlakey",
      positioning:
        "The calm way for Saudi landlords to run rent, utilities, and reporting — in one place.",
      platforms: ["iOS", "Web"],
      website: { label: "amlakeyapp.com", url: "https://amlakeyapp.com" },
      appStore: {
        label: "App Store",
        url: "https://apps.apple.com/app/id6771771954",
      },
      problem:
        "Independent landlords in Saudi Arabia run their properties out of notebooks, chat threads, and a dozen browser tabs — one for the rent ledger, one for each utility portal, another for the lease paperwork. Nothing talks to anything else, so slipped rent, unpaid bills, and expiring contracts are easy to miss. Amlakey replaces that scramble with a single place that quietly keeps track.",
      features: [
        {
          title: "Rent that tracks itself",
          body: "Every unit, lease, and payment in one ledger — on the Hijri calendar landlords actually use — with clear views of who has paid and who is overdue.",
        },
        {
          title: "Utilities without the portals",
          body: "Electricity (SEC) and water (NWC) bills pulled in automatically, so readings and dues sit next to the property instead of behind separate logins.",
        },
        {
          title: "Ejar, lined up",
          body: "Lease data stays consistent with the national Ejar registry, so contracts and tenant records match the official system.",
        },
        {
          title: "Reports in a tap",
          body: "Owner statements and income reports generate on demand — the paperwork that used to mean an evening in a spreadsheet.",
        },
        {
          title: "Quiet by design",
          body: "Timely reminders for due rent and expiring leases, in a calm interface that works the same in Arabic and English, right-to-left included.",
        },
      ],
      screenshotAlts: [
        "Amlakey dashboard showing the month's rent collection, occupancy, and upcoming dues",
        "The properties list — each building with its units and occupancy status",
        "A tenant record with lease dates, contact details, and payment history",
        "Amlakey running in Arabic with a full right-to-left layout",
      ],
      stack: [
        "React Native",
        "Expo",
        "Supabase",
        "Ejar API",
        "SEC",
        "NWC",
        "Apple IAP",
      ],
    },
    masarQiyas: {
      metaTitle: "Masar Qiyas — Case study",
      metaDescription:
        "How we built Masar Qiyas: a web practice platform for Saudi standardized exams (GAT / Qudurat and SAAT / Tahsili) built on real, verified questions.",
      name: "Masar Qiyas",
      positioning:
        "Exam prep for Saudi standardized tests — real questions, honest progress.",
      platforms: ["Web"],
      website: { label: "masarqiyas.com", url: "https://masarqiyas.com" },
      appStore: null,
      problem:
        "Students preparing for the GAT (Qudurat) and SAAT (Tahsili) drill on scattered PDFs and question dumps of unknown provenance, with no reliable way to know how ready they actually are. Quality is inconsistent and progress is invisible. Masar Qiyas is built around real, verified questions and a study loop that shows students exactly where they stand.",
      features: [
        {
          title: "Real questions, verified",
          body: "A practice bank drawn from genuine exam material and checked for accuracy — not machine-generated filler.",
        },
        {
          title: "Progress you can trust",
          body: "Section-level tracking that reflects real readiness across Quantitative and Verbal, so study time goes where it counts.",
        },
        {
          title: "Study plans that adapt",
          body: "Plans that meet each student at their current level and adjust as they improve.",
        },
        {
          title: "Arabic-first, exam-accurate",
          body: "Built right-to-left, with the mathematical notation and conventions the Saudi exams actually use.",
        },
      ],
      screenshotAlts: [],
      stack: ["Next.js", "Cloudflare Workers", "Supabase", "OpenNext"],
    },
  },
} as const;

/* ----------------------------------------------------------------------
 * Arabic dictionary — Modern Standard Arabic (فصحى), professional B2B
 * tone. Same shape as `en`. Tech / brand names stay in Latin.
 * -------------------------------------------------------------------- */

const ar = {
  nav: {
    work: "أعمالنا",
    services: "الخدمات",
    studio: "الاستوديو",
    startProject: "ابدأ مشروعك",
    home: "الصفحة الرئيسية",
    primary: "التنقّل الرئيسي",
  },
  langToggle: {
    label: "English",
    aria: "English",
  },
  hero: {
    label: "ستوديو يونود",
    labelDate: "",
    headlineA: "نبني برمجيات",
    headlineB: "تنطلق، وتنمو،",
    headlineC: "وتدوم",
    headlineD: "طويلاً.",
    sub: "يونود شريك تقني للفِرَق الطموحة. نُصمّم البرمجيات ونبنيها ونُشغّلها — من الفكرة الأولى إلى الإطلاق وما بعده.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "شاهد أعمالنا",
  },
  work: {
    label: "— أعمالنا",
    titleA: "نبنيها، ونُطلقها،",
    titleB: "ونُشغّلها — بنفس الفريق، من البداية إلى النهاية.",
    note: "كل منتج هنا، بنيناه ونُديره بأنفسنا — ونُطوّره أسبوعًا بعد أسبوع.",
    statusLive: "نشط",
    statusBeta: "نسخة تجريبية",
    statusSoon: "قيد التطوير",
    readCaseStudy: "اقرأ دراسة الحالة",
    amlakey: {
      name: "أملاكي",
      tagline: "تطبيق إدارة العقارات للمُلّاك",
      description:
        "تطبيق متوفّر على iOS والويب. يجمع تحصيل الإيجار، ومتابعة الفواتير، والتقارير في تجربة واحدة منظّمة. مُصمَّم للسوق السعودي بتقويم هجري وتكامل مع منصة إيجار.",
      primaryLabel: "amlakeyapp.com",
      appStore: "App Store",
      previewAlt:
        "لوحة تحكم أملاكي على iPhone تعرض تحصيل الإيجار الشهري ونسبة الإشغال في لمحة",
    },
    masarQiyas: {
      name: "مسار قياس",
      tagline: "تدريب لاختبارات القدرات والتحصيلي",
      description:
        "منصة تدريب مُركّزة على اختباري القدرات والتحصيلي. أسئلة فعلية، ومتابعة لمستوى التقدّم، وخطط دراسية تتكيّف مع كل طالب.",
      primaryLabel: "masarqiyas.com",
    },
  },
  servicesHome: {
    label: "— الخدمات",
    titleA: "كيف نعمل",
    titleB: "مع الفِرَق الطموحة.",
    note:
      "نعمل مع الفِرَق التي تحتاج إلى تنفيذ هندسي متقن من المرة الأولى — وإلى منتجات تستمر في العمل بعد الإطلاق طويلاً.",
    items: [
      {
        index: "01",
        title: "هندسة المنتجات",
        body: "ويب، وتطبيقات الجوّال، وميزات بالذكاء الاصطناعي. من الفكرة الأولى إلى متجر التطبيقات.",
      },
      {
        index: "02",
        title: "تطوير المنصّات",
        body: "منصات B2B SaaS، أنظمة متعددة المستخدمين، وبنية تقنية تدوم طويلاً.",
      },
      {
        index: "03",
        title: "تكاملات السوق السعودي",
        body: "إيجار · أبشر · STC Pay · SEC · NWC. تكاملنا معها في الإنتاج، ونعرف تفاصيلها الدقيقة.",
      },
      {
        index: "04",
        title: "إطلاق المنتجات الجديدة",
        body: "تصميم، وبناء، وإطلاق منتج جديد خلال 90 يومًا.",
      },
    ],
    stackLabel: "البنية التقنية",
    ctaPrimary: "ناقش مشروعك معنا",
    seeAll: "جميع الخدمات",
  },
  studioHome: {
    label: "— الاستوديو",
    titleA: "نبني",
    titleB: "للمدى البعيد.",
    intro:
      "يونود استوديو تقني خاص. نحلّ مشكلات حقيقية ونبني برمجيات تدوم. نبني منتجاتنا الخاصة، ونعمل مع فِرَق تطمح إلى المعيار ذاته في منتجاتها.",
    readMore: "اقرأ المزيد عن الاستوديو",
    legalLine: "شركة يونود · سجل تجاري 7053929092",
    principles: [
      {
        tag: "01",
        title: "نبني ليبقى",
        body: "لا نُسلّم وننصرف. المعيار أن نُصمّم ونبني منتجًا يبقى مفيدًا بعد خمس سنوات.",
      },
      {
        tag: "02",
        title: "تركيزٌ تام، لا تشتّت",
        body: "كل مشروع يحظى بكامل الاهتمام. صنعة عميقة، من البداية إلى النهاية.",
      },
      {
        tag: "03",
        title: "المفيد قبل المُبهر",
        body: "البرمجيات الجيدة هي التي يفتحها المستخدم غدًا، وبعد غد. نُحسّن لأجل ذلك، لا لأجل الإبهار.",
      },
    ],
  },
  contact: {
    label: "— تواصل",
    titleA: "تعمل على شيء",
    titleB: "يستحقّ أن نسمع عنه؟",
    note:
      "حدّثنا عنه. نقرأ كل رسالة — شراكات، وتطوير مخصّص، وحتى محادثات التوظيف.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "احجز مكالمة 30 دقيقة",
    generalLabel: "عام",
    supportLabel: "دعم المنتج",
    generalEmail: "info@unode.tech",
    supportEmail: "support@unode.tech",
  },
  footer: {
    blurb: "استوديو تقني. شركة خاصة.",
    workLabel: "أعمالنا",
    studioLabel: "الاستوديو",
    directLabel: "تواصل مباشر",
    about: "عن الاستوديو",
    services: "الخدمات",
    contact: "تواصل",
    copyright: "© 2026 شركة يونود",
    legal: "شركة يونود · سجل تجاري 7053929092",
    amlakey: "أملاكي",
    masarQiyas: "مسار قياس",
  },
  /* /services page ---------------------------------------------------- */
  servicesPage: {
    metaTitle: "الخدمات",
    metaDescription:
      "هندسة المنتجات، وتطوير المنصّات، وتكاملات السوق السعودي، وإطلاق المنتجات الجديدة. للفِرَق التي تحتاج إلى تنفيذ متقن.",
    heroLabel: "— الخدمات",
    heroTitle: "كيف نعمل مع الفِرَق الطموحة.",
    heroBody1:
      "يونود يعمل مع مؤسّسي الشركات الناشئة، وفِرَق المنتجات في مرحلة النمو، وأقسام الابتكار في الشركات الكبرى — لبناء برمجيات تحلّ مشكلات حقيقية، وتُصمَّم لتدوم.",
    heroBody2: "لا نبيع ساعات. نبيع منتجات تعمل.",
    ctaStartProject: "ابدأ مشروعك",
    ctaBookCall: "احجز مكالمة 30 دقيقة",
    capabilitiesLabel: "— قدراتنا",
    capabilities: [
      {
        index: "01",
        title: "هندسة المنتجات",
        tagline: "ويب، وتطبيقات موبايل، وميزات بالذكاء الاصطناعي. من الفكرة الأولى إلى متجر التطبيقات.",
        body: "تطوير مخصّص باستخدام React Native وNext.js وSwift. نُصمّم التفاعل، ونبني النظام، ونُطلقه. مناسب حين تكون لديك رؤية واضحة للمنتج وتحتاج إلى خبرة هندسية عميقة لتنفيذها.",
      },
      {
        index: "02",
        title: "تطوير المنصّات",
        tagline: "منصات B2B SaaS، أنظمة متعددة الحسابات، وبنية تقنية تدوم طويلاً.",
        body: "نبني من الصفر، أو نُعيد هيكلة منصّات قائمة. نستخدم Supabase وPostgreSQL وEdge Functions وأنظمة الطوابير والمراقبة. نتّخذ قرارات تقنية لا تحتاج إلى مراجعة بعد 18 شهرًا.",
      },
      {
        index: "03",
        title: "تكاملات السوق السعودي",
        tagline: "إيجار · أبشر · STC Pay · SEC · NWC · توكلنا · نفاذ.",
        body: "بنينا هذه التكاملات في مشاريع فعلية. نعرف تفاصيلها الدقيقة — مشاكل بيئات الاختبار، ومدد الموافقات، والحالات الاستثنائية التي لا تذكرها الوثائق. قيمتها مضاعفة حين تدخل السوق السعودي من خارج المملكة.",
      },
      {
        index: "04",
        title: "إطلاق المنتجات الجديدة",
        tagline: "تصميم، وبناء، وإطلاق منتج جديد خلال 90 يومًا.",
        body: "لمؤسّسي الشركات الناشئة وأقسام الابتكار في الشركات الكبرى، حين تحتاج إلى التحرّك السريع دون قضاء سنة في تعقيدات الوكالات. نعمل كجزء من فريقك، والهدف مستخدمون حقيقيون بحلول اليوم الـ90.",
      },
    ],
    processLabel: "— كيف نعمل",
    process: [
      {
        index: "01",
        title: "مكالمة تعارف",
        body: "30 دقيقة، مجانية. نطرح أسئلة دقيقة عن هدفك.",
      },
      {
        index: "02",
        title: "وثيقة نطاق المشروع",
        body: "أسبوع واحد. وثيقة شاملة تغطّي المراحل، والميزانية، والمخاطر.",
      },
      {
        index: "03",
        title: "تصميم وبناء",
        body: "بنظام السبرنتات (sprints). عرض أسبوعي كل جمعة. الملكية الكاملة لك.",
      },
      {
        index: "04",
        title: "إطلاق وتشغيل",
        body: "نُطلق المنتج معًا. وإن رغبت، نواصل تشغيله بعد الإطلاق.",
      },
    ],
    stackLabel: "— البنية التقنية",
    antiLabel: "— ما لا نقوم به",
    anti: [
      { index: "01", body: "أعمال بهوية مخفية أو وكالة تحت اسم آخر." },
      {
        index: "02",
        body: "تأجير مطوّر فردي بالشهر. نقدّم خدماتنا كفريق متكامل، أو لا نقدّمها.",
      },
      { index: "03", body: "البناء على WordPress أو منصّات Low-code وNo-code." },
      {
        index: "04",
        body: "أي مشروع لا نستطيع تسليمه بمعيار عالٍ. نقول \"لا\" كثيرًا التزامًا بهذا المعيار.",
      },
    ],
    finalCtaTitle: "لديك مشروع في بالك؟",
    finalCtaBody: "حدّثنا عنه. المكالمة الأولى دائمًا مجانية.",
  },
  /* /studio page ------------------------------------------------------ */
  studioPage: {
    metaTitle: "الاستوديو",
    metaDescription:
      "يونود استوديو تقني خاص يبني برمجيات للأفراد والشركات، للمدى البعيد.",
    heroLabel: "— الاستوديو",
    heroTitle: "نبني للمدى البعيد.",
    heroBody:
      "يونود استوديو تقني خاص. نبني البرمجيات بالعناية نفسها التي نطبّقها على منتجاتنا — لأنّ نصفها بالفعل منتجاتنا.",
    howWeThinkLabel: "— كيف نفكّر",
    principles: [
      {
        index: "01",
        title: "نبني ليبقى",
        body: "لا نُسلّم وننصرف. نُصمّم ونبني بالمعيار المطلوب ليبقى المنتج مفيدًا بعد خمس سنوات — سواء كان منتجنا أو منتجك.",
      },
      {
        index: "02",
        title: "تركيزٌ تام، لا تشتّت",
        body: "كل مشروع يحظى بكامل الاهتمام من فريقٍ يهتمّ به فعلًا. الصنعة العميقة من البداية إلى النهاية — من التصميم حتى الإطلاق.",
      },
      {
        index: "03",
        title: "المفيد قبل المُبهر",
        body: "البرمجيات الجيدة هي التي يفتحها المستخدم غدًا، وبعد غد. نُحسّن لأجل ذلك — لا لأجل الإبهار، ولا لأجل ما يبدو جميلًا في عرض تقديمي. إن لم تُثبت الشاشة فائدتها، لن نُطلقها.",
      },
    ],
    focusLabel: "— مجالات التركيز",
    focusIntro:
      "تتركّز أعمالنا في ثلاثة مجالات نجد فيها مشكلات تستحقّ العمل عليها باستمرار.",
    focus: {
      consumer: {
        label: "تطبيقات استهلاكية",
        bodyBefore: "تطبيقات يستخدمها الناس يوميًا. منتجنا الرئيسي هو ",
        bodyAfter: ".",
      },
      operational: {
        label: "منصات تشغيل الأعمال",
        body: "منصات B2B لقطاعات اعتمدت على جداول البيانات لوقت طويل.",
      },
      ksa: {
        label: "تقنيات السوق السعودي",
        body: "تكاملات في القطاعات المصرفية والعقارية والتعليمية والتحقّق من الهوية، خاصة بالمملكة.",
      },
    },
    workingLabel: "— العمل معنا",
    workingBodyBefore:
      "نعمل مع مؤسّسي الشركات والفِرَق الذين يملكون رؤية واضحة لما يبنونه، ويبحثون عن شريك يُنفّذ بمستوى أفضل فريق داخلي. إن وجدت نفسك في هذا الوصف، ",
    workingLink: "ابدأ مشروعك",
    workingBodyAfter: "",
    companyLabel: "— الشركة",
    companyName: "شركة يونود",
    companyCity: "الرياض، المملكة العربية السعودية",
    companyCR: "سجل تجاري 7053929092",
    companyPrivate: "شركة خاصة",
    companyEst: "",
    companyDuns: "D-U-N-S 986467763",
    finalCtaTitle: "لديك مشروع في بالك؟",
    finalCtaBody: "حدّثنا عنه. المكالمة الأولى دائمًا مجانية.",
  },
  /* Contact form ------------------------------------------------------ */
  contactForm: {
    nameLabel: "الاسم",
    namePlaceholder: "اسمك",
    emailLabel: "البريد الإلكتروني للعمل",
    emailPlaceholder: "you@company.com",
    companyLabel: "الشركة",
    companyPlaceholder: "الشركة أو الفريق",
    projectTypeLabel: "نوع المشروع",
    projectTypes: [
      { value: "Product engineering", label: "هندسة منتجات" },
      { value: "Platform", label: "تطوير منصّة" },
      { value: "0→1 launch", label: "إطلاق منتج جديد" },
      { value: "Other", label: "أخرى" },
    ],
    messageLabel: "الرسالة",
    messagePlaceholder: "ما الذي تبنيه؟ وما الهدف والإطار الزمني؟",
    submit: "أرسل الرسالة",
    submitting: "جارٍ الإرسال…",
    successTitle: "شكرًا — وصلتنا رسالتك.",
    successBody: "نقرأ كل رسالة، ونردّ عادةً خلال يوم أو يومين. نراك قريبًا.",
    errorTitle: "تعذّر الإرسال.",
    errorBody: "حاول مرة أخرى، أو راسلنا مباشرة على info@unode.tech.",
    optional: "اختياري",
  },
  /* /contact page ----------------------------------------------------- */
  contactPage: {
    metaTitle: "تواصل",
    metaDescription:
      "حدّثنا عن مشروعك. شراكات، وتطوير مخصّص، ومحادثات التوظيف — نقرأ كل رسالة.",
    heroLabel: "— تواصل",
    heroTitle: "لنتحدّث عمّا تبنيه.",
    heroBody:
      "أرسل لنا نبذة عن المشروع، ونعود إليك برأي صريح حول طريقة تنفيذه. المكالمة الأولى دائمًا مجانية.",
    altLabel: "— تفضّل التواصل المباشر",
  },
  /* Case studies — /work/[slug] --------------------------------------- */
  caseStudy: {
    common: {
      backLabel: "كل الأعمال",
      liveLabel: "نشط",
      problemLabel: "— المشكلة",
      buildLabel: "— ما بنيناه",
      stackLabel: "— البنية التقنية",
      visitLabel: "زيارة الموقع",
      finalCtaTitle: "لديك مشروع في بالك؟",
      finalCtaBody: "حدّثنا عنه. المكالمة الأولى دائمًا مجانية.",
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "احجز مكالمة 30 دقيقة",
    },
    amlakey: {
      metaTitle: "أملاكي — دراسة حالة",
      metaDescription:
        "كيف بنينا أملاكي: تطبيق لإدارة العقارات على iOS والويب للمُلّاك في السعودية، بتقويم هجري وتكامل مع إيجار وSEC وNWC.",
      name: "أملاكي",
      positioning:
        "الطريقة الهادئة لإدارة الإيجار والفواتير والتقارير — في مكان واحد، للمُلّاك في السعودية.",
      platforms: ["iOS", "Web"],
      website: { label: "amlakeyapp.com", url: "https://amlakeyapp.com" },
      appStore: {
        label: "App Store",
        url: "https://apps.apple.com/app/id6771771954",
      },
      problem:
        "يُدير كثير من المُلّاك في السعودية عقاراتهم عبر الدفاتر، ومحادثات الرسائل، وعشرات النوافذ في المتصفّح — واحدة لسجلّ الإيجار، وأخرى لكل بوّابة خدمات، وثالثة لعقود الإيجار. لا شيء منها متّصل بالآخر، فيسهل أن تفوت دفعة إيجار، أو فاتورة غير مسدّدة، أو عقد على وشك الانتهاء. جاء أملاكي ليستبدل هذه الفوضى بمكان واحد يتابع كل ذلك بهدوء.",
      features: [
        {
          title: "إيجار يتابع نفسه",
          body: "كل وحدة وعقد ودفعة في سجلّ واحد — بالتقويم الهجري الذي يستخدمه المُلّاك فعلًا — مع عرض واضح لمن سدّد ومن تأخّر.",
        },
        {
          title: "فواتير دون بوّابات",
          body: "فواتير الكهرباء (SEC) والماء (NWC) تُجلب تلقائيًا، فتظهر القراءات والمستحقات بجانب العقار بدل أن تكون خلف حسابات منفصلة.",
        },
        {
          title: "تكامل مع إيجار",
          body: "تبقى بيانات العقود متوافقة مع منصة إيجار الوطنية، لتطابق العقودُ وسجلّاتُ المستأجرين النظامَ الرسمي.",
        },
        {
          title: "تقارير بلمسة",
          body: "كشوف المُلّاك وتقارير الدخل تُنشأ عند الطلب — تلك الأوراق التي كانت تعني أمسيةً كاملة مع جدول بيانات.",
        },
        {
          title: "هدوءٌ بالتصميم",
          body: "تنبيهات في وقتها للإيجار المستحق والعقود المنتهية، في واجهة هادئة تعمل بالعربية والإنجليزية بالكفاءة نفسها، ومن اليمين إلى اليسار.",
        },
      ],
      screenshotAlts: [
        "لوحة تحكم أملاكي تعرض تحصيل الإيجار الشهري ونسبة الإشغال والمستحقات القادمة",
        "قائمة العقارات — كل مبنى مع وحداته وحالة إشغالها",
        "بطاقة مستأجر تعرض مدد العقد وبيانات التواصل وسجلّ الدفعات",
        "أملاكي بواجهة عربية كاملة من اليمين إلى اليسار",
      ],
      stack: [
        "React Native",
        "Expo",
        "Supabase",
        "Ejar API",
        "SEC",
        "NWC",
        "Apple IAP",
      ],
    },
    masarQiyas: {
      metaTitle: "مسار قياس — دراسة حالة",
      metaDescription:
        "كيف بنينا مسار قياس: منصة تدريب على الويب لاختبارات القدرات والتحصيلي، مبنية على أسئلة حقيقية موثّقة.",
      name: "مسار قياس",
      positioning:
        "تدريب لاختبارات القدرات والتحصيلي — أسئلة حقيقية، وتقدّم صادق.",
      platforms: ["Web"],
      website: { label: "masarqiyas.com", url: "https://masarqiyas.com" },
      appStore: null,
      problem:
        "يتدرّب الطلاب استعدادًا لاختباري القدرات والتحصيلي على ملفات PDF متفرّقة ومجموعات أسئلة مجهولة المصدر، دون طريقة موثوقة لمعرفة مدى جاهزيتهم فعلًا. الجودة متفاوتة، والتقدّم غير مرئي. بُني مسار قياس حول أسئلة حقيقية موثّقة، وحلقة دراسية تُظهر للطالب أين يقف بالضبط.",
      features: [
        {
          title: "أسئلة حقيقية وموثّقة",
          body: "بنك تدريب مبني على مادة اختبار فعلية ومُراجَع للدقّة — لا أسئلة مولّدة آليًا لملء الفراغ.",
        },
        {
          title: "تقدّم تثق به",
          body: "متابعة على مستوى الأقسام تعكس الجاهزية الحقيقية في الكمّي واللفظي، ليذهب وقت المذاكرة إلى حيث يهمّ.",
        },
        {
          title: "خطط دراسية تتكيّف",
          body: "خطط تلتقي بكل طالب عند مستواه الحالي وتتعدّل مع تحسّنه.",
        },
        {
          title: "عربية أولًا، وبدقّة الاختبار",
          body: "مبنية من اليمين إلى اليسار، بالرموز والاصطلاحات الرياضية التي تستخدمها الاختبارات السعودية فعلًا.",
        },
      ],
      screenshotAlts: [],
      stack: ["Next.js", "Cloudflare Workers", "Supabase", "OpenNext"],
    },
  },
} as const;

/* ----------------------------------------------------------------------
 * Type / accessor
 * -------------------------------------------------------------------- */

export type Dictionary = typeof en;

// Cast to Dictionary so TS treats `ar` as structurally identical to `en`.
// The dictionary shapes are kept in lock-step by hand.
export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ar: ar as unknown as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Build an internal link respecting the active locale's URL prefix. */
export function localizedHref(locale: Locale, path: string): string {
  const prefix = locale === "ar" ? "/ar" : "";
  // path is expected to start with "/" — preserve hash fragments and trailing slash.
  if (path.startsWith("#")) return path;
  if (path === "/") return prefix === "" ? "/" : `${prefix}`;
  return `${prefix}${path}`;
}

/** Locale-aware "arrow into a link" character: → for LTR, ← for RTL. */
export function arrowChar(locale: Locale): string {
  return locale === "ar" ? "←" : "→";
}
