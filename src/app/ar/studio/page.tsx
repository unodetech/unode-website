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
  // openGraph (incl. og:image, locale ar_SA, alternateLocale) is inherited
  // from src/app/ar/layout.tsx — no per-page override needed.
};

export default function ArabicStudioPage() {
  return <StudioContent locale="ar" />;
}
