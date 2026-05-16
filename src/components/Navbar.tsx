import Link from "next/link";
import { ArrowRight, PrimaryCTA } from "./ui";
import { LangToggle } from "./LangToggle";
import {
  getDictionary,
  localizedHref,
  type Locale,
} from "@/i18n/dictionaries";

export function Navbar({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const homeHref = localizedHref(locale, "/");
  const workHref = `${homeHref === "/" ? "" : homeHref}/#work`;
  const contactHref = `${homeHref === "/" ? "" : homeHref}/#contact`;
  const servicesHref = localizedHref(locale, "/services");
  const studioHref = localizedHref(locale, "/studio");

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-line)] bg-white/75 backdrop-blur-xl"
      aria-label={t.nav.primary}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link
          href={homeHref}
          className="flex items-center gap-2.5 text-[var(--color-fg)]"
          aria-label={t.nav.home}
        >
          <span
            className="grid h-6 w-6 place-items-center rounded-[7px] border border-[var(--color-line-strong)] bg-white"
            aria-hidden="true"
          >
            <span className="text-[11px] font-semibold tracking-tight">u</span>
          </span>
          <span className="text-[15px] font-medium tracking-tight">unode</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          <Link
            href={workHref}
            className="transition hover:text-[var(--color-fg)]"
          >
            {t.nav.work}
          </Link>
          <Link
            href={servicesHref}
            className="transition hover:text-[var(--color-fg)]"
          >
            {t.nav.services}
          </Link>
          <Link
            href={studioHref}
            className="transition hover:text-[var(--color-fg)]"
          >
            {t.nav.studio}
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <LangToggle locale={locale} />
          <PrimaryCTA href={contactHref}>
            {t.nav.startProject}
            <ArrowRight locale={locale} />
          </PrimaryCTA>
        </div>

        {/* Mobile: keep at least a language toggle visible */}
        <div className="flex items-center md:hidden">
          <LangToggle locale={locale} />
        </div>
      </div>
    </nav>
  );
}
