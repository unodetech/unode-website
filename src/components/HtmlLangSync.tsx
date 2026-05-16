"use client";

/* ----------------------------------------------------------------------
 * HtmlLangSync — keeps <html lang> and <html dir> in sync with the
 * current locale.
 *
 * Background: with `output: 'export'` and the App Router, the root
 * <html> element is owned by `src/app/layout.tsx` and cannot be
 * overridden by nested layouts. We can't statically render
 * <html lang="ar" dir="rtl"> for /ar/* routes. This tiny client effect
 * applies the right attributes on mount and on every client navigation.
 *
 * Screen readers re-evaluate language on attribute change, so this is
 * functionally correct. Search engines pick the language up from the
 * static HTML's <html lang>; for that we rely on `alternates.languages`
 * + per-page <meta> set via the metadata API.
 * -------------------------------------------------------------------- */

import { useEffect } from "react";
import type { Locale } from "@/i18n/dictionaries";

export function HtmlLangSync({ locale }: { locale: Locale }) {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale === "ar" ? "ar" : "en";
    html.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
