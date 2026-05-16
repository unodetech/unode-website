/* ----------------------------------------------------------------------
 * ServicesContent — locale-driven /services page body.
 * -------------------------------------------------------------------- */

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import {
  ArrowRight,
  GhostCTA,
  MonoLabel,
  PrimaryCTA,
} from "@/components/ui";
import {
  getDictionary,
  STACK_FULL,
  type Locale,
} from "@/i18n/dictionaries";

export function ServicesContent({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).servicesPage;
  const isRtl = locale === "ar";
  const glowPositionClass = isRtl
    ? "-left-32 -top-32"
    : "-right-32 -top-32";

  return (
    <>
      <HtmlLangSync locale={locale} />
      <Navbar locale={locale} />
      <main className="flex-1">
        {/* -------- Hero -------- */}
        <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
          <div
            className="grid-canvas pointer-events-none absolute inset-0"
            aria-hidden="true"
          />
          <div
            className={`pointer-events-none absolute h-[520px] w-[520px] opacity-[0.55] ${glowPositionClass}`}
            style={{
              background:
                "radial-gradient(closest-side, rgba(255, 179, 0, 0.18) 0%, rgba(255, 179, 0, 0.06) 45%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-6 block">{t.heroLabel}</MonoLabel>
            <h1 className="hero-display max-w-4xl text-balance text-start text-4xl font-medium text-[var(--color-fg)] md:text-6xl">
              {t.heroTitle}
            </h1>
            <div className="mt-10 max-w-xl space-y-5 text-pretty text-start text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
              <p>{t.heroBody1}</p>
              <p>{t.heroBody2}</p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <PrimaryCTA href="mailto:info@unode.tech">
                {t.ctaStartProject}
                <ArrowRight locale={locale} />
              </PrimaryCTA>
              <GhostCTA href="https://cal.com/unode">{t.ctaBookCall}</GhostCTA>
            </div>
          </div>
        </section>

        {/* -------- Capabilities -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-10 block">{t.capabilitiesLabel}</MonoLabel>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
              {t.capabilities.map((c) => (
                <li
                  key={c.index}
                  className="bg-[var(--color-surface)] p-8 md:p-10"
                >
                  <div className="flex items-center gap-3">
                    <MonoLabel>{c.index}</MonoLabel>
                    <span
                      className="h-px w-8 bg-[var(--color-line-strong)]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-6 text-start text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-start text-[14px] italic text-zinc-500">
                    {c.tagline}
                  </p>
                  <p className="mt-5 max-w-md text-start text-[15px] leading-relaxed text-zinc-600">
                    {c.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* -------- Process -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-10 block">{t.processLabel}</MonoLabel>
            <ol className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
              {t.process.map((p) => (
                <li
                  key={p.index}
                  className="flex flex-col bg-[var(--color-surface)] p-7 md:p-8"
                >
                  <MonoLabel>{p.index}</MonoLabel>
                  <h3 className="mt-6 text-start text-lg font-medium tracking-tight text-[var(--color-fg)] md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-start text-[14px] leading-relaxed text-zinc-600">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* -------- Stack -------- */}
        <section className="relative border-t border-black/10 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-8 block">{t.stackLabel}</MonoLabel>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-5 md:px-10">
              <div
                className="flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[12px] text-zinc-600"
                dir="ltr"
              >
                {STACK_FULL.map((s, i) => (
                  <span key={s} className="inline-flex items-center gap-4">
                    <span>{s}</span>
                    {i < STACK_FULL.length - 1 && (
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

        {/* -------- Anti-services -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-10 block">{t.antiLabel}</MonoLabel>
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {t.anti.map((a) => (
                <li
                  key={a.index}
                  className="grid grid-cols-[auto_1fr] gap-x-8 py-6 md:grid-cols-[64px_1fr] md:py-7"
                >
                  <MonoLabel className="pt-1">{a.index}</MonoLabel>
                  <p className="text-start text-[15px] leading-relaxed text-zinc-600 md:text-[16px]">
                    {a.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* -------- Final CTA -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
            <h2 className="text-balance text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              {t.finalCtaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-600 md:text-[16px]">
              {t.finalCtaBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryCTA href="mailto:info@unode.tech">
                {t.ctaStartProject}
                <ArrowRight locale={locale} />
              </PrimaryCTA>
              <GhostCTA href="https://cal.com/unode">{t.ctaBookCall}</GhostCTA>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
