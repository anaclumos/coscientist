"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import {
  Select,
  SelectPopup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
};

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: string | null) => {
    if (value) {
      router.replace(pathname, { locale: value as Locale });
    }
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        className="w-auto min-w-[120px] h-9"
        aria-label={t("selectLanguage")}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectPopup className="max-h-[300px]">
        {routing.locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {localeNames[loc]}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
