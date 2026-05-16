import type { Metadata } from "next";
import { StudioContent } from "@/components/pages/StudioContent";
import { getDictionary } from "@/i18n/dictionaries";

const t = getDictionary("ar").studioPage;

export const metadata: Metadata = {
  title: { absolute: `${t.metaTitle} · يونود` },
  description: t.metaDescription,
  alternates: {
    canonical: "/ar/studio",
    languages: {
      en: "/studio",
      ar: "/ar/studio",
      "x-default": "/studio",
    },
  },
  openGraph: {
    locale: "ar_SA",
    alternateLocale: ["en_US"],
  },
};

export default function ArabicStudioPage() {
  return <StudioContent locale="ar" />;
}
