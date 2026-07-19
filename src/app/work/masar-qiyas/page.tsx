import type { Metadata } from "next";
import { WorkCaseStudyContent } from "@/components/pages/WorkCaseStudyContent";
import { getDictionary } from "@/i18n/dictionaries";

const t = getDictionary("en").caseStudy.masarQiyas;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: "/work/masar-qiyas",
    languages: {
      en: "/work/masar-qiyas",
      ar: "/ar/work/masar-qiyas",
      "x-default": "/work/masar-qiyas",
    },
  },
};

export default function MasarQiyasCaseStudyPage() {
  return <WorkCaseStudyContent locale="en" slug="masar-qiyas" />;
}
