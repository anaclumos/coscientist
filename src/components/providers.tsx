import { NextIntlClientProvider } from "next-intl"
import type { ReactNode } from "react"
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
    <NextIntlClientProvider messages={messages}>
      <ThemeProviderClient storageKey={storageKey}>
        {children}
      </ThemeProviderClient>
    </NextIntlClientProvider>
  )
}
