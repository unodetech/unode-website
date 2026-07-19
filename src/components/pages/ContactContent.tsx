/* ----------------------------------------------------------------------
 * ContactContent — locale-driven /contact page body. Same form as the
 * home Contact section, with a short heading and the direct email /
 * booking options as a secondary path.
 * -------------------------------------------------------------------- */

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { ContactForm } from "@/components/ContactForm";
import { GhostCTA, MonoLabel } from "@/components/ui";
import { getDictionary, type Locale } from "@/i18n/dictionaries";

const BOOK_CALL_HREF =
  "mailto:info@unode.tech?subject=Booking%20a%20call%20with%20Unode";

export function ContactContent({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.contactPage;
  const isRtl = locale === "ar";
  const glowPositionClass = isRtl ? "-left-32 -top-32" : "-right-32 -top-32";

  return (
    <>
      <HtmlLangSync locale={locale} />
      <Navbar locale={locale} />
      <main className="flex-1">
        <section className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
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
            <MonoLabel className="mb-6 block">{p.heroLabel}</MonoLabel>
            <h1 className="hero-display max-w-3xl text-balance text-start text-4xl font-medium text-[var(--color-fg)] md:text-6xl">
              {p.heroTitle}
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-start text-[16px] leading-relaxed text-zinc-600 md:text-[17px]">
              {p.heroBody}
            </p>
          </div>
        </section>

        <section className="relative border-t border-black/10 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <ContactForm locale={locale} />
              </div>

              <div className="md:col-span-5">
                <MonoLabel className="block">{p.altLabel}</MonoLabel>
                <div className="mt-5">
                  <GhostCTA href={BOOK_CALL_HREF}>
                    {t.contact.ctaSecondary}
                  </GhostCTA>
                </div>
                <div className="mt-5 grid gap-3">
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
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
