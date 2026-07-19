/* ----------------------------------------------------------------------
 * WorkCaseStudyContent — shared, locale-driven case-study page body.
 *
 * Rendered by /work/[slug] and its /ar mirror. All copy comes from
 * `dictionaries.caseStudy[key]`; screenshot file paths (locale-neutral)
 * live here, while their alt text (locale-specific) comes from the
 * dictionary and is zipped by index.
 * -------------------------------------------------------------------- */

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, GhostCTA, MonoLabel, PrimaryCTA } from "@/components/ui";
import { getDictionary, localizedHref, type Locale } from "@/i18n/dictionaries";

export type CaseStudySlug = "amlakey" | "masar-qiyas";

const BOOK_CALL_HREF =
  "mailto:info@unode.tech?subject=Booking%20a%20call%20with%20Unode";

/* Screenshot file paths per product (order matches dictionary alt text). */
const SCREENSHOTS: Record<CaseStudySlug, string[]> = {
  amlakey: [
    "/work/amlakey-dashboard.png",
    "/work/amlakey-properties.png",
    "/work/amlakey-tenants.png",
    "/work/amlakey-arabic.png",
  ],
  "masar-qiyas": [],
};

export function WorkCaseStudyContent({
  locale,
  slug,
}: {
  locale: Locale;
  slug: CaseStudySlug;
}) {
  const t = getDictionary(locale);
  const c = t.caseStudy.common;
  const cs = slug === "amlakey" ? t.caseStudy.amlakey : t.caseStudy.masarQiyas;
  const isRtl = locale === "ar";

  /* Normalize the `as const` tuple types to plain arrays for iteration. */
  const features = cs.features as ReadonlyArray<{
    title: string;
    body: string;
  }>;
  const platforms = cs.platforms as readonly string[];
  const stack = cs.stack as readonly string[];
  const alts = cs.screenshotAlts as readonly string[];
  const appStore = cs.appStore as { label: string; url: string } | null;

  const shots = SCREENSHOTS[slug];
  const heroShot = shots[0];
  const galleryShots = shots.slice(1);

  const homeBase = localizedHref(locale, "/");
  const workHref = `${homeBase === "/" ? "" : homeBase}/#work`;
  const contactHref = localizedHref(locale, "/contact");

  const glowPositionClass = isRtl ? "-left-32 -top-32" : "-right-32 -top-32";

  return (
    <>
      <HtmlLangSync locale={locale} />
      <Navbar locale={locale} />
      <main className="flex-1">
        {/* -------- Hero -------- */}
        <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
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
            <Link
              href={workHref}
              className="link-arrow inline-flex items-center text-[13px] text-zinc-500 transition hover:text-[var(--color-fg)]"
            >
              <span aria-hidden="true">{isRtl ? "→" : "←"}</span>
              {c.backLabel}
            </Link>

            <div className="mt-8 grid items-center gap-12 md:grid-cols-12 md:gap-10">
              <div className={heroShot ? "md:col-span-7" : "md:col-span-12"}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-500 live-dot"
                      aria-hidden="true"
                    />
                    <span className="font-mono-tag text-emerald-700">
                      {c.liveLabel}
                    </span>
                  </span>
                  <span
                    className="h-px w-8 bg-[var(--color-line-strong)]"
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-center gap-1.5">
                    {platforms.map((p) => (
                      <span
                        key={p}
                        className="font-mono-tag rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 text-zinc-600"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <h1 className="hero-display mt-6 text-balance text-start text-4xl font-medium text-[var(--color-fg)] md:text-6xl">
                  {cs.name}
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-start text-[17px] leading-relaxed text-zinc-600 md:text-[19px]">
                  {cs.positioning}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={cs.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow inline-flex items-center text-[15px] font-medium text-[var(--color-fg)] transition"
                  >
                    {cs.website.label}
                    <ArrowRight locale={locale} />
                  </a>
                  {appStore ? (
                    <a
                      href={appStore.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-zinc-500 transition hover:text-[var(--color-fg)]"
                    >
                      {appStore.label} {isRtl ? "←" : "→"}
                    </a>
                  ) : null}
                </div>
              </div>

              {heroShot ? (
                <div className="md:col-span-5">
                  <div className="relative flex justify-center rounded-3xl border border-[var(--color-line)] bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] p-6 md:p-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={heroShot}
                      alt={alts[0]}
                      width={277}
                      height={600}
                      className="h-[380px] w-auto max-w-full rounded-[26px] shadow-xl ring-1 ring-black/10 md:h-[440px]"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* -------- The problem -------- */}
        <section className="relative border-t border-black/10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="grid gap-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <MonoLabel className="block">{c.problemLabel}</MonoLabel>
              </div>
              <div className="md:col-span-8">
                <p className="max-w-2xl text-start text-[17px] leading-relaxed text-zinc-700 md:text-[19px]">
                  {cs.problem}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -------- What we built -------- */}
        <section className="relative border-t border-black/10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-10 block">{c.buildLabel}</MonoLabel>

            <ul className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <li className="h-full bg-[var(--color-surface)] p-7 md:p-9">
                    <MonoLabel>
                      {String(i + 1).padStart(2, "0")}
                    </MonoLabel>
                    <h3 className="mt-5 text-start text-lg font-medium tracking-tight text-[var(--color-fg)] md:text-xl">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-start text-[15px] leading-relaxed text-zinc-600">
                      {f.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>

            {galleryShots.length > 0 ? (
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                {galleryShots.map((src, i) => (
                  <Reveal key={src} delay={i * 80}>
                    <div className="flex justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-2)] p-5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={alts[i + 1] ?? ""}
                        width={277}
                        height={600}
                        loading="lazy"
                        className="block h-auto w-full max-w-[220px] rounded-xl shadow-sm ring-1 ring-black/5"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* -------- Stack -------- */}
        <section className="relative border-t border-black/10 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <MonoLabel className="mb-8 block">{c.stackLabel}</MonoLabel>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-5 md:px-10">
              <div
                className="flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[12px] text-zinc-600"
                dir="ltr"
              >
                {stack.map((s, i) => (
                  <span key={s} className="inline-flex items-center gap-4">
                    <span>{s}</span>
                    {i < stack.length - 1 && (
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

        {/* -------- Final CTA -------- */}
        <section className="relative border-t border-black/10 py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
            <h2 className="text-balance text-3xl font-medium tracking-tight text-[var(--color-fg)] md:text-5xl">
              {c.finalCtaTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-600 md:text-[16px]">
              {c.finalCtaBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <PrimaryCTA href={contactHref}>
                {c.ctaPrimary}
                <ArrowRight locale={locale} />
              </PrimaryCTA>
              <GhostCTA href={BOOK_CALL_HREF}>{c.ctaSecondary}</GhostCTA>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
