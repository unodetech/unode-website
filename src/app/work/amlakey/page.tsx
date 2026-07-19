import type { Metadata } from "next";
import { WorkCaseStudyContent } from "@/components/pages/WorkCaseStudyContent";
import { getDictionary } from "@/i18n/dictionaries";

const t = getDictionary("en").caseStudy.amlakey;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: "/work/amlakey",
    languages: {
      en: "/work/amlakey",
      ar: "/ar/work/amlakey",
      "x-default": "/work/amlakey",
    },
  },
};

export default function AmlakeyCaseStudyPage() {
  return <WorkCaseStudyContent locale="en" slug="amlakey" />;
}
