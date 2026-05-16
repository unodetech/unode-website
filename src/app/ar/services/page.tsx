import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/ServicesContent";
import { getDictionary } from "@/i18n/dictionaries";

const t = getDictionary("ar").servicesPage;

export const metadata: Metadata = {
  title: { absolute: `${t.metaTitle} · يونود` },
  description: t.metaDescription,
  alternates: {
    canonical: "/ar/services",
    languages: {
      en: "/services",
      ar: "/ar/services",
      "x-default": "/services",
    },
  },
  openGraph: {
    locale: "ar_SA",
    alternateLocale: ["en_US"],
  },
};

export default function ArabicServicesPage() {
  return <ServicesContent locale="ar" />;
}
