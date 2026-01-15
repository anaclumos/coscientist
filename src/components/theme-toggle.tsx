"use client"

import { useTranslations } from "next-intl"
import {
  IconMonitorOutline18,
  IconMoonOutline18,
  IconSunOutline18,
} from "nucleo-ui-outline-18"
import { cn } from "@/lib/utils"
import { useTheme } from "./theme-provider"
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const themes = [
  { value: "light", icon: IconSunOutline18 },
  { value: "dark", icon: IconMoonOutline18 },
  { value: "system", icon: IconMonitorOutline18 },
] as const

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const t = useTranslations("theme")

  const currentTheme = themes.find((t) => t.value === theme) ?? themes[2]
  const CurrentIcon = currentTheme.icon

  return (
    <Select onValueChange={(value) => value && setTheme(value)} value={theme}>
      <SelectTrigger
        aria-label={t("toggle")}
        className={cn(
          "w-9 min-w-0 justify-center px-0 sm:w-8 [&>[data-slot=select-icon]]:hidden",
          className
        )}
        size="sm"
      >
        <SelectValue className="flex-none" placeholder={t("toggle")}>
          <CurrentIcon className="size-[1.2rem] sm:size-4" />
        </SelectValue>
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false}>
        {themes.map(({ value, icon: Icon }) => (
          <SelectItem key={value} value={value}>
            <span className="flex items-center gap-2">
              <Icon className="size-4" />
              {t(value)}
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  )
}
