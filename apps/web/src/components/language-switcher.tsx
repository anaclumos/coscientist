"use client"

import { useLocale, useTranslations } from "next-intl"
import { IconLanguageOutline18 } from "nucleo-ui-outline-18"
import { useQueryStates } from "nuqs"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
} from "@/components/ui/select"
import { usePathname, useRouter } from "@/i18n/navigation"
import { type Locale, routing } from "@/i18n/routing"
import {
  focusParser,
  noteStackParsers,
  stackParser,
} from "@/lib/stores/note-stack-parsers"
import { cn } from "@/lib/utils"

const localeNames: Record<Locale, string> = {
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  hi: "हिन्दी",
  es: "Español",
  fr: "Français",
  ar: "العربية",
  bn: "বাংলা",
  pt: "Português",
  ru: "Русский",
  id: "Bahasa Indonesia",
  ja: "日本語",
  fa: "فارسی",
  de: "Deutsch",
  vi: "Tiếng Việt",
  ta: "தமிழ்",
  te: "తెలుగు",
  tr: "Türkçe",
  ko: "한국어",
  ur: "اردو",
  it: "Italiano",
  th: "ไทย",
  pl: "Polski",
  uk: "Українська",
  nl: "Nederlands",
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("languageSwitcher")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [urlState] = useQueryStates(noteStackParsers)

  const handleChange = (value: string | null) => {
    if (value && value !== locale) {
      const params: string[] = []
      const stackStr = stackParser.serialize(urlState.stack)
      if (stackStr) params.push(`stack=${stackStr}`)
      if (urlState.focus !== null) {
        const focusStr = focusParser.serialize(urlState.focus)
        if (focusStr) params.push(`focus=${focusStr}`)
      }
      const fullPath =
        params.length > 0 ? `${pathname}?${params.join("&")}` : pathname
      router.replace(fullPath, { locale: value as Locale })
    }
  }

  return (
    <Select onValueChange={handleChange} value={locale}>
      <Button
        aria-label={t("selectLanguage")}
        className={cn(
          "w-auto min-w-0 [&_[data-slot=select-icon]]:hidden",
          className
        )}
        render={<SelectTrigger />}
        size="icon"
        variant="outline"
      >
        <IconLanguageOutline18 className="size-[1.2rem]" />
      </Button>
      <SelectPopup className="max-h-[300px]">
        {routing.locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {localeNames[loc]}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  )
}
