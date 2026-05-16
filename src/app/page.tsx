import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  GhostCTA,
  MonoLabel,
  PrimaryCTA,
} from "@/components/ui";

/* ----------------------------------------------------------------------
 * Product data — single source of truth for the Work section.
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
  },
];

/* ----------------------------------------------------------------------
 * Services data
 * -------------------------------------------------------------------- */

const SERVICES = [
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
];

const STACK = [
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
];

/* ----------------------------------------------------------------------
 * Studio principles
 * -------------------------------------------------------------------- */

const PRINCIPLES = [
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
];

/* ----------------------------------------------------------------------
 * Status dot
 * -------------------------------------------------------------------- */

function StatusDot({ status }: { status: Product["status"] }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-2">
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 live-dot"
          aria-hidden="true"
        />
        <span className="font-mono-tag text-emerald-700">Live</span>
      </span>
    );
  }
  if (status === "beta") {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
        <span className="font-mono-tag text-amber-700">Beta</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" aria-hidden="true" />
      <span className="font-mono-tag text-zinc-500">In&nbsp;development</span>
    </span>
  );
}

/* ----------------------------------------------------------------------
 * Hero
 * -------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
      <div className="grid-canvas pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* Single subtle ambient gradient — upper-right corner only */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] opacity-[0.55]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 179, 0, 0.18) 0%, rgba(255, 179, 0, 0.06) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="rise rise-delay-1 mb-10 flex items-center gap-3">
          <MonoLabel>Unode Studio</MonoLabel>
          <span className="h-px w-12 bg-[var(--color-line-strong)]" aria-hidden="true" />
          <MonoLabel>Est. 2026</MonoLabel>
        </div>

        <h1 className="hero-display rise rise-delay-2 max-w-5xl text-balance text-5xl font-medium text-[var(--color-fg)] md:text-7xl lg:text-8xl">
          Software that ships,
          <br />
          scales, and{" "}
          <span className="text-zinc-400">
            outlives
            <br />
            the trend cycle.
          </span>
        </h1>

        <p className="rise rise-delay-3 mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-600 md:text-xl">
          Unode is a development partner for ambitious teams. We design, ship,
          and operate consumer and enterprise software end-to-end.
        </p>

        <div className="rise rise-delay-4 mt-12 flex flex-wrap items-center gap-3">
          <PrimaryCTA href="#contact">
            Start a project
            <ArrowRight />
          </PrimaryCTA>
          <GhostCTA href="#work">See our work</GhostCTA>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * Work — product tiles, no metrics, no fake proof
 * -------------------------------------------------------------------- */

function ProductTile({ product }: { product: Product }) {
  const host = product.primary.href.replace(/^https?:\/\//, "");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 transition-colors hover:border-[var(--color-line-strong)] md:p-10">
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <MonoLabel>{product.index}</MonoLabel>
          <span className="h-px w-8 bg-[var(--color-line-strong)]" aria-hidden="true" />
          <StatusDot status={product.status} />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          {product.surfaces.map((s) => (
            <span
              key={s}
              className="font-mono-tag rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 text-zinc-600"
            >
              {s}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-10 flex-1">
        <h3 className="text-2xl font-medium tracking-tight text-[var(--color-fg)] md:text-3xl">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-zinc-500">{product.tagline}</p>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-zinc-600">
          {product.description}
        </p>
      </div>

      <footer className="mt-10 border-t border-[var(--color-line)] pt-6">
        <a
          href={product.primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow inline-flex items-center text-[15px] font-medium text-[var(--color-fg)] transition"
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
                className="text-[13px] text-zinc-500 transition hover:text-[var(--color-fg)]"
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

function Work() {
  return (
    <section
      id="work"
      className="relative border-t border-[var(--color-line)] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <MonoLabel className="mb-5 block">— Work</MonoLabel>
            <h2 className="text-balance text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              Built, shipped, and run
              <br />
              <span className="text-zinc-400">by the same small team.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-zinc-600">
            Every product below is owned, operated, and improved week after
            week.
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
 * Services — condensed home section
 * -------------------------------------------------------------------- */

function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-[var(--color-line)] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <MonoLabel className="mb-5 block">— Services</MonoLabel>
            <h2 className="text-balance text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              How we work
              <br />
              <span className="text-zinc-400">with teams.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-zinc-600">
            A small number of engagements per year. We pick problems we want to
            live with for years, not months.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
          {SERVICES.map((s) => (
            <li
              key={s.index}
              className="bg-[var(--color-surface)] p-8 md:p-10"
            >
              <div className="flex items-center gap-3">
                <MonoLabel>{s.index}</MonoLabel>
                <span
                  className="h-px w-8 bg-[var(--color-line-strong)]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-600">
                {s.body}
              </p>
            </li>
          ))}
        </ul>

        {/* Stack strip — full-width horizontal mono row */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-5 md:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <MonoLabel className="text-zinc-500">Stack</MonoLabel>
            <span
              className="hidden h-px w-8 bg-[var(--color-line-strong)] md:inline-block"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] text-zinc-600">
              {STACK.map((s, i) => (
                <span key={s} className="inline-flex items-center gap-4">
                  <span>{s}</span>
                  {i < STACK.length - 1 && (
                    <span className="text-zinc-300" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
          <PrimaryCTA href="#contact">
            Discuss your project
            <ArrowRight />
          </PrimaryCTA>
          <Link
            href="/services"
            className="link-arrow text-[14px] text-zinc-600 transition hover:text-[var(--color-fg)]"
          >
            See all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
 * Studio — condensed home section
 * -------------------------------------------------------------------- */

function Studio() {
  return (
    <section
      id="studio"
      className="relative border-t border-[var(--color-line)] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <MonoLabel className="mb-5 block">— Studio</MonoLabel>
            <h2 className="text-balance text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              A studio built
              <br />
              <span className="text-zinc-400">for the long game.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-zinc-600">
              Unode is a privately held technology studio. We pick narrow
              problems and stay with them for years. We build our own products,
              and we partner with teams who want that same standard applied to
              theirs.
            </p>

            <Link
              href="/studio"
              className="link-arrow mt-8 inline-flex text-[14px] text-zinc-600 transition hover:text-[var(--color-fg)]"
            >
              Read more about the studio →
            </Link>

            <p className="mt-10 font-mono text-[12px] text-zinc-400">
              Unode Company LLC · CR 7053929092
            </p>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.tag}
                  className="grid grid-cols-[auto_1fr] gap-x-8 py-7 md:grid-cols-[64px_1fr] md:py-9"
                >
                  <MonoLabel className="pt-1">{p.tag}</MonoLabel>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-600">
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
    <section
      id="contact"
      className="relative border-t border-[var(--color-line)] py-24 md:py-32 lg:py-40"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <MonoLabel className="mb-5 block">— Contact</MonoLabel>
        <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
          Working on something
          <br />
          <span className="text-zinc-400">we should know about?</span>
        </h2>
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-zinc-600 md:text-base">
          Tell us about it. We read every note — partnerships, custom builds,
          hiring conversations, all of it.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <PrimaryCTA href="mailto:info@unode.tech">
            Start a project
            <ArrowRight />
          </PrimaryCTA>
          <GhostCTA href="https://cal.com/unode">Book a 30-min call</GhostCTA>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 md:max-w-2xl">
          <a
            href="mailto:info@unode.tech"
            className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-line-strong)]"
          >
            <MonoLabel>General</MonoLabel>
            <span className="mt-3 text-[15px] font-medium text-[var(--color-fg)]">
              info@unode.tech
            </span>
          </a>
          <a
            href="mailto:support@unode.tech"
            className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-line-strong)]"
          >
            <MonoLabel>Product support</MonoLabel>
            <span className="mt-3 text-[15px] font-medium text-[var(--color-fg)]">
              support@unode.tech
            </span>
          </a>
        </div>
      </div>
    </section>
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
        <Work />
        <Services />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
