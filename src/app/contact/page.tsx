import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";
import { getDictionary } from "@/i18n/dictionaries";

const t = getDictionary("en").contactPage;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/contact",
      ar: "/ar/contact",
      "x-default": "/contact",
    },
  },
};

export default function ContactPage() {
  return <ContactContent locale="en" />;
}
