/* ----------------------------------------------------------------------
 * i18n dictionaries — single source of truth for all copy on the site.
 * Add a key here first, then reference it from a page or component.
 *
 * Conventions:
 *   - Tech / brand names (React, Next.js, Supabase, Amlakey, etc.) stay
 *     in Latin script in both locales.
 *   - Western digits (0–9) for CR, D-U-N-S, phone numbers, addresses.
 *   - Eastern Arabic digits (٠–٩) only for prose where they read naturally
 *     ("تأسّس ٢٠٢٦", "٣٠ دقيقة", سجل تجاري ٧٠٥٣٩٢٩٠٩٢).
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
    startProject: "ابدأ مشروعًا",
    home: "الصفحة الرئيسية ليونود",
    primary: "التنقل الرئيسي",
  },
  langToggle: {
    label: "English",
    aria: "English",
  },
  hero: {
    label: "ستوديو يونود",
    labelDate: "تأسّس ٢٠٢٦",
    headlineA: "برمجيات تُطلَق،",
    headlineB: "وتتوسّع، ",
    headlineC: "وتبقى",
    headlineD: "أبعد من موجات الموضة.",
    sub: "يونود شريك تطوير للفِرَق الطموحة. نصمّم البرمجيات ونُطلقها ونُشغّلها — من الفكرة الأولى إلى الإنتاج، استهلاكيةً كانت أو مؤسسية.",
    ctaPrimary: "ابدأ مشروعًا",
    ctaSecondary: "تصفّح أعمالنا",
  },
  work: {
    label: "— أعمالنا",
    titleA: "نبنيها ونُطلقها ونُشغّلها —",
    titleB: "بنفس الفريق الصغير.",
    note: "كل منتج بالأسفل نمتلكه ونُشغّله ونحسّنه أسبوعًا بعد أسبوع.",
    statusLive: "يعمل الآن",
    statusBeta: "نسخة تجريبية",
    statusSoon: "قيد التطوير",
    amlakey: {
      name: "أملاكي",
      tagline: "إدارة عقارية للمُلّاك",
      description:
        "تطبيق iOS وAndroid وويب يحوّل تحصيل الإيجار وتتبّع الفواتير والتقارير إلى تدفّق هادئ واحد. مُصمَّم للسوق السعودي مع تقويم هجري وتكامل إيجار.",
      primaryLabel: "amlakeyapp.com",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    masarQiyas: {
      name: "مسار قياس",
      tagline: "استعداد لاختبارات القياس السعودية",
      description:
        "منصة تدريب مُركّزة على القدرات والتحصيلي. أسئلة حقيقية، وتتبّع للتقدّم، وخطط دراسية تتكيّف مع كل طالب.",
      primaryLabel: "masarqiyas.com",
    },
  },
  servicesHome: {
    label: "— الخدمات",
    titleA: "كيف نعمل",
    titleB: "مع الفِرَق.",
    note:
      "عدد محدود من الارتباطات في السنة. نختار مشكلات نودّ العيش معها لسنوات، لا لأشهر.",
    items: [
      {
        index: "01",
        title: "هندسة المنتجات",
        body: "ويب، موبايل، وميزات ذكاء اصطناعي. من المسودة إلى المتجر.",
      },
      {
        index: "02",
        title: "تطوير المنصّات",
        body: "منصات B2B متعددة المستأجرين، ببِنى قابلة للبقاء طويلًا.",
      },
      {
        index: "03",
        title: "تكاملات السوق السعودي",
        body: "إيجار · أبشر · STC Pay · SEC · NWC. بنيناها بأنفسنا. نعرف تفاصيلها الدقيقة.",
      },
      {
        index: "04",
        title: "إطلاق منتج من الصفر",
        body: "تصميم وبناء وإطلاق منتج جديد خلال ٩٠ يومًا.",
      },
    ],
    stackLabel: "البنية التقنية",
    ctaPrimary: "تحدّث معنا عن مشروعك",
    seeAll: "جميع الخدمات",
  },
  studioHome: {
    label: "— الاستوديو",
    titleA: "استوديو بُني",
    titleB: "للمدى البعيد.",
    intro:
      "يونود استوديو تقني خاص. نختار مشكلات ضيّقة ونبقى معها لسنوات. نبني منتجاتنا الخاصة، ونتشارك مع فِرَق تطمح للمعيار نفسه في منتجاتها.",
    readMore: "اقرأ المزيد عن الاستوديو",
    legalLine: "شركة يونود · سجل تجاري ٧٠٥٣٩٢٩٠٩٢",
    principles: [
      {
        tag: "01",
        title: "نمتلك المنتج",
        body: "حين نبني شيئًا، نُشغّله. لا تسليم وكالة، ولا انصراف بعد الإطلاق.",
      },
      {
        tag: "02",
        title: "مساحة صغيرة، صنعة عميقة",
        body: "أشياء قليلة تُصنع بعناية، خير من أشياء كثيرة تُنجز بسرعة.",
      },
      {
        tag: "03",
        title: "المفيد قبل المُبهر",
        body: "البرمجيات تستحقّ مكانها بأن تُفتح غدًا. نُحسّن لأجل ذلك، لا لأجل الجِدّة.",
      },
    ],
  },
  contact: {
    label: "— تواصل",
    titleA: "تعمل على شيء",
    titleB: "نودّ معرفته؟",
    note:
      "حدّثنا عنه. نقرأ كل رسالة — شراكات، أعمال مخصّصة، محادثات توظيف، كل ذلك.",
    ctaPrimary: "ابدأ مشروعًا",
    ctaSecondary: "احجز مكالمة ٣٠ دقيقة",
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
    legal: "شركة يونود · سجل تجاري ٧٠٥٣٩٢٩٠٩٢",
    amlakey: "أملاكي",
    masarQiyas: "مسار قياس",
  },
  /* /services page ---------------------------------------------------- */
  servicesPage: {
    metaTitle: "الخدمات",
    metaDescription:
      "هندسة المنتجات، وتطوير المنصّات، وتكاملات السوق السعودي، وإطلاق المنتجات من الصفر. عدد محدود من الارتباطات في السنة.",
    heroLabel: "— الخدمات",
    heroTitle: "كيف نعمل مع الفِرَق.",
    heroBody1:
      "يتشارك يونود مع عدد محدود من الفِرَق كل عام — مؤسّسون، وفِرَق منتجات في مرحلة النمو، ومجموعات ابتكار مؤسسي — في مشاريع نودّ العيش معها لسنوات، لا لأشهر.",
    heroBody2: "لا نبيع ساعات عمل. نبيع برمجيات مُطلَقة.",
    ctaStartProject: "ابدأ مشروعًا",
    ctaBookCall: "احجز مكالمة ٣٠ دقيقة",
    capabilitiesLabel: "— قدراتنا",
    capabilities: [
      {
        index: "01",
        title: "هندسة المنتجات",
        tagline: "ويب، موبايل، وميزات معزّزة بالذكاء الاصطناعي. من المسودة إلى المتجر.",
        body: "عمل مخصّص على React Native وNext.js وSwift. نصمّم التفاعل، ونبني النظام، ونُطلقه. الأنسب حين يكون لديك رؤية منتج واضحة وتحتاج عمقًا هندسيًا لتنفيذها.",
      },
      {
        index: "02",
        title: "تطوير المنصّات",
        tagline: "منصات B2B متعددة المستأجرين، ببِنى قابلة للبقاء طويلًا.",
        body: "بناء من الصفر أو إنقاذ لمنصّات يُراد لها أن تدوم. Supabase وPostgreSQL ودوال طرفية وطوابير ورصد. نتّخذ قرارات لا تُضطر لمراجعتها بعد ١٨ شهرًا.",
      },
      {
        index: "03",
        title: "تكاملات السوق السعودي",
        tagline: "إيجار · أبشر · STC Pay · SEC · NWC · توكلنا · نفاذ.",
        body: "أطلقنا هذه التكاملات في الإنتاج. نعرف تفاصيلها — غرائب البيئة التجريبية، ومدد الاعتماد، وحالات حافّة لا تذكرها الوثائق. ذات قيمة كبيرة حين تدخل السوق السعودي من الخارج.",
      },
      {
        index: "04",
        title: "إطلاق منتج من الصفر",
        tagline: "تصميم وبناء وإطلاق منتج جديد خلال ٩٠ يومًا.",
        body: "للمؤسّسين وفِرَق الابتكار المؤسسي الذين يحتاجون التحرّك السريع دون إهدار سنة في أعباء الوكالات. نندمج في الفريق؛ أنت العميل؛ والهدف مستخدمون فعليون في اليوم التسعين.",
      },
    ],
    processLabel: "— كيف نعمل",
    process: [
      {
        index: "01",
        title: "مكالمة تعارف",
        body: "٣٠ دقيقة. مجانية. نطرح أسئلة جادّة عن هدفك.",
      },
      {
        index: "02",
        title: "وثيقة نطاق",
        body: "أسبوع واحد. وثيقة مكتوبة، ومعالم، وميزانية، ومخاطر.",
      },
      {
        index: "03",
        title: "تصميم وبناء",
        body: "على شكل سبرنتات. عرض كل جمعة. الملكية لك.",
      },
      {
        index: "04",
        title: "إطلاق وتشغيل",
        body: "نُطلق معًا. وإن أردت، نواصل التشغيل.",
      },
    ],
    stackLabel: "— البنية التقنية",
    antiLabel: "— ما لا نقوم به",
    anti: [
      { index: "01", body: "عمل وكالة بهوية مخفية أو دون علامة تجارية." },
      {
        index: "02",
        body: "تأجير مطوّر واحد شهريًا. نعمل كفريق أو لا نعمل إطلاقًا.",
      },
      { index: "03", body: "بناء على WordPress أو منصات Low-code أو No-code." },
      {
        index: "04",
        body: "أي شيء لا نستطيع تسليمه بمعيار عالٍ. نقول «لا» كثيرًا.",
      },
    ],
    finalCtaTitle: "لديك مشروع في بالك؟",
    finalCtaBody: "حدّثنا عنه. المكالمة الأولى دائمًا مجانية.",
  },
  /* /studio page ------------------------------------------------------ */
  studioPage: {
    metaTitle: "الاستوديو",
    metaDescription:
      "يونود استوديو تقني خاص يبني برمجيات استهلاكية ومؤسسية للمدى البعيد.",
    heroLabel: "— الاستوديو",
    heroTitle: "استوديو بُني للمدى البعيد.",
    heroBody:
      "يونود استوديو تقني خاص. نبني البرمجيات بالعناية نفسها التي نريدها في منتجاتنا — لأنّ نصفها فعلًا منتجاتنا.",
    howWeThinkLabel: "— كيف نفكّر",
    principles: [
      {
        index: "01",
        title: "نمتلك المنتج",
        body: "حين نبني شيئًا، نُشغّله. لا تسليم وكالة، ولا انصراف بعد الإطلاق. سواء كان منتجنا أو منتجك، نتعامل معه كأنّه يجب أن يبقى حيًّا بعد خمس سنوات.",
      },
      {
        index: "02",
        title: "مساحة صغيرة، صنعة عميقة",
        body: "أشياء قليلة تُصنع بعناية، خير من أشياء كثيرة تُنجز بسرعة. نرفض الأعمال التي تُجبرنا على التشتّت. حجم الفريق الصغير ميزة لا قيد.",
      },
      {
        index: "03",
        title: "المفيد قبل المُبهر",
        body: "البرمجيات تستحقّ مكانها بأن تُفتح غدًا. نُحسّن لأجل ذلك — لا لأجل الجِدّة، ولا لأجل ما يبدو جميلًا في عرض تقديمي. إن لم تُسدِّد الشاشة إيجارها، فلن تُطلَق.",
      },
    ],
    focusLabel: "— مجالات التركيز",
    focusIntro:
      "تتمحور أعمالنا حول ثلاث فئات نجد فيها مشكلات مثيرة باستمرار.",
    focus: {
      consumer: {
        label: "برمجيات استهلاكية",
        bodyBefore: "تطبيقات يفتحها الناس كل يوم. منتجنا الرئيسي هو ",
        bodyAfter: ".",
      },
      operational: {
        label: "منصات تشغيلية",
        body: "منصات B2B لقطاعات عاشت في جداول البيانات وقتًا طويلًا.",
      },
      ksa: {
        label: "بنية السوق السعودي",
        body: "تكاملات مصرفية وعقارية وتعليمية وهويّاتية خاصة بالمملكة.",
      },
    },
    workingLabel: "— العمل معنا",
    workingBodyBefore:
      "نقبل عددًا محدودًا من الارتباطات الخارجية كل عام. نُفضّل المؤسّسين والفِرَق الذين يملكون رؤية واضحة لما يبنونه، ويبحثون عن شريك يُنفّذ بمستوى أفضل فريق داخلي. إن كان هذا يشبهك، ",
    workingLink: "ابدأ مشروعًا",
    workingBodyAfter: "",
    companyLabel: "— الشركة",
    companyName: "شركة يونود",
    companyCity: "الرياض، المملكة العربية السعودية",
    companyCR: "سجل تجاري 7053929092",
    companyPrivate: "شركة خاصة",
    companyEst: "تأسّس ٢٠٢٦",
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
