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
    labelDate: "Est. 2026",
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
    titleB: "by the same small team.",
    note: "Every product below is owned, operated, and improved week after week.",
    statusLive: "Live",
    statusBeta: "Beta",
    statusSoon: "In development",
    amlakey: {
      name: "Amlakey",
      tagline: "Property management for landlords",
      description:
        "An iOS, Android, and web app that turns rent collection, utility tracking, and reporting into a single calm workflow. Built for the Saudi market with Hijri calendar and Ejar integration.",
      primaryLabel: "amlakeyapp.com",
      appStore: "App Store",
      googlePlay: "Google Play",
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
      "A small number of engagements per year. We pick problems we want to live with for years, not months.",
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
      "Unode is a privately held technology studio. We pick narrow problems and stay with them for years. We build our own products, and we partner with teams who want that same standard applied to theirs.",
    readMore: "Read more about the studio",
    legalLine: "Unode Company LLC · CR 7053929092",
    principles: [
      {
        tag: "01",
        title: "Own the product",
        body: "When we build something, we operate it. No agency hand-off, no walk-away.",
      },
      {
        tag: "02",
        title: "Small surface, deep craft",
        body: "A few things, done with care, beat many things done quickly.",
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
      "Product engineering, platform development, KSA market integrations, and 0→1 launches. A small number of engagements per year.",
    heroLabel: "— Services",
    heroTitle: "How we work with teams.",
    heroBody1:
      "Unode partners with a small number of teams each year — founders, growth-stage product teams, and corporate innovation groups — on projects we want to live with for years, not months.",
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
        title: "Own the product",
        body: "When we build something, we operate it. No agency hand-off, no walk-away. Whether it’s our product or yours, we treat it like it has to be alive in five years.",
      },
      {
        index: "02",
        title: "Small surface, deep craft",
        body: "A few things, done with care, beat many things done quickly. We turn down work that would force us to spread thin. The size of the team is a feature, not a constraint.",
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
      "We take a small number of external engagements each year. Our preference is for founders and teams who have a clear point of view about what they’re building and want a partner who can execute at the level of the best in-house team. If that sounds like you, ",
    workingLink: "start a project",
    workingBodyAfter: "",
    companyLabel: "— Company",
    companyName: "Unode Company LLC",
    companyCity: "Riyadh, Saudi Arabia",
    companyCR: "CR 7053929092",
    companyPrivate: "Privately held",
    companyEst: "Est. 2026",
    companyDuns: "D-U-N-S 986467763",
    finalCtaTitle: "Have a project in mind?",
    finalCtaBody: "Tell us about it. The first call is always free.",
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
    home: "الصفحة الرئيسية ليونود",
    primary: "التنقّل الرئيسي",
  },
  langToggle: {
    label: "English",
    aria: "English",
  },
  hero: {
    label: "ستوديو يونود",
    labelDate: "تأسّس 2026",
    headlineA: "نبني برمجيات",
    headlineB: "تنطلق، وتنمو،",
    headlineC: "وتدوم",
    headlineD: "طويلاً.",
    sub: "يونود شريك تقني للفِرَق الطموحة. نُصمّم، ونبني، ونُدير برمجيات للأفراد والشركات — من الفكرة الأولى وحتى التشغيل الكامل.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "شاهد أعمالنا",
  },
  work: {
    label: "— أعمالنا",
    titleA: "نبنيها، ونُطلقها،",
    titleB: "ونتولّى تشغيلها — بفريقنا الواحد.",
    note: "كل منتج هنا، نمتلكه، ونُديره، ونُطوّره أسبوعًا بعد أسبوع.",
    statusLive: "نشط",
    statusBeta: "نسخة تجريبية",
    statusSoon: "قيد التطوير",
    amlakey: {
      name: "أملاكي",
      tagline: "تطبيق إدارة العقارات للمُلّاك",
      description:
        "تطبيق متوفّر على iOS وAndroid والويب. يجمع تحصيل الإيجار، ومتابعة الفواتير، والتقارير في تجربة واحدة منظّمة. مُصمَّم للسوق السعودي بتقويم هجري وتكامل مع منصة إيجار.",
      primaryLabel: "amlakeyapp.com",
      appStore: "App Store",
      googlePlay: "Google Play",
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
      "عدد محدود من المشاريع في السنة. نختار مشكلات نلتزم بها لسنوات، لا لأشهر.",
    items: [
      {
        index: "01",
        title: "هندسة المنتجات",
        body: "ويب، وتطبيقات موبايل، وميزات بالذكاء الاصطناعي. من الفكرة الأولى إلى متجر التطبيقات.",
      },
      {
        index: "02",
        title: "تطوير المنصّات",
        body: "منصات B2B SaaS، أنظمة متعددة الحسابات، وبنية تقنية تدوم طويلاً.",
      },
      {
        index: "03",
        title: "تكاملات السوق السعودي",
        body: "إيجار · أبشر · STC Pay · SEC · NWC. أطلقناها بأنفسنا، ونعرف تفاصيلها الدقيقة.",
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
      "يونود استوديو تقني خاص. نختار مشكلات محدّدة ونلتزم بها لسنوات. نبني منتجاتنا الخاصة، ونعمل مع فِرَق تطمح إلى المعيار ذاته في منتجاتها.",
    readMore: "اقرأ المزيد عن الاستوديو",
    legalLine: "شركة يونود · سجل تجاري 7053929092",
    principles: [
      {
        tag: "01",
        title: "نمتلك المنتج",
        body: "حين نبني منتجًا، نُديره. لا تسليم وانصراف.",
      },
      {
        tag: "02",
        title: "نطاق صغير، إتقان عميق",
        body: "أعمال قليلة بإتقان، أفضل من أعمال كثيرة بسرعة.",
      },
      {
        tag: "03",
        title: "المفيد قبل المُبهر",
        body: "البرمجيات تستحقّ مكانها حين يفتحها المستخدم غدًا. نُحسّن لأجل ذلك، لا لأجل الإبهار.",
      },
    ],
  },
  contact: {
    label: "— تواصل",
    titleA: "تعمل على شيء",
    titleB: "نحبّ معرفته؟",
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
      "هندسة المنتجات، وتطوير المنصّات، وتكاملات السوق السعودي، وإطلاق المنتجات الجديدة. عدد محدود من المشاريع في السنة.",
    heroLabel: "— الخدمات",
    heroTitle: "كيف نعمل مع الفِرَق الطموحة.",
    heroBody1:
      "نعمل مع عدد محدود من الفِرَق كل عام — مؤسّسو شركات ناشئة، وفِرَق منتجات في مرحلة النمو، وأقسام ابتكار في الشركات الكبرى — على مشاريع نلتزم بها لسنوات، لا لأشهر.",
    heroBody2: "لا نبيع ساعات عمل. نبيع منتجات مُسلَّمة.",
    ctaStartProject: "ابدأ مشروعك",
    ctaBookCall: "احجز مكالمة 30 دقيقة",
    capabilitiesLabel: "— قدراتنا",
    capabilities: [
      {
        index: "01",
        title: "هندسة المنتجات",
        tagline: "ويب، وتطبيقات موبايل، وميزات بالذكاء الاصطناعي. من الفكرة الأولى إلى متجر التطبيقات.",
        body: "تطوير مخصّص باستخدام React Native وNext.js وSwift. نُصمّم التفاعل، ونبني النظام، ونُطلقه. مناسب حين تكون لديك رؤية واضحة للمنتج وتحتاج إلى عمق هندسي لتنفيذها.",
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
        body: "أطلقنا هذه التكاملات في الإنتاج فعلًا. نعرف تفاصيلها الدقيقة — مشاكل بيئات الاختبار، ومدد الموافقات، والحالات الاستثنائية التي لا تذكرها الوثائق. قيمتها مضاعفة حين تدخل السوق السعودي من خارج المملكة.",
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
      { index: "01", body: "أعمال White Label أو وكالة تحت اسم آخر." },
      {
        index: "02",
        body: "تأجير مطوّر فردي بالشهر. نقدّم خدماتنا كفريق متكامل، أو نعتذر بأدب.",
      },
      { index: "03", body: "البناء على WordPress أو منصّات Low-code وNo-code." },
      {
        index: "04",
        body: "أي مشروع لا نستطيع تسليمه بمعيار عالٍ. نعتذر كثيرًا بسبب هذا المعيار.",
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
      "يونود استوديو تقني خاص. نبني البرمجيات بالعناية نفسها التي نطبّقها على منتجاتنا — لأنّ نصفها فعلًا منتجاتنا.",
    howWeThinkLabel: "— كيف نفكّر",
    principles: [
      {
        index: "01",
        title: "نمتلك المنتج",
        body: "حين نبني منتجًا، نُديره. لا تسليم وانصراف. سواء كان منتجنا أو منتجك، نتعامل معه كأنّه يجب أن يبقى نشطًا لخمس سنوات قادمة.",
      },
      {
        index: "02",
        title: "نطاق صغير، إتقان عميق",
        body: "أعمال قليلة بإتقان، أفضل من أعمال كثيرة بسرعة. نرفض المشاريع التي تجبرنا على التشتّت. حجم الفريق الصغير ميزة، وليس قيدًا.",
      },
      {
        index: "03",
        title: "المفيد قبل المُبهر",
        body: "البرمجيات تستحقّ مكانها حين يفتحها المستخدم غدًا. نُحسّن لأجل ذلك — لا لأجل الإبهار، ولا لأجل ما يبدو جميلًا في عرض تقديمي. إن لم تُثبت الشاشة فائدتها، لن نُطلقها.",
      },
    ],
    focusLabel: "— مجالات التركيز",
    focusIntro:
      "تتركّز أعمالنا في ثلاثة مجالات نجد فيها مشكلات تستحقّ العمل عليها باستمرار.",
    focus: {
      consumer: {
        label: "تطبيقات للأفراد",
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
      "نقبل عددًا محدودًا من المشاريع الخارجية كل عام. نُفضّل العمل مع مؤسّسي الشركات والفِرَق الذين يملكون رؤية واضحة لما يبنونه، ويبحثون عن شريك يُنفّذ بمستوى أفضل فريق داخلي. إن وجدت نفسك في هذا الوصف، ",
    workingLink: "ابدأ مشروعك",
    workingBodyAfter: "",
    companyLabel: "— الشركة",
    companyName: "شركة يونود",
    companyCity: "الرياض، المملكة العربية السعودية",
    companyCR: "سجل تجاري 7053929092",
    companyPrivate: "شركة خاصة",
    companyEst: "تأسّس 2026",
    companyDuns: "D-U-N-S 986467763",
    finalCtaTitle: "لديك مشروع في بالك؟",
    finalCtaBody: "حدّثنا عنه. المكالمة الأولى دائمًا مجانية.",
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
