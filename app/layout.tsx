import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandhya Makeover — Professional Makeup Artist",
  description:
    "Transform your look with Sandhya Makeover — bridal, party, editorial and natural makeup artistry. Book your appointment today.",
  keywords: ["makeup artist", "bridal makeup", "Sandhya Makeover", "party makeup", "editorial makeup"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
