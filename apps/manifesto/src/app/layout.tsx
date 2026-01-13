import type { Metadata } from "next";
import { Faculty_Glyphic } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/500.css";
import "@fontsource/iosevka/600.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const facultyGlyphic = Faculty_Glyphic({
  variable: "--font-faculty-glyphic",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Coscientist Manifesto",
  description: "Output Tokens ≠ Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${facultyGlyphic.variable} antialiased font-sans h-full flex flex-col`}
      >
        <ThemeProvider defaultTheme="system" storageKey="manifesto-theme">
          <header className="h-16 flex items-center justify-between px-6 bg-card border-b border-border sticky top-0 z-50 flex-shrink-0">
            <h1 className="text-lg font-semibold text-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Coscientist Manifesto
              </Link>
            </h1>
            <ThemeToggle />
          </header>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
