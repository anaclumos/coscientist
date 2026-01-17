import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Faculty_Glyphic, Instrument_Serif } from "next/font/google"
import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server"
import "@fontsource/iosevka/400.css"
import "@fontsource/iosevka/500.css"
import "@fontsource/iosevka/600.css"
import "@fontsource-variable/noto-serif-jp"
import "@fontsource-variable/noto-serif-kr"
import "@fontsource-variable/noto-serif-sc"
import "@fontsource-variable/noto-serif-tc"
import "../globals.css"
import { HeaderLogo } from "@/components/header-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { MagneticCursorLazy } from "@/components/magnetic-cursor-lazy"
import { Providers } from "@/components/providers"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Group, GroupSeparator } from "@/components/ui/group"
import { getDirection, type Locale, routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"

const facultyGlyphic = Faculty_Glyphic({
  variable: "--font-faculty-glyphic",
  subsets: ["latin"],
  weight: "400",
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  fallback: ["serif"],
  adjustFontFallback: true,
})

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  const title = t("title")
  const description = t("description")

  return {
    metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&locale=${locale}`,
          width: 2400,
          height: 1260,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&locale=${locale}`,
      ],
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const direction = getDirection(locale as Locale)
  const [messages, t] = await Promise.all([
    getMessages(),
    getTranslations("header"),
  ])

  return (
    <html
      className="h-full"
      dir={direction}
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={cn(
          facultyGlyphic.variable,
          instrumentSerif.variable,
          "flex h-full flex-col font-sans antialiased"
        )}
      >
        <Providers messages={messages}>
          <MagneticCursorLazy />
          <header className="sticky top-0 z-50 flex h-16 flex-shrink-0 items-center justify-between border-border border-b bg-card px-6">
            <HeaderLogo
              brand={t("brand")}
              brandWithManifesto={t("brandWithManifesto")}
            />
            <Group aria-label="Header actions">
              <Group aria-label="Social links">
                <Button
                  render={
                    <a
                      href="https://github.com/coscientist/coscientist"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="sr-only">{t("github")}</span>
                    </a>
                  }
                  size="icon"
                  variant="outline"
                />
                {/* <GroupSeparator />
                  <Button
                    render={
                      <a
                        href="https://x.com/anaclumos"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          aria-hidden="true"
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 24 24"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className="sr-only">{t("twitter")}</span>
                      </a>
                    }
                    size="icon"
                    variant="outline"
                  /> */}
                <GroupSeparator />
                <LanguageSwitcher />
                <GroupSeparator />
                <ThemeToggle />
              </Group>
            </Group>
          </header>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
