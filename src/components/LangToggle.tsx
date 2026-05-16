"use client";

/* ----------------------------------------------------------------------
 * LangToggle — small text-link that swaps between EN and AR equivalents
 * of the current path. Renders client-side because it reads usePathname().
 *
 * Behavior:
 *   - On English routes (no /ar prefix), label = "العربية", href adds /ar.
 *   - On Arabic routes (/ar/*),         label = "English",  href strips /ar.
 *   - Hash + query strings are preserved by the browser's normal click
 *     handling; pathname-only swap is sufficient.
 * -------------------------------------------------------------------- */

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/dictionaries";

const BASE_CLASS =
  "font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition hover:text-[var(--color-fg)]";

function toEnglish(pathname: string): string {
  // Strip a leading "/ar" segment.
  if (pathname === "/ar" || pathname === "/ar/") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3); // "/ar/services" -> "/services"
  return pathname;
}

function toArabic(pathname: string): string {
  if (pathname === "/" || pathname === "") return "/ar";
  if (pathname.startsWith("/ar")) return pathname;
  return `/ar${pathname}`;
}

export function LangToggle({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";

  const isArabic = locale === "ar";
  const targetHref = isArabic ? toEnglish(pathname) : toArabic(pathname);
  const label = isArabic ? "English" : "العربية";

  return (
    <Link
      href={targetHref}
      className={`${BASE_CLASS} ${className}`}
      aria-label={label}
      hrefLang={isArabic ? "en" : "ar"}
    >
      {label}
    </Link>
  );
}
