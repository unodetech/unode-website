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
  title: "Unode | Saudi Technology Company",
  description:
    "Unode builds innovative digital products for Saudi Arabia. Home of Amlakey property management and Masar Qiyas exam preparation.",
  keywords: [
    "Unode",
    "Saudi tech",
    "Amlakey",
    "Masar Qiyas",
    "property management",
    "exam prep",
  ],
  openGraph: {
    title: "Unode | Saudi Technology Company",
    description:
      "Building innovative digital products for Saudi Arabia.",
    url: "https://unode.tech",
    siteName: "Unode",
    type: "website",
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
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
