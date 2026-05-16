import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, GhostCTA, MonoLabel, PrimaryCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product engineering, platform development, KSA market integrations, and 0→1 launches. A small number of engagements per year.",
};

const CAPABILITIES = [
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
    body: "Greenfield or rescue work on platforms intended to last. Supabase, PostgreSQL, edge functions, queues, observability. We make decisions you don't have to revisit in 18 months.",
  },
  {
    index: "03",
    title: "KSA market integrations",
    tagline: "Ejar · Absher · STCPay · SEC · NWC · Tawakkalna · Nafath.",
    body: "We've shipped these in production. We know the gotchas — sandbox quirks, certification timelines, edge cases the docs don't mention. Worth its weight when you're entering the Saudi market from elsewhere.",
  },
  {
    index: "04",
    title: "0→1 launches",
    tagline: "Design, build, and launch a new product in 90 days.",
    body: "For founders and corporate innovation teams who need to move fast without burning a year on agency overhead. We're embedded; you're the customer; the goal is users by day 90.",
  },
];

const PROCESS = [
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
  "Node.js",
  "Vercel",
  "Cloudflare",
  "Stripe",
  "Figma",
];

const ANTI = [
  { index: "01", body: "White-label or unbranded agency work." },
  {
    index: "02",
    body: "Pure staff augmentation (one dev rented by the month). We engage as a team or not at all.",
  },
  { index: "03", body: "WordPress, low-code, or no-code builds." },
  {
    index: "04",
    body: "Anything we can't ship to a high standard. We say no a lot.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="grid-canvas pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] opacity-[0.55]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 179, 0, 0.18) 0%, rgba(255, 179, 0, 0.06) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-6 block">— Services</MonoLabel>
        <h1 className="hero-display max-w-4xl text-balance text-4xl font-medium text-[var(--color-fg)] md:text-6xl">
          How we work with teams.
        </h1>
        <div className="mt-10 max-w-xl space-y-5 text-pretty text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
          <p>
            Unode partners with a small number of teams each year — founders,
            growth-stage product teams, and corporate innovation groups — on
            projects we want to live with for years, not months.
          </p>
          <p>We don&apos;t sell hours. We sell shipped software.</p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <PrimaryCTA href="mailto:info@unode.tech">
            Start a project
            <ArrowRight />
          </PrimaryCTA>
          <GhostCTA href="https://cal.com/unode">Book a 30-min call</GhostCTA>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="relative border-t border-black/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-10 block">— Capabilities</MonoLabel>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <li key={c.index} className="bg-[var(--color-surface)] p-8 md:p-10">
              <div className="flex items-center gap-3">
                <MonoLabel>{c.index}</MonoLabel>
                <span
                  className="h-px w-8 bg-[var(--color-line-strong)]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                {c.title}
              </h3>
              <p className="mt-2 text-[14px] italic text-zinc-500">
                {c.tagline}
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-600">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative border-t border-black/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-10 block">— How it works</MonoLabel>
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
          {PROCESS.map((p) => (
            <li
              key={p.index}
              className="flex flex-col bg-[var(--color-surface)] p-7 md:p-8"
            >
              <MonoLabel>{p.index}</MonoLabel>
              <h3 className="mt-6 text-lg font-medium tracking-tight text-[var(--color-fg)] md:text-xl">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="relative border-t border-black/10 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-8 block">— Stack</MonoLabel>
        <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-5 md:px-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[12px] text-zinc-600">
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
    </section>
  );
}

function AntiServices() {
  return (
    <section className="relative border-t border-black/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-10 block">— What we don&apos;t do</MonoLabel>
        <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {ANTI.map((a) => (
            <li
              key={a.index}
              className="grid grid-cols-[auto_1fr] gap-x-8 py-6 md:grid-cols-[64px_1fr] md:py-7"
            >
              <MonoLabel className="pt-1">{a.index}</MonoLabel>
              <p className="text-[15px] leading-relaxed text-zinc-600 md:text-[16px]">
                {a.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative border-t border-black/10 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
        <h2 className="text-balance text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-600 md:text-[16px]">
          Tell us about it. The first call is always free.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PrimaryCTA href="mailto:info@unode.tech">
            Start a project
            <ArrowRight />
          </PrimaryCTA>
          <GhostCTA href="https://cal.com/unode">Book a 30-min call</GhostCTA>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Capabilities />
        <Process />
        <Stack />
        <AntiServices />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
