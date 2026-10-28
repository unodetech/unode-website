/* ----------------------------------------------------------------------
 * i18n dictionaries — single source of truth for all copy on the site.
 * Add a key here first, then reference it from a page or component.
 *
 * Conventions:
 *   - Store and platform names (App Store, Google Play, iOS, etc.) stay
 *     in Latin script in both locales.
 *   - Western digits (0–9) throughout — modern Saudi B2B convention;
 *     Eastern Arabic numerals read as classical / religious for the
 *     target tech audience.
 *   - Arrows: rendered locale-aware in <ArrowRight /> based on a flag.
 * -------------------------------------------------------------------- */

export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];

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
      name: "Your Property Manager",
      tagline: "Property management for landlords",
      description:
        "An iOS, Android, and web app that turns rent collection, utility tracking, and reporting into a single calm workflow. Built for the Saudi market, on the Hijri calendar, in Arabic and English.",
      primaryLabel: "amlakeyapp.com",
      appStore: "App Store",
      googlePlay: "Google Play",
      x: "X",
      instagram: "Instagram",
      previewAlt:
        "The Your Property Manager dashboard on iPhone, showing monthly rent collection and occupancy at a glance",
    },
    masarQiyas: {
      name: "Masar Qiyas",
      tagline: "Exam prep for Saudi standardized tests",
      description:
        "A focused practice platform for GAT (Qudurat) and SAAT (Tahsili), on iOS and the web. Real questions, progress tracking, and adaptive study plans that meet students where they are.",
      primaryLabel: "masarqiyas.com",
      appStore: "App Store",
      previewAlt:
        "Masar Qiyas home screen on iPhone with the day's challenge, a quick test, and the exam countdown",
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
        body: "Business platforms and subscription products that grow with your customers.",
      },
      {
        index: "03",
        title: "Built for the Saudi market",
        body: "Arabic-first products, on the Hijri calendar, with the payment methods Saudi customers use.",
      },
      {
        index: "04",
        title: "New product launches",
        body: "Design, build, and launch a new product in 90 days.",
      },
    ],
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
    amlakey: "Your Property Manager",
    masarQiyas: "Masar Qiyas",
  },
  /* /services page ---------------------------------------------------- */
  servicesPage: {
    metaTitle: "Services",
    metaDescription:
      "Product engineering, platform development, Saudi-market products, and new product launches. Built for teams that need it done right.",
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
        body: "Custom apps for iPhone, Android, and the web. We design the experience, build the product, and launch it. Best fit when you have a clear product vision and need a team that can deliver it.",
      },
      {
        index: "02",
        title: "Platform development",
        tagline: "Business platforms and subscription products that grow with your customers.",
        body: "New platforms, or rescuing ones that are struggling. Reliable, secure, and ready to grow — built on decisions you won’t have to revisit in 18 months.",
      },
      {
        index: "03",
        title: "Built for the Saudi market",
        tagline: "Arabic-first, on the Hijri calendar, with the payment methods Saudi customers use.",
        body: "We build and run our own products for Saudi customers, so we know what the market expects: Arabic and right-to-left done properly, the Hijri calendar, and payment by mada and Apple Pay. Worth its weight when you’re entering the Saudi market from elsewhere.",
      },
      {
        index: "04",
        title: "New product launches",
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
        body: "A demo of progress every week. You own the work.",
      },
      {
        index: "04",
        title: "Launch + operate",
        body: "We ship together. If you want, we keep operating it.",
      },
    ],
    antiLabel: "— What we don’t do",
    anti: [
      { index: "01", body: "White-label or unbranded agency work." },
      {
        index: "02",
        body: "Renting out individual developers by the month. We work as a full team or not at all.",
      },
      { index: "03", body: "Template websites or quick off-the-shelf builds." },
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
        body: "Business platforms for industries that have run on spreadsheets for too long.",
      },
      ksa: {
        label: "Saudi market products",
        body: "Real estate, education, and everyday services, built around how people in Saudi Arabia actually work.",
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
      { value: "0→1 launch", label: "New product launch" },
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
      visitLabel: "Visit site",
      finalCtaTitle: "Have a project in mind?",
      finalCtaBody: "Tell us about it. The first call is always free.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Book a 30-min call",
    },
    amlakey: {
      metaTitle: "Your Property Manager — Case study",
      metaDescription:
        "Your Property Manager: an app for Saudi landlords on iPhone, Android, and the web — rent, utility bills, contracts, and reports in one place.",
      name: "Your Property Manager",
      positioning:
        "The calm way for Saudi landlords to run rent, utilities, and reporting — in one place.",
      platforms: ["iOS", "Android", "Web"],
      website: { label: "amlakeyapp.com", url: "https://amlakeyapp.com" },
      appStore: {
        label: "App Store",
        url: "https://apps.apple.com/app/id6771771954",
      },
      googlePlay: {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.unode.amlakey",
      },
      x: { label: "X", url: "https://x.com/amlakeyapp" },
      instagram: {
        label: "Instagram",
        url: "https://www.instagram.com/amlakeyapp/",
      },
      problem:
        "Independent landlords in Saudi Arabia run their properties out of notebooks, chat threads, and a dozen browser tabs — one for the rent ledger, one for each utility portal, another for the lease paperwork. Nothing talks to anything else, so slipped rent, unpaid bills, and expiring contracts are easy to miss. Your Property Manager replaces that scramble with a single place that quietly keeps track.",
      features: [
        {
          title: "Rent at a glance",
          body: "Every unit, lease, and payment in one ledger — on the Hijri calendar landlords actually use — with clear views of who has paid and who is overdue.",
        },
        {
          title: "Utilities, per property",
          body: "Electricity and water bills are kept against each property, so everything owed is in one place.",
        },
        {
          title: "Tenant requests, organised",
          body: "Maintenance and other requests from tenants land in one list with a clear status, so nothing gets lost in a chat thread.",
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
        "The Your Property Manager dashboard with the month's expected and collected rent, collection rate, net income, and occupancy",
        "The expenses screen with the month's electricity, water, maintenance, and cleaning bills broken down",
        "The properties list with annual rent totals and each building's units at a glance",
        "Tenant communication requests, with a WhatsApp message from a tenant and maintenance statuses",
      ],
    },
    masarQiyas: {
      metaTitle: "Masar Qiyas — Case study",
      metaDescription:
        "How we built Masar Qiyas: an iOS and web practice platform for Saudi standardized exams (GAT / Qudurat and SAAT / Tahsili) built on real, verified questions.",
      name: "Masar Qiyas",
      positioning:
        "Exam prep for Saudi standardized tests — real questions, honest progress.",
      platforms: ["iOS", "Web"],
      website: { label: "masarqiyas.com", url: "https://masarqiyas.com" },
      appStore: {
        label: "App Store",
        url: "https://apps.apple.com/sa/app/id6772091902",
      },
      googlePlay: null,
      x: null,
      instagram: null,
      problem:
        "Students preparing for the GAT (Qudurat) and SAAT (Tahsili) drill on scattered PDFs and question dumps of unknown provenance, with no reliable way to know how ready they actually are. Quality is inconsistent and progress is invisible. Masar Qiyas is built around real, verified questions and a study loop that shows students exactly where they stand.",
      features: [
        {
          title: "Real questions, verified",
          body: "A practice bank drawn from genuine exam material and checked for accuracy — not machine-generated filler.",
        },
        {
          title: "Progress you can trust",
          body: "Section-level tracking that reflects real readiness for each exam, from Qudurat's Quantitative and Verbal sections to Tahsili's subjects, so study time goes where it counts.",
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
      screenshotAlts: [
        "Masar Qiyas home screen with the day's challenge, a quick test, and the exam countdown",
        "A verbal-analogy practice question answered correctly, with its explanation and a badge showing it appeared in past exams",
        "A ratios lesson teaching the concept with labeled bar figures",
      ],
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
    label: "استوديو يونود",
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
      name: "مدير الأملاك",
      tagline: "تطبيق إدارة العقارات للمُلّاك",
      description:
        "تطبيق متوفّر على iOS وAndroid والويب. يجمع متابعة الإيجار والمتأخرات، وتسجيل الفواتير، والتقارير في تجربة واحدة منظّمة. مُصمَّم للسوق السعودي، بالتقويم الهجري، وبالعربية والإنجليزية.",
      primaryLabel: "amlakeyapp.com",
      appStore: "App Store",
      googlePlay: "Google Play",
      x: "X",
      instagram: "Instagram",
      previewAlt:
        "لوحة تحكم مدير الأملاك على iPhone تعرض تحصيل الإيجار الشهري ونسبة الإشغال في لمحة",
    },
    masarQiyas: {
      name: "مسار قياس",
      tagline: "تدريب لاختبارات القدرات والتحصيلي",
      description:
        "منصة تدريب مُركّزة على اختباري القدرات والتحصيلي، متوفّرة على iOS والويب. أسئلة فعلية، ومتابعة لمستوى التقدّم، وخطط دراسية تتكيّف مع كل طالب.",
      primaryLabel: "masarqiyas.com",
      appStore: "App Store",
      previewAlt:
        "الشاشة الرئيسية لمسار قياس على iPhone تعرض تحدي اليوم والاختبار السريع والعد التنازلي للاختبار",
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
        body: "منصات أعمال ومنتجات اشتراك تنمو مع عملائك.",
      },
      {
        index: "03",
        title: "مصمَّم للسوق السعودي",
        body: "منتجات عربية أولًا، بالتقويم الهجري، وبوسائل الدفع التي يستخدمها العميل السعودي.",
      },
      {
        index: "04",
        title: "إطلاق المنتجات الجديدة",
        body: "تصميم، وبناء، وإطلاق منتج جديد خلال 90 يومًا.",
      },
    ],
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
        body: "كل مشروع يحظى بكامل الاهتمام. ننفّذه بعناية من البداية إلى النهاية.",
      },
      {
        tag: "03",
        title: "المفيد قبل المُبهر",
        body: "البرمجيات الجيدة هي التي يفتحها المستخدم غدًا، وبعد غد. وهذا ما نعمل لأجله، لا الإبهار.",
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
    ctaSecondary: "احجز مكالمة مدتها 30 دقيقة",
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
    amlakey: "مدير الأملاك",
    masarQiyas: "مسار قياس",
  },
  /* /services page ---------------------------------------------------- */
  servicesPage: {
    metaTitle: "الخدمات",
    metaDescription:
      "هندسة المنتجات، وتطوير المنصّات، ومنتجات للسوق السعودي، وإطلاق المنتجات الجديدة. للفِرَق التي تحتاج إلى تنفيذ متقن.",
    heroLabel: "— الخدمات",
    heroTitle: "كيف نعمل مع الفِرَق الطموحة.",
    heroBody1:
      "يونود يعمل مع مؤسّسي الشركات الناشئة، وفِرَق المنتجات في مرحلة النمو، وأقسام الابتكار في الشركات الكبرى — لبناء برمجيات تحلّ مشكلات حقيقية، وتُصمَّم لتدوم.",
    heroBody2: "لا نبيع ساعات. نبيع منتجات تعمل.",
    ctaStartProject: "ابدأ مشروعك",
    ctaBookCall: "احجز مكالمة مدتها 30 دقيقة",
    capabilitiesLabel: "— قدراتنا",
    capabilities: [
      {
        index: "01",
        title: "هندسة المنتجات",
        tagline: "ويب، وتطبيقات الجوّال، وميزات بالذكاء الاصطناعي. من الفكرة الأولى إلى متجر التطبيقات.",
        body: "تطبيقات مخصّصة لـ iPhone وAndroid والويب. نُصمّم التجربة، ونبني المنتج، ونُطلقه. مناسب حين تكون لديك رؤية واضحة للمنتج وتحتاج إلى فريق قادر على تنفيذها.",
      },
      {
        index: "02",
        title: "تطوير المنصّات",
        tagline: "منصات أعمال ومنتجات اشتراك تنمو مع عملائك.",
        body: "نبني منصّات جديدة، أو نُنقذ منصّات قائمة تواجه صعوبات. موثوقة وآمنة وجاهزة للنمو — بقرارات لن تحتاج إلى مراجعتها بعد 18 شهرًا.",
      },
      {
        index: "03",
        title: "مصمَّم للسوق السعودي",
        tagline: "عربية أولًا، بالتقويم الهجري، وبوسائل الدفع التي يستخدمها العميل السعودي.",
        body: "نبني منتجاتنا الخاصة لعملاء في السعودية ونُشغّلها بأنفسنا، فنعرف ما يتوقّعه السوق: واجهات عربية متقنة من اليمين إلى اليسار، والتقويم الهجري، والدفع عبر مدى وApple Pay. وتتضاعف قيمة هذه الخبرة حين تدخل السوق السعودي من خارج المملكة.",
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
        body: "عرض أسبوعي لما أُنجز. الملكية الكاملة لك.",
      },
      {
        index: "04",
        title: "إطلاق وتشغيل",
        body: "نُطلق المنتج معًا. وإن رغبت، نواصل تشغيله بعد الإطلاق.",
      },
    ],
    antiLabel: "— ما لا نقوم به",
    anti: [
      { index: "01", body: "أعمال تُسلَّم بعلامة جهة أخرى أو دون ذكر اسمنا." },
      {
        index: "02",
        body: "تأجير مطوّر فردي بالشهر. نقدّم خدماتنا كفريق متكامل، أو لا نقدّمها.",
      },
      { index: "03", body: "المواقع المبنية على قوالب جاهزة، أو على منصّات البناء دون برمجة." },
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
        body: "كل مشروع يحظى بكامل الاهتمام من فريقٍ يهتمّ به فعلًا. ننفّذه بالعناية نفسها من البداية إلى النهاية — من التصميم حتى الإطلاق.",
      },
      {
        index: "03",
        title: "المفيد قبل المُبهر",
        body: "البرمجيات الجيدة هي التي يفتحها المستخدم غدًا، وبعد غد. وهذا ما نعمل لأجله — لا الإبهار، ولا ما يبدو جميلًا في عرض تقديمي. إن لم تُثبت الشاشة فائدتها، فلن نُطلقها.",
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
        body: "منصات أعمال لقطاعات اعتمدت على جداول البيانات لوقت طويل.",
      },
      ksa: {
        label: "منتجات للسوق السعودي",
        body: "العقار، والتعليم، والخدمات اليومية — مبنية على طريقة عمل الناس في السعودية فعلًا.",
      },
    },
    workingLabel: "— العمل معنا",
    workingBodyBefore:
      "نعمل مع مؤسّسي الشركات والفِرَق الذين يملكون رؤية واضحة لما يبنونه، ويبحثون عن شريك يُنفّذ بمستوى أفضل فريق داخلي. إن وجدت نفسك في هذا الوصف، ",
    workingLink: "فابدأ مشروعك معنا",
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
    altLabel: "— أو تواصل معنا مباشرة",
  },
  /* Case studies — /work/[slug] --------------------------------------- */
  caseStudy: {
    common: {
      backLabel: "كل الأعمال",
      liveLabel: "نشط",
      problemLabel: "— المشكلة",
      buildLabel: "— ما بنيناه",
      visitLabel: "زيارة الموقع",
      finalCtaTitle: "لديك مشروع في بالك؟",
      finalCtaBody: "حدّثنا عنه. المكالمة الأولى دائمًا مجانية.",
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "احجز مكالمة مدتها 30 دقيقة",
    },
    amlakey: {
      metaTitle: "مدير الأملاك — دراسة حالة",
      metaDescription:
        "مدير الأملاك: تطبيق لإدارة العقارات للمُلّاك في السعودية على iPhone وAndroid والويب — الإيجار، وفواتير الخدمات، والعقود، والتقارير في مكان واحد.",
      name: "مدير الأملاك",
      positioning:
        "الطريقة الهادئة لإدارة الإيجار والفواتير والتقارير — في مكان واحد، للمُلّاك في السعودية.",
      platforms: ["iOS", "Android", "الويب"],
      website: { label: "amlakeyapp.com", url: "https://amlakeyapp.com" },
      appStore: {
        label: "App Store",
        url: "https://apps.apple.com/app/id6771771954",
      },
      googlePlay: {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.unode.amlakey",
      },
      x: { label: "X", url: "https://x.com/amlakeyapp" },
      instagram: {
        label: "Instagram",
        url: "https://www.instagram.com/amlakeyapp/",
      },
      problem:
        "يُدير كثير من المُلّاك في السعودية عقاراتهم عبر الدفاتر، ومحادثات الرسائل، وعشرات النوافذ في المتصفّح — واحدة لسجلّ الإيجار، وأخرى لكل بوّابة خدمات، وثالثة لعقود الإيجار. لا شيء منها متّصل بالآخر، فيسهل أن تفوت دفعة إيجار، أو فاتورة غير مسدّدة، أو عقد على وشك الانتهاء. جاء مدير الأملاك ليستبدل هذه الفوضى بمكان واحد يتابع كل ذلك بهدوء.",
      features: [
        {
          title: "الإيجار في لمحة",
          body: "كل وحدة وعقد ودفعة في سجلّ واحد — بالتقويم الهجري الذي يستخدمه المُلّاك فعلًا — مع عرض واضح لمن سدّد ومن تأخّر.",
        },
        {
          title: "فواتير كل عقار في مكانها",
          body: "فواتير الكهرباء والماء محفوظة لكل عقار، فتجد كل المستحقات في مكان واحد.",
        },
        {
          title: "طلبات المستأجرين منظّمة",
          body: "طلبات الصيانة وغيرها من المستأجرين تصل في قائمة واحدة بحالة واضحة، فلا يضيع شيء بين محادثات الرسائل.",
        },
        {
          title: "تقارير بلمسة",
          body: "كشوف المُلّاك وتقارير الدخل تُنشأ عند الطلب — تلك الأوراق التي كانت تعني أمسيةً كاملة مع جدول بيانات.",
        },
        {
          title: "هدوءٌ بالتصميم",
          body: "تنبيهات في وقتها للإيجار المستحق والعقود التي تقترب من الانتهاء، في واجهة هادئة تعمل بالعربية والإنجليزية بالكفاءة نفسها، ومن اليمين إلى اليسار.",
        },
      ],
      screenshotAlts: [
        "لوحة تحكم مدير الأملاك تعرض الإيجارات المتوقعة والمحصّلة ونسبة التحصيل وصافي الدخل ونسبة الإشغال",
        "شاشة المصاريف مع فواتير الكهرباء والماء والصيانة والنظافة مفصّلة للشهر",
        "قائمة العقارات مع إجمالي الإيجار السنوي ووحدات كل عقار في لمحة",
        "طلبات تواصل المستأجرين مع رسالة واتساب من مستأجر وحالات طلبات الصيانة",
      ],
    },
    masarQiyas: {
      metaTitle: "مسار قياس — دراسة حالة",
      metaDescription:
        "كيف بنينا مسار قياس: منصة تدريب على iOS والويب لاختبارات القدرات والتحصيلي، مبنية على أسئلة حقيقية موثّقة.",
      name: "مسار قياس",
      positioning:
        "تدريب لاختبارات القدرات والتحصيلي — أسئلة حقيقية، وتقدّم صادق.",
      platforms: ["iOS", "الويب"],
      website: { label: "masarqiyas.com", url: "https://masarqiyas.com" },
      appStore: {
        label: "App Store",
        url: "https://apps.apple.com/sa/app/id6772091902",
      },
      googlePlay: null,
      x: null,
      instagram: null,
      problem:
        "يتدرّب الطلاب استعدادًا لاختباري القدرات والتحصيلي على ملفات ومذكّرات متفرّقة ومجموعات أسئلة مجهولة المصدر، دون طريقة موثوقة لمعرفة مدى جاهزيتهم فعلًا. الجودة متفاوتة، والتقدّم غير مرئي. بُني مسار قياس حول أسئلة حقيقية موثّقة، وطريقة مذاكرة تُظهر للطالب أين يقف بالضبط.",
      features: [
        {
          title: "أسئلة حقيقية وموثّقة",
          body: "بنك تدريب مبني على مادة اختبار فعلية ومُراجَع للدقّة — لا أسئلة مولّدة آليًا لملء الفراغ.",
        },
        {
          title: "تقدّم تثق به",
          body: "متابعة على مستوى الأقسام تعكس الجاهزية الحقيقية لكل اختبار، من القسمين الكمّي واللفظي في القدرات إلى مواد التحصيلي، ليذهب وقت المذاكرة إلى حيث يهمّ.",
        },
        {
          title: "خطط دراسية تتكيّف",
          body: "خطط تبدأ من مستوى الطالب الحالي وتتعدّل مع تحسّنه.",
        },
        {
          title: "عربية أولًا، وبدقّة الاختبار",
          body: "مبنية من اليمين إلى اليسار، بالرموز والاصطلاحات الرياضية التي تستخدمها الاختبارات السعودية فعلًا.",
        },
      ],
      screenshotAlts: [
        "الشاشة الرئيسية لمسار قياس مع تحدي اليوم والاختبار السريع والعد التنازلي للاختبار",
        "سؤال تناظر لفظي مع الإجابة الصحيحة وشرحها، ووسم يوضّح ظهوره في اختبارات سابقة",
        "درس النسب والتناسب يشرح المفهوم بأشكال توضيحية",
      ],
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
