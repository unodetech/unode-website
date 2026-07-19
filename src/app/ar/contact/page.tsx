import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";
import { getDictionary } from "@/i18n/dictionaries";

const t = getDictionary("ar").contactPage;

export const metadata: Metadata = {
  title: { absolute: `${t.metaTitle} · يونود` },
  description: t.metaDescription,
  alternates: {
    canonical: "/ar/contact",
    languages: {
      en: "/contact",
      ar: "/ar/contact",
      "x-default": "/contact",
    },
  },
  // openGraph (incl. og:image, locale ar_SA, alternateLocale) is inherited
  // from src/app/ar/layout.tsx — no per-page override needed.
};

export default function ArabicContactPage() {
  return <ContactContent locale="ar" />;
}
