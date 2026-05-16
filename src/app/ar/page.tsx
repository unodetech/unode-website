import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: { absolute: "يونود — استوديو تقني" },
};

export default function ArabicHome() {
  return <HomeContent locale="ar" />;
}
