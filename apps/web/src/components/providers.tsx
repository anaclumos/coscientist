import { NextIntlClientProvider } from "next-intl"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import type { ReactNode } from "react"
import { ConvexClientProvider } from "./convex-client-provider"
import { ThemeProviderClient } from "./theme-provider-client"

interface ProvidersProps {
  children: ReactNode
  messages: IntlMessages
  storageKey?: string
}

type IntlMessages = Parameters<typeof NextIntlClientProvider>[0]["messages"]

export function Providers({
  children,
  messages,
  storageKey = "coscientist-theme",
}: ProvidersProps) {
  return (
    <NuqsAdapter>
      <NextIntlClientProvider messages={messages}>
        <ThemeProviderClient storageKey={storageKey}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ThemeProviderClient>
      </NextIntlClientProvider>
    </NuqsAdapter>
  )
}
