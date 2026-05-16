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
    "Unode is a technology studio building consumer software. Makers of Amlakey and Masar Qiyas.",
  keywords: [
    "Unode",
    "technology studio",
    "Amlakey",
    "Masar Qiyas",
    "property management",
    "exam prep",
  ],
  authors: [{ name: "Unode Company" }],
  openGraph: {
    title: "Unode — A technology studio",
    description:
      "A technology studio building consumer software. Makers of Amlakey and Masar Qiyas.",
    url: "https://unode.tech",
    siteName: "Unode",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unode — A technology studio",
    description:
      "A technology studio building consumer software. Makers of Amlakey and Masar Qiyas.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
