import type { Metadata } from "next";
import { Faculty_Glyphic, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const facultyGlyphic = Faculty_Glyphic({
  variable: "--font-faculty-glyphic",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whitepaper",
  description: "A documentation site with Andy Matuschak-style sliding panes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${facultyGlyphic.variable} ${geistMono.variable} antialiased font-sans h-full flex flex-col`}>
        <header className="h-16 flex items-center px-6 bg-card border-b border-border sticky top-0 z-50 flex-shrink-0">
          <h1 className="text-lg font-semibold text-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Whitepaper
            </Link>
          </h1>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
