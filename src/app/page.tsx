import Link from "next/link";

/* ----------------------------------------------------------------------
 * Product data — single source of truth for the showcase grid.
 * -------------------------------------------------------------------- */

type Product = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "soon";
  surfaces: string[];
  primary: { label: string; href: string };
  secondary?: { label: string; href: string }[];
  accentVar: string; // CSS var name from globals.css
};

const PRODUCTS: Product[] = [
  {
    index: "01",
    name: "Amlakey",
    tagline: "Property management for landlords",
    description:
      "An iOS, Android, and web app that turns rent collection, utility tracking, and reporting into a single calm workflow. Built for the Saudi market with Hijri calendar and Ejar integration.",
    status: "live",
    surfaces: ["iOS", "Android", "Web"],
    primary: { label: "amlakeyapp.com", href: "https://amlakeyapp.com" },
    secondary: [
      { label: "App Store", href: "https://apps.apple.com" },
      { label: "Google Play", href: "https://play.google.com" },
    ],
    accentVar: "--color-amlakey",
  },
  {
    index: "02",
    name: "Masar Qiyas",
    tagline: "Exam prep for Saudi standardized tests",
    description:
      "A focused practice platform for GAT (Qudurat) and SAAT (Tahsili). Real questions, progress tracking, and adaptive study plans that meet students where they are.",
    status: "live",
    surfaces: ["Web"],
    primary: { label: "masarqiyas.com", href: "https://masarqiyas.com" },
    accentVar: "--color-qiyas",
  },
];

/* ----------------------------------------------------------------------
 * Small primitives
 * -------------------------------------------------------------------- */

function MonoLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-mono-tag text-[var(--color-fg-subtle)] ${className}`}>
      {children}
    </span>
  );
}

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7h9m0 0L7.5 3M11.5 7l-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatusDot({ status }: { status: Product["status"] }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-2">
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 live-dot"
          aria-hidden="true"
        />
        <span className="font-mono-tag text-emerald-300/90">Live</span>
      </span>
    );
  }
  if (status === "beta") {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
        <span className="font-mono-tag text-amber-200/90">Beta</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" aria-hidden="true" />
      <span className="font-mono-tag text-zinc-400">In&nbsp;development</span>
    </span>
  );
}

/* ----------------------------------------------------------------------
 * Navigation
 * -------------------------------------------------------------------- */

function Navbar() {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-bg)]/70 backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[var(--color-fg)]"
          aria-label="Unode home"
        >
          <span
            className="grid h-6 w-6 place-items-center rounded-[7px] border border-[var(--color-line-strong)] bg-gradient-to-br from-white/10 to-transparent"
            aria-hidden="true"
          >
            <span className="text-[11px] font-semibold tracking-tight">u</span>
          </span>
          <span className="text-[15px] font-medium tracking-tight">unode</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[var(--color-fg-muted)] md:flex">
          <a
            href="#products"
            className="transition hover:text-[var(--color-fg)]"
          >
            Products
          </a>
          <a href="#studio" className="transition hover:text-[var(--color-fg)]">
            Studio
          </a>
          <a href="#contact" className="transition hover:text-[var(--color-fg)]">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full border border-[var(--color-line-strong)] bg-white/[0.04] px-3.5 py-1.5 text-[13px] text-[var(--color-fg)] transition hover:bg-white/[0.08] md:inline-flex"
        >
          Get in touch
          <ArrowRight />
        </a>
      </div>
    </nav>
  );
}

/* ----------------------------------------------------------------------
 * Hero — display type-forward, gridline canvas, no badges
 * -------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)] pb-24 pt-40 md:pb-32 md:pt-48">
      <div className="grid-canvas pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, var(--color-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rise rise-delay-1 mb-8 flex items-center gap-3">
          <MonoLabel>Unode Studio</MonoLabel>
          <span className="h-px w-12 bg-[var(--color-line-strong)]" aria-hidden="true" />
          <MonoLabel>Est. 2026</MonoLabel>
        </div>

        <h1 className="hero-display rise rise-delay-2 max-w-5xl text-balance text-[3.25rem] font-medium text-[var(--color-fg)] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          A technology studio
          <br />
          building software
          <br />
          <span className="text-[var(--color-fg-subtle)]">
            that people keep open.
          </span>
        </h1>

        <p className="rise rise-delay-3 mt-10 max-w-xl text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
          We design, build, and operate consumer software end-to-end. Two
          products live today — more in the workshop.
        </p>

        <div className="rise rise-delay-4 mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#products"
            className="link-arrow inline-flex items-center rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition hover:bg-white"
          >
            See the products
            <ArrowRight />
          </a>
          <a
            href="#studio"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition hover:bg-white/[0.04]"
          >
            About the studio
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * Products — two large tiles, index numbers, live links foregrounded
 * -------------------------------------------------------------------- */

function ProductTile({ product }: { product: Product }) {
  const host = product.primary.href.replace(/^https?:\/\//, "");

  return (
    <article
      className="tile-ring group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 transition-colors hover:bg-[var(--color-surface-2)] md:p-10"
    >
      {/* Per-product accent glow, very subtle */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-[0.08] blur-3xl transition-opacity duration-700 group-hover:opacity-[0.16]"
        style={{ background: `var(${product.accentVar})` }}
        aria-hidden="true"
      />

      <header className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <MonoLabel>{product.index}</MonoLabel>
          <span
            className="h-px w-8 bg-[var(--color-line-strong)]"
            aria-hidden="true"
          />
          <StatusDot status={product.status} />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          {product.surfaces.map((s) => (
            <span
              key={s}
              className="font-mono-tag rounded-full border border-[var(--color-line)] px-2.5 py-1 text-[var(--color-fg-muted)]"
            >
              {s}
            </span>
          ))}
        </div>
      </header>

      <div className="relative mt-10 flex-1">
        <h3 className="text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-4xl">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-fg-subtle)]">
          {product.tagline}
        </p>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          {product.description}
        </p>
      </div>

      <footer className="relative mt-10 border-t border-[var(--color-line)] pt-6">
        <a
          href={product.primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow inline-flex items-center text-[15px] font-medium text-[var(--color-fg)] transition"
          style={{ color: `var(${product.accentVar})` }}
        >
          {host}
          <ArrowRight />
        </a>
        {product.secondary && product.secondary.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            {product.secondary.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[var(--color-fg-subtle)] transition hover:text-[var(--color-fg)]"
              >
                {s.label} →
              </a>
            ))}
          </div>
        )}
      </footer>
    </article>
  );
}

function Products() {
  return (
    <section
      id="products"
      className="relative border-b border-[var(--color-line)] py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <MonoLabel className="mb-5 block">— Products</MonoLabel>
            <h2 className="text-balance text-4xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              Built, shipped, and run
              <br />
              <span className="text-[var(--color-fg-subtle)]">
                by the same small team.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
            We don&apos;t freelance and we don&apos;t consult. Every product
            below is owned, operated, and improved week after week.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-7">
          {PRODUCTS.map((p) => (
            <ProductTile key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * Studio — what we make + how we make it
 * -------------------------------------------------------------------- */

function Studio() {
  const principles = [
    {
      tag: "01",
      title: "Own the product",
      body: "We build, ship, and operate. No agency work, no white-label, no advisory hours.",
    },
    {
      tag: "02",
      title: "Small surface, deep craft",
      body: "Two products in market, not twenty in a deck. Every screen is the work of someone who cares.",
    },
    {
      tag: "03",
      title: "Useful before clever",
      body: "Software earns its place by being opened tomorrow. We optimize for that, not for novelty.",
    },
  ];

  return (
    <section
      id="studio"
      className="relative border-b border-[var(--color-line)] py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <MonoLabel className="mb-5 block">— Studio</MonoLabel>
            <h2 className="text-balance text-4xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              A studio, not
              <br />
              a software shop.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              Unode is a privately held technology studio. We pick narrow
              problems, build the product we wish existed, and stay with it for
              years. The shape of the team stays small so the standard stays
              high.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-line)]">
              {[
                { k: "Products live", v: "2" },
                { k: "Founded", v: "2026" },
                { k: "Platforms", v: "iOS · Android · Web" },
                { k: "Team", v: "Small, on purpose" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="bg-[var(--color-surface)] p-5"
                >
                  <dt className="font-mono-tag text-[var(--color-fg-subtle)]">
                    {s.k}
                  </dt>
                  <dd className="mt-2 text-lg font-medium tracking-tight text-[var(--color-fg)]">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {principles.map((p) => (
                <li
                  key={p.tag}
                  className="grid grid-cols-[auto_1fr] gap-x-8 py-7 md:grid-cols-[64px_1fr] md:py-9"
                >
                  <MonoLabel className="pt-1">{p.tag}</MonoLabel>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * Contact
 * -------------------------------------------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] opacity-[0.14]"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 100%, var(--color-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <MonoLabel className="mb-5 block">— Contact</MonoLabel>
        <h2 className="max-w-3xl text-balance text-4xl font-medium tracking-tight text-[var(--color-fg)] md:text-6xl">
          Working on something
          <br />
          <span className="text-[var(--color-fg-subtle)]">
            we should know about?
          </span>
        </h2>
        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          We&apos;re not taking client work. But we read every note —
          collaborations, distribution, hiring conversations included.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 md:max-w-2xl">
          <a
            href="mailto:info@unode.tech"
            className="tile-ring group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition hover:bg-[var(--color-surface-2)]"
          >
            <MonoLabel>General</MonoLabel>
            <span className="mt-3 text-[15px] font-medium text-[var(--color-fg)] transition group-hover:text-[var(--color-accent)]">
              info@unode.tech
            </span>
          </a>
          <a
            href="mailto:support@unode.tech"
            className="tile-ring group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition hover:bg-[var(--color-surface-2)]"
          >
            <MonoLabel>Product support</MonoLabel>
            <span className="mt-3 text-[15px] font-medium text-[var(--color-fg)] transition group-hover:text-[var(--color-accent)]">
              support@unode.tech
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * Footer — CR retained in legal row, products + studio linkage
 * -------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                className="grid h-6 w-6 place-items-center rounded-[7px] border border-[var(--color-line-strong)] bg-gradient-to-br from-white/10 to-transparent"
                aria-hidden="true"
              >
                <span className="text-[11px] font-semibold tracking-tight text-[var(--color-fg)]">
                  u
                </span>
              </span>
              <span className="text-[15px] font-medium tracking-tight text-[var(--color-fg)]">
                unode
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
              A technology studio building consumer software. Privately held.
            </p>
          </div>

          <div className="md:col-span-7 md:grid md:grid-cols-3 md:gap-8">
            <div>
              <MonoLabel>Products</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <a
                    href="https://amlakeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)]"
                  >
                    Amlakey
                  </a>
                </li>
                <li>
                  <a
                    href="https://masarqiyas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)]"
                  >
                    Masar Qiyas
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <MonoLabel>Studio</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <a
                    href="#studio"
                    className="text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <MonoLabel>Direct</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <a
                    href="mailto:info@unode.tech"
                    className="text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)]"
                  >
                    info@unode.tech
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@unode.tech"
                    className="text-[var(--color-fg-muted)] transition hover:text-[var(--color-fg)]"
                  >
                    support@unode.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-[12px] text-[var(--color-fg-subtle)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Unode Company. All rights reserved.
          </p>
          <p className="font-mono-tag">
            Unode Company LLC · CR 7053929092
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------------
 * Page
 * -------------------------------------------------------------------- */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
