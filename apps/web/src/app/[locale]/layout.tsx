import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Viewport } from "next"
import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server"
import { Suspense } from "react"
import "@/app/globals.css"
import { AppHeader } from "@/components/layout/app-header"
import { RootLayoutWrapper } from "@/components/layout/root-layout-wrapper"
import { MagneticCursorClient } from "@/components/magnetic-cursor-client"
import { Providers } from "@/components/providers"
import { getDirection, type Locale, routing } from "@/i18n/routing"

// biome-ignore lint/performance/noBarrelFile: Next.js metadata exports must be re-exported from layout
export { generateMetadata } from "./layout-metadata"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
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
    <ClerkProvider waitlistUrl="/">
      <RootLayoutWrapper direction={direction} locale={locale}>
        <Suspense>
          <Providers messages={messages}>
            <MagneticCursorClient />
            <AppHeader
              brand={t("brand")}
              brandWithManifesto={t("brandWithManifesto")}
              githubLabel={t("github")}
            />
            {children}
            <Analytics />
            <SpeedInsights />
          </Providers>
        </Suspense>
      </RootLayoutWrapper>
    </ClerkProvider>
  )
}
