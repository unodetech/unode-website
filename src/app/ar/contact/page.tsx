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
  openGraph: {
    locale: "ar_SA",
    alternateLocale: ["en_US"],
  },
};

export default function ArabicContactPage() {
  return <ContactContent locale="ar" />;
}
