import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Tajawal } from "next/font/google";
import "./globals.css";

/* Geist for the Latin/English text; Geist Mono for tag labels. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Tajawal — modern, friendly MSA face widely used across KSA.
 * Loaded at the root level so both locales share the same font CSS file
 * across navigations, but only the Arabic layout actually applies it. */
const tajawal = Tajawal({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
});

const BASE_URL = "https://unode.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Unode — A technology studio",
    template: "%s · Unode",
  },
  description:
    "Unode is a development partner for ambitious teams. We design, ship, and operate consumer and enterprise software end-to-end.",
  keywords: [
    "Unode",
    "technology studio",
    "software development",
    "product engineering",
    "Saudi Arabia",
    "KSA",
    "Ejar",
    "Amlakey",
    "Masar Qiyas",
  ],
  authors: [{ name: "Unode Company" }],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Unode — A technology studio",
    description:
      "A development partner for ambitious teams. We design, ship, and operate consumer and enterprise software end-to-end.",
    url: BASE_URL,
    siteName: "Unode",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unode — A technology studio",
    description:
      "A development partner for ambitious teams. We design, ship, and operate consumer and enterprise software end-to-end.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
        {children}
      </body>
    </html>
  );
}
