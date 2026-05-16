import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, GhostCTA, MonoLabel, PrimaryCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Unode is a privately held technology studio building consumer and enterprise software for the long game.",
};

const PRINCIPLES = [
  {
    index: "01",
    title: "Own the product",
    body: "When we build something, we operate it. No agency hand-off, no walk-away. Whether it's our product or yours, we treat it like it has to be alive in five years.",
  },
  {
    index: "02",
    title: "Small surface, deep craft",
    body: "A few things, done with care, beat many things done quickly. We turn down work that would force us to spread thin. The size of the team is a feature, not a constraint.",
  },
  {
    index: "03",
    title: "Useful before clever",
    body: "Software earns its place by being opened tomorrow. We optimize for that — not for novelty, not for what looks good in a deck. If a screen doesn't pay rent, it doesn't ship.",
  },
];

const FOCUS = [
  {
    label: "Consumer software",
    body: (
      <>
        Apps people open every day. Our flagship is{" "}
        <a
          href="https://amlakeyapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-fg)] underline decoration-zinc-300 underline-offset-4 transition hover:decoration-[var(--color-fg)]"
        >
          Amlakey
        </a>
        .
      </>
    ),
  },
  {
    label: "Operational platforms",
    body: "B2B SaaS for industries that have lived in spreadsheets too long.",
  },
  {
    label: "Saudi market infrastructure",
    body: "Banking, real estate, education, and identity integrations specific to KSA.",
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
        <MonoLabel className="mb-6 block">— Studio</MonoLabel>
        <h1 className="hero-display max-w-4xl text-balance text-4xl font-medium text-[var(--color-fg)] md:text-6xl">
          A studio built for the long game.
        </h1>
        <p className="mt-10 max-w-xl text-pretty text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
          Unode is a privately held technology studio. We build software with
          the same care we&apos;d want applied to our own products — because
          half the time, it is our own products.
        </p>
      </div>
    </section>
  );
}

function HowWeThink() {
  return (
    <section className="relative border-t border-black/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-10 block">— How we think</MonoLabel>
        <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {PRINCIPLES.map((p) => (
            <li
              key={p.index}
              className="grid grid-cols-[auto_1fr] gap-x-8 py-8 md:grid-cols-[64px_1fr] md:py-10"
            >
              <MonoLabel className="pt-1">{p.index}</MonoLabel>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-600 md:text-[16px]">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FocusAreas() {
  return (
    <section className="relative border-t border-black/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-10 block">— Focus areas</MonoLabel>
        <p className="max-w-2xl text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
          Our work clusters around three categories where we keep finding
          interesting problems.
        </p>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
          {FOCUS.map((f) => (
            <li
              key={f.label}
              className="flex flex-col bg-[var(--color-surface)] p-7 md:p-8"
            >
              <h3 className="text-lg font-medium tracking-tight text-[var(--color-fg)] md:text-xl">
                {f.label}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-600 md:text-[15px]">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WorkingWithUs() {
  return (
    <section className="relative border-t border-black/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-10 block">— Working with us</MonoLabel>
        <p className="max-w-2xl text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
          We take a small number of external engagements each year. Our
          preference is for founders and teams who have a clear point of view
          about what they&apos;re building and want a partner who can execute
          at the level of the best in-house team. If that sounds like you,{" "}
          <a
            href="mailto:info@unode.tech"
            className="link-arrow text-[var(--color-fg)] underline decoration-zinc-300 underline-offset-4 transition hover:decoration-[var(--color-fg)]"
          >
            start a project →
          </a>
        </p>
      </div>
    </section>
  );
}

function Company() {
  return (
    <section className="relative border-t border-black/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MonoLabel className="mb-10 block">— Company</MonoLabel>
        <div className="grid gap-10 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:grid-cols-2 md:p-10">
          <div className="space-y-3 text-[15px] text-zinc-600">
            <p className="text-[16px] font-medium text-[var(--color-fg)]">
              Unode Company LLC
            </p>
            <p>Riyadh, Saudi Arabia</p>
            <p className="font-mono text-[13px] text-zinc-500">CR 7053929092</p>
          </div>
          <div className="space-y-3 text-[15px] text-zinc-600 md:text-right">
            <p className="text-[16px] font-medium text-[var(--color-fg)]">
              Privately held
            </p>
            <p>Est. 2026</p>
            <p className="font-mono text-[13px] text-zinc-500">
              D-U-N-S 986467763
            </p>
          </div>
        </div>
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

export default function StudioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowWeThink />
        <FocusAreas />
        <WorkingWithUs />
        <Company />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
