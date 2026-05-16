/* ----------------------------------------------------------------------
 * HomeContent — locale-driven home page body. Rendered by both
 * `src/app/page.tsx` (en) and `src/app/ar/page.tsx` (ar).
 *
 * All copy comes from the dictionary; layout / styles are identical
 * across locales except for directional details handled by `dir="rtl"`
 * on the Arabic layout wrapper and Tailwind logical utilities.
 * -------------------------------------------------------------------- */

import Link from "next/link";
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
  localizedHref,
  STACK,
  type Locale,
} from "@/i18n/dictionaries";

type ProductStatus = "live" | "beta" | "soon";

function StatusDot({
  status,
  liveLabel,
  betaLabel,
  soonLabel,
}: {
  status: ProductStatus;
  liveLabel: string;
  betaLabel: string;
  soonLabel: string;
}) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-2">
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 live-dot"
          aria-hidden="true"
        />
        <span className="font-mono-tag text-emerald-700">{liveLabel}</span>
      </span>
    );
  }
  if (status === "beta") {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
        <span className="font-mono-tag text-amber-700">{betaLabel}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" aria-hidden="true" />
      <span className="font-mono-tag text-zinc-500">{soonLabel}</span>
    </span>
  );
}

export function HomeContent({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";
  const homeBase = localizedHref(locale, "/");
  const contactHref = `${homeBase === "/" ? "" : homeBase}/#contact`;
  const workHref = `${homeBase === "/" ? "" : homeBase}/#work`;
  const servicesHref = localizedHref(locale, "/services");
  const studioHref = localizedHref(locale, "/studio");

  /* The ambient hero glow lives at the headline-start corner — top-right
   * in LTR, top-left in RTL. */
  const glowPositionClass = isRtl
    ? "-left-32 -top-32"
    : "-right-32 -top-32";

  return (
    <>
      <HtmlLangSync locale={locale} />
      <Navbar locale={locale} />
      <main className="flex-1">
        {/* -------- Hero -------- */}
        <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
          <div className="grid-canvas pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            className={`pointer-events-none absolute h-[520px] w-[520px] opacity-[0.55] ${glowPositionClass}`}
            style={{
              background:
                "radial-gradient(closest-side, rgba(255, 179, 0, 0.18) 0%, rgba(255, 179, 0, 0.06) 45%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 md:px-12">
            <div className="rise rise-delay-1 mb-10 flex items-center gap-3">
              <MonoLabel>{t.hero.label}</MonoLabel>
              <span
                className="h-px w-12 bg-[var(--color-line-strong)]"
                aria-hidden="true"
              />
              <MonoLabel>{t.hero.labelDate}</MonoLabel>
            </div>

            <h1 className={`hero-display rise rise-delay-2 max-w-5xl text-balance text-start font-medium text-[var(--color-fg)] ${isRtl ? "text-4xl leading-[1.15] md:text-6xl lg:text-7xl" : "text-5xl md:text-7xl lg:text-8xl"}`}>
              {t.hero.headlineA}
              <br />
              {t.hero.headlineB}
              <span className="text-zinc-400">
                {t.hero.headlineC}
                <br />
                {t.hero.headlineD}
              </span>
            </h1>

            <p className="rise rise-delay-3 mt-10 max-w-2xl text-pretty text-start text-lg leading-relaxed text-zinc-600 md:text-xl">
              {t.hero.sub}
            </p>

            <div className="rise rise-delay-4 mt-12 flex flex-wrap items-center gap-3">
              <PrimaryCTA href={contactHref}>
                {t.hero.ctaPrimary}
                <ArrowRight locale={locale} />
              </PrimaryCTA>
              <GhostCTA href={workHref}>{t.hero.ctaSecondary}</GhostCTA>
            </div>
          </div>
        </section>

        {/* -------- Work -------- */}
        <section
          id="work"
          className="relative border-t border-[var(--color-line)] py-24 md:py-32 lg:py-40"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <MonoLabel className="mb-5 block">{t.work.label}</MonoLabel>
                <h2 className="text-balance text-start text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
                  {t.work.titleA}
                  <br />
                  <span className="text-zinc-400">{t.work.titleB}</span>
                </h2>
              </div>
              <p className="max-w-sm text-start text-[15px] leading-relaxed text-zinc-600">
                {t.work.note}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-7">
              {/* Amlakey */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 transition-colors hover:border-[var(--color-line-strong)] md:p-10">
                <header className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <MonoLabel>01</MonoLabel>
                    <span
                      className="h-px w-8 bg-[var(--color-line-strong)]"
                      aria-hidden="true"
                    />
                    <StatusDot
                      status="live"
                      liveLabel={t.work.statusLive}
                      betaLabel={t.work.statusBeta}
                      soonLabel={t.work.statusSoon}
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    {["iOS", "Android", "Web"].map((s) => (
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
                  <h3 className="text-start text-2xl font-medium tracking-tight text-[var(--color-fg)] md:text-3xl">
                    {t.work.amlakey.name}
                  </h3>
                  <p className="mt-2 text-start text-sm text-zinc-500">
                    {t.work.amlakey.tagline}
                  </p>
                  <p className="mt-6 max-w-md text-start text-[15px] leading-relaxed text-zinc-600">
                    {t.work.amlakey.description}
                  </p>
                </div>

                <footer className="mt-10 border-t border-[var(--color-line)] pt-6">
                  <a
                    href="https://amlakeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow inline-flex items-center text-[15px] font-medium text-[var(--color-fg)] transition"
                  >
                    {t.work.amlakey.primaryLabel}
                    <ArrowRight locale={locale} />
                  </a>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-zinc-500 transition hover:text-[var(--color-fg)]"
                    >
                      {t.work.amlakey.appStore} {isRtl ? "←" : "→"}
                    </a>
                    <a
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-zinc-500 transition hover:text-[var(--color-fg)]"
                    >
                      {t.work.amlakey.googlePlay} {isRtl ? "←" : "→"}
                    </a>
                  </div>
                </footer>
              </article>

              {/* Masar Qiyas */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 transition-colors hover:border-[var(--color-line-strong)] md:p-10">
                <header className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <MonoLabel>02</MonoLabel>
                    <span
                      className="h-px w-8 bg-[var(--color-line-strong)]"
                      aria-hidden="true"
                    />
                    <StatusDot
                      status="live"
                      liveLabel={t.work.statusLive}
                      betaLabel={t.work.statusBeta}
                      soonLabel={t.work.statusSoon}
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-1.5">
                    {["Web"].map((s) => (
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
                  <h3 className="text-start text-2xl font-medium tracking-tight text-[var(--color-fg)] md:text-3xl">
                    {t.work.masarQiyas.name}
                  </h3>
                  <p className="mt-2 text-start text-sm text-zinc-500">
                    {t.work.masarQiyas.tagline}
                  </p>
                  <p className="mt-6 max-w-md text-start text-[15px] leading-relaxed text-zinc-600">
                    {t.work.masarQiyas.description}
                  </p>
                </div>

                <footer className="mt-10 border-t border-[var(--color-line)] pt-6">
                  <a
                    href="https://masarqiyas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow inline-flex items-center text-[15px] font-medium text-[var(--color-fg)] transition"
                  >
                    {t.work.masarQiyas.primaryLabel}
                    <ArrowRight locale={locale} />
                  </a>
                </footer>
              </article>
            </div>
          </div>
        </section>

        {/* -------- Services band -------- */}
        <section
          id="services"
          className="relative border-t border-[var(--color-line)] py-24 md:py-32 lg:py-40"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <MonoLabel className="mb-5 block">
                  {t.servicesHome.label}
                </MonoLabel>
                <h2 className="text-balance text-start text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
                  {t.servicesHome.titleA}
                  <br />
                  <span className="text-zinc-400">
                    {t.servicesHome.titleB}
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-start text-[15px] leading-relaxed text-zinc-600">
                {t.servicesHome.note}
              </p>
            </div>

            <ul className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
              {t.servicesHome.items.map((s) => (
                <li key={s.index} className="bg-[var(--color-surface)] p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <MonoLabel>{s.index}</MonoLabel>
                    <span
                      className="h-px w-8 bg-[var(--color-line-strong)]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-6 text-start text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-start text-[15px] leading-relaxed text-zinc-600">
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-5 md:px-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <MonoLabel className="text-zinc-500">
                  {t.servicesHome.stackLabel}
                </MonoLabel>
                <span
                  className="hidden h-px w-8 bg-[var(--color-line-strong)] md:inline-block"
                  aria-hidden="true"
                />
                <div
                  className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] text-zinc-600"
                  dir="ltr"
                >
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
              <PrimaryCTA href={contactHref}>
                {t.servicesHome.ctaPrimary}
                <ArrowRight locale={locale} />
              </PrimaryCTA>
              <Link
                href={servicesHref}
                className="link-arrow text-[14px] text-zinc-600 transition hover:text-[var(--color-fg)]"
              >
                {t.servicesHome.seeAll} {isRtl ? "←" : "→"}
              </Link>
            </div>
          </div>
        </section>

        {/* -------- Studio band -------- */}
        <section
          id="studio"
          className="relative border-t border-[var(--color-line)] py-24 md:py-32 lg:py-40"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid gap-16 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <MonoLabel className="mb-5 block">
                  {t.studioHome.label}
                </MonoLabel>
                <h2 className="text-balance text-start text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
                  {t.studioHome.titleA}
                  <br />
                  <span className="text-zinc-400">{t.studioHome.titleB}</span>
                </h2>
                <p className="mt-8 max-w-md text-start text-[15px] leading-relaxed text-zinc-600">
                  {t.studioHome.intro}
                </p>

                <Link
                  href={studioHref}
                  className="link-arrow mt-8 inline-flex text-[14px] text-zinc-600 transition hover:text-[var(--color-fg)]"
                >
                  {t.studioHome.readMore} {isRtl ? "←" : "→"}
                </Link>

                <p className="mt-10 font-mono text-[12px] text-zinc-400">
                  {t.studioHome.legalLine}
                </p>
              </div>

              <div className="md:col-span-7 md:ps-8">
                <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                  {t.studioHome.principles.map((p) => (
                    <li
                      key={p.tag}
                      className="grid grid-cols-[auto_1fr] gap-x-8 py-7 md:grid-cols-[64px_1fr] md:py-9"
                    >
                      <MonoLabel className="pt-1">{p.tag}</MonoLabel>
                      <div>
                        <h3 className="text-start text-xl font-medium tracking-tight text-[var(--color-fg)] md:text-2xl">
                          {p.title}
                        </h3>
                        <p className="mt-3 max-w-md text-start text-[15px] leading-relaxed text-zinc-600">
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

        {/* -------- Contact -------- */}
        <section
          id="contact"
          className="relative border-t border-[var(--color-line)] py-24 md:py-32 lg:py-40"
        >
          <div className="relative mx-auto max-w-7xl px-6 md:px-12">
            <MonoLabel className="mb-5 block">{t.contact.label}</MonoLabel>
            <h2 className="max-w-3xl text-balance text-start text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              {t.contact.titleA}
              <br />
              <span className="text-zinc-400">{t.contact.titleB}</span>
            </h2>
            <p className="mt-8 max-w-xl text-start text-[15px] leading-relaxed text-zinc-600 md:text-base">
              {t.contact.note}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <PrimaryCTA href="mailto:info@unode.tech">
                {t.contact.ctaPrimary}
                <ArrowRight locale={locale} />
              </PrimaryCTA>
              <GhostCTA href="https://cal.com/unode">
                {t.contact.ctaSecondary}
              </GhostCTA>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 md:max-w-2xl">
              <a
                href="mailto:info@unode.tech"
                className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-line-strong)]"
              >
                <MonoLabel>{t.contact.generalLabel}</MonoLabel>
                <span className="mt-3 text-start text-[15px] font-medium text-[var(--color-fg)]">
                  {t.contact.generalEmail}
                </span>
              </a>
              <a
                href="mailto:support@unode.tech"
                className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-line-strong)]"
              >
                <MonoLabel>{t.contact.supportLabel}</MonoLabel>
                <span className="mt-3 text-start text-[15px] font-medium text-[var(--color-fg)]">
                  {t.contact.supportEmail}
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
