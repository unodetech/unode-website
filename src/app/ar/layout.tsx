import type { Metadata } from "next";
import { HtmlLangSync } from "@/components/HtmlLangSync";

/* ----------------------------------------------------------------------
 * Arabic layout — wraps every /ar/* route.
 *
 * Notes:
 *   - The root <html> is owned by the parent layout. We can't change
 *     <html lang> server-side from a nested layout, so HtmlLangSync
 *     updates document.documentElement.lang/dir at runtime. SEO is
 *     handled via `alternates.languages` and per-page meta tags below.
 *   - The Tajawal font is loaded at the root layout and exposed via
 *     `--font-arabic`. We apply it here through the wrapping <div>,
 *     overriding the default Geist for everything inside /ar/*.
 *   - Tailwind v4 `rtl:` variants resolve against the nearest
 *     [dir="rtl"] ancestor, so the wrapper below is enough to switch
 *     all logical-direction utilities to their RTL form.
 * -------------------------------------------------------------------- */

const BASE_URL = "https://unode.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "يونود — استوديو تقني",
    template: "%s · يونود",
  },
  description:
    "يونود شريك تطوير للفِرَق الطموحة. نصمّم البرمجيات ونُطلقها ونُشغّلها — من الفكرة الأولى إلى الإنتاج، استهلاكيةً كانت أو مؤسسية.",
  keywords: [
    "يونود",
    "استوديو تقني",
    "تطوير برمجيات",
    "هندسة منتجات",
    "المملكة العربية السعودية",
    "الرياض",
    "إيجار",
    "أملاكي",
    "مسار قياس",
  ],
  authors: [{ name: "شركة يونود" }],
  alternates: {
    canonical: "/ar",
    languages: {
      en: "/",
      ar: "/ar",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "يونود — استوديو تقني",
    description:
      "شريك تطوير للفِرَق الطموحة. نصمّم البرمجيات ونُطلقها ونُشغّلها من الفكرة الأولى إلى الإنتاج.",
    url: `${BASE_URL}/ar`,
    siteName: "يونود",
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "يونود — استوديو تقني يبني برمجيات تنطلق وتنمو وتدوم.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "يونود — استوديو تقني",
    description:
      "شريك تطوير للفِرَق الطموحة. نصمّم البرمجيات ونُطلقها ونُشغّلها من الفكرة الأولى إلى الإنتاج.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ArabicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      lang="ar"
      dir="rtl"
      className="flex min-h-full flex-1 flex-col font-[family-name:var(--font-arabic)]"
    >
      <HtmlLangSync locale="ar" />
      {children}
    </div>
  );
}
