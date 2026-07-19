import type { Metadata } from "next";
import { WorkCaseStudyContent } from "@/components/pages/WorkCaseStudyContent";
import { getDictionary } from "@/i18n/dictionaries";

const t = getDictionary("ar").caseStudy.amlakey;

export const metadata: Metadata = {
  title: { absolute: `${t.metaTitle} · يونود` },
  description: t.metaDescription,
  alternates: {
    canonical: "/ar/work/amlakey",
    languages: {
      en: "/work/amlakey",
      ar: "/ar/work/amlakey",
      "x-default": "/work/amlakey",
    },
  },
  openGraph: {
    locale: "ar_SA",
    alternateLocale: ["en_US"],
  },
};

export default function ArabicAmlakeyCaseStudyPage() {
  return <WorkCaseStudyContent locale="ar" slug="amlakey" />;
}
