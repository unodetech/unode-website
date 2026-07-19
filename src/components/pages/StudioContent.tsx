/* ----------------------------------------------------------------------
 * StudioContent — locale-driven /studio page body.
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
import { getDictionary, localizedHref, type Locale } from "@/i18n/dictionaries";

const BOOK_CALL_HREF =
  "mailto:info@unode.tech?subject=Booking%20a%20call%20with%20Unode";

export function StudioContent({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).studioPage;
  const isRtl = locale === "ar";
  const contactHref = localizedHref(locale, "/contact");
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
            <p className="mt-10 max-w-xl text-pretty text-start text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
              {t.heroBody}
            </p>
          </div>
        </section>

        {/* -------- How we think -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-10 block">{t.howWeThinkLabel}</MonoLabel>
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {t.principles.map((p) => (
                <li
                  key={p.index}
                  className="grid grid-cols-[auto_1fr] gap-x-8 py-8 md:grid-cols-[64px_1fr] md:py-10"
                >
                  <MonoLabel className="pt-1">{p.index}</MonoLabel>
                  <div>
                    <h3 className="text-start text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-start text-[15px] leading-relaxed text-zinc-600 md:text-[16px]">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* -------- Focus areas -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-10 block">{t.focusLabel}</MonoLabel>
            <p className="max-w-2xl text-start text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
              {t.focusIntro}
            </p>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
              <li className="flex flex-col bg-[var(--color-surface)] p-7 md:p-8">
                <h3 className="text-start text-lg font-medium tracking-tight text-[var(--color-fg)] md:text-xl">
                  {t.focus.consumer.label}
                </h3>
                <p className="mt-3 text-start text-[14px] leading-relaxed text-zinc-600 md:text-[15px]">
                  {t.focus.consumer.bodyBefore}
                  <a
                    href="https://amlakeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-fg)] underline decoration-zinc-300 underline-offset-4 transition hover:decoration-[var(--color-fg)]"
                  >
                    {isRtl ? "أملاكي" : "Amlakey"}
                  </a>
                  {t.focus.consumer.bodyAfter}
                </p>
              </li>
              <li className="flex flex-col bg-[var(--color-surface)] p-7 md:p-8">
                <h3 className="text-start text-lg font-medium tracking-tight text-[var(--color-fg)] md:text-xl">
                  {t.focus.operational.label}
                </h3>
                <p className="mt-3 text-start text-[14px] leading-relaxed text-zinc-600 md:text-[15px]">
                  {t.focus.operational.body}
                </p>
              </li>
              <li className="flex flex-col bg-[var(--color-surface)] p-7 md:p-8">
                <h3 className="text-start text-lg font-medium tracking-tight text-[var(--color-fg)] md:text-xl">
                  {t.focus.ksa.label}
                </h3>
                <p className="mt-3 text-start text-[14px] leading-relaxed text-zinc-600 md:text-[15px]">
                  {t.focus.ksa.body}
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* -------- Working with us -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-10 block">{t.workingLabel}</MonoLabel>
            <p className="max-w-2xl text-start text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
              {t.workingBodyBefore}
              <a
                href={contactHref}
                className="link-arrow text-[var(--color-fg)] underline decoration-zinc-300 underline-offset-4 transition hover:decoration-[var(--color-fg)]"
              >
                {t.workingLink} {isRtl ? "←" : "→"}
              </a>
              {t.workingBodyAfter}
            </p>
          </div>
        </section>

        {/* -------- Company -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-10 block">{t.companyLabel}</MonoLabel>
            <div className="grid gap-10 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:grid-cols-2 md:p-10">
              <div className="space-y-3 text-start text-[15px] text-zinc-600">
                <p className="text-[16px] font-medium text-[var(--color-fg)]">
                  {t.companyName}
                </p>
                <p>{t.companyCity}</p>
                <p className="font-mono text-[13px] text-zinc-500">
                  {t.companyCR}
                </p>
              </div>
              <div className="space-y-3 text-start text-[15px] text-zinc-600 md:text-end">
                <p className="text-[16px] font-medium text-[var(--color-fg)]">
                  {t.companyPrivate}
                </p>
                {t.companyEst ? <p>{t.companyEst}</p> : null}
                <p className="font-mono text-[13px] text-zinc-500">
                  {t.companyDuns}
                </p>
              </div>
            </div>
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
              <PrimaryCTA href={contactHref}>
                {getDictionary(locale).servicesPage.ctaStartProject}
                <ArrowRight locale={locale} />
              </PrimaryCTA>
              <GhostCTA href={BOOK_CALL_HREF}>
                {getDictionary(locale).servicesPage.ctaBookCall}
              </GhostCTA>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
