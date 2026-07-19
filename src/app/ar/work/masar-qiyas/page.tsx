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
  openGraph: {
    locale: "ar_SA",
    alternateLocale: ["en_US"],
  },
};

export default function ArabicMasarQiyasCaseStudyPage() {
  return <WorkCaseStudyContent locale="ar" slug="masar-qiyas" />;
}
