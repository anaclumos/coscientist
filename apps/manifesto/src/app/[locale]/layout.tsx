import type { Metadata } from "next";
import { Faculty_Glyphic } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  setRequestLocale,
  getMessages,
  getTranslations,
} from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/500.css";
import "@fontsource/iosevka/600.css";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";
import { routing, getDirection, type Locale } from "@/i18n/routing";

const facultyGlyphic = Faculty_Glyphic({
  variable: "--font-faculty-glyphic",
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const direction = getDirection(locale as Locale);
  const t = await getTranslations("header");

  return (
    <html lang={locale} dir={direction} className="h-full">
      <body
        className={`${facultyGlyphic.variable} antialiased font-sans h-full flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider defaultTheme="system" storageKey="manifesto-theme">
            <header className="h-16 flex items-center justify-between px-6 bg-card border-b border-border sticky top-0 z-50 flex-shrink-0">
              <h1 className="text-lg font-semibold text-foreground">
                <Link href="/" className="hover:text-primary transition-colors">
                  {t("title")}
                </Link>
              </h1>
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </header>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
