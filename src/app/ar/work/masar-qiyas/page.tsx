import type { Metadata } from "next";
import { WorkCaseStudyContent } from "@/components/pages/WorkCaseStudyContent";
import { getDictionary } from "@/i18n/dictionaries";

const t = getDictionary("ar").caseStudy.masarQiyas;

export const metadata: Metadata = {
  title: { absolute: `${t.metaTitle} · يونود` },
  description: t.metaDescription,
  alternates: {
    canonical: "/ar/work/masar-qiyas",
    languages: {
      en: "/work/masar-qiyas",
      ar: "/ar/work/masar-qiyas",
      "x-default": "/work/masar-qiyas",
    },
  },
  // openGraph (incl. og:image, locale ar_SA, alternateLocale) is inherited
  // from src/app/ar/layout.tsx — no per-page override needed.
};

export default function ArabicMasarQiyasCaseStudyPage() {
  return <WorkCaseStudyContent locale="ar" slug="masar-qiyas" />;
}
