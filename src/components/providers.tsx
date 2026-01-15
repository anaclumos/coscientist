"use client"

import { NextIntlClientProvider } from "next-intl"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ReactNode } from "react"

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
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
        storageKey={storageKey}
      >
        {children}
      </NextThemesProvider>
    </NextIntlClientProvider>
  )
}
