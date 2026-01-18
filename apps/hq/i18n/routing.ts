import { defineRouting } from "next-intl/routing"

export const locales = ["en", "ko"] as const
export type Locale = (typeof locales)[number]

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
})
