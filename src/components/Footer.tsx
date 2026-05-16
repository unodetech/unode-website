import Link from "next/link";
import { MonoLabel } from "./ui";
import {
  getDictionary,
  localizedHref,
  type Locale,
} from "@/i18n/dictionaries";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const homeHref = localizedHref(locale, "/");
  const studioHref = localizedHref(locale, "/studio");
  const servicesHref = localizedHref(locale, "/services");
  const contactHref = `${homeHref === "/" ? "" : homeHref}/#contact`;

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href={homeHref} className="flex items-center gap-2.5">
              <span
                className="grid h-6 w-6 place-items-center rounded-[7px] border border-[var(--color-line-strong)] bg-white"
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
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-zinc-600">
              {t.footer.blurb}
            </p>
          </div>

          <div className="md:col-span-7 md:grid md:grid-cols-3 md:gap-8">
            <div>
              <MonoLabel>{t.footer.workLabel}</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <a
                    href="https://amlakeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    {t.footer.amlakey}
                  </a>
                </li>
                <li>
                  <a
                    href="https://masarqiyas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    {t.footer.masarQiyas}
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <MonoLabel>{t.footer.studioLabel}</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <Link
                    href={studioHref}
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    {t.footer.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href={servicesHref}
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    {t.footer.services}
                  </Link>
                </li>
                <li>
                  <Link
                    href={contactHref}
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <MonoLabel>{t.footer.directLabel}</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <a
                    href="mailto:info@unode.tech"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    info@unode.tech
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@unode.tech"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    support@unode.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-[12px] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.copyright}</p>
          <p className="font-mono-tag">{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
