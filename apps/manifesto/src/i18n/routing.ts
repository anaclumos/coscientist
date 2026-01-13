import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "zh-CN",
  "zh-TW",
  "hi",
  "es",
  "fr",
  "ar",
  "bn",
  "pt",
  "ru",
  "id",
  "ja",
  "fa",
  "de",
  "vi",
  "ta",
  "te",
  "tr",
  "ko",
  "ur",
  "it",
  "th",
  "pl",
  "uk",
  "nl",
] as const;

export type Locale = (typeof locales)[number];

// RTL languages
export const rtlLocales: Locale[] = ["ar", "fa", "ur"];

// Get text direction for a locale
export function getDirection(locale: Locale): "ltr" | "rtl" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});
