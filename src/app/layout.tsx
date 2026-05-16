import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unode.tech"),
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
  openGraph: {
    title: "Unode — A technology studio",
    description:
      "A development partner for ambitious teams. We design, ship, and operate consumer and enterprise software end-to-end.",
    url: "https://unode.tech",
    siteName: "Unode",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-fg)]">
        {children}
      </body>
    </html>
  );
}
