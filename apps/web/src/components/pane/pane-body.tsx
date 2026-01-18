"use client"

import { useLocale, useTranslations } from "next-intl"
import { memo } from "react"
import { BacklinksSection } from "@/components/backlinks-section"
import { NoteContent } from "@/components/note-content"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { BacklinkInfo } from "@/lib/types"
import { PaneHeader } from "./pane-header"

interface PaneBodyProps {
  slug: string
  title: string
  description?: string
  contentHtml: string
  backlinks: BacklinkInfo[]
  onLinkClick: (slug: string) => void
}

export const PaneBody = memo(function PaneBody(props: PaneBodyProps) {
  const { slug, title, description, contentHtml, backlinks, onLinkClick } =
    props
  const t = useTranslations("notePane")
  const tCommon = useTranslations("common")
  const locale = useLocale()

  return (
    <ScrollArea className="relative z-0 h-full">
      <div className="flex min-h-full flex-col">
        <PaneHeader description={description} title={title} />

        <div className="flex-1">
          <NoteContent contentHtml={contentHtml} onLinkClick={onLinkClick} />
        </div>

        {backlinks.length > 0 && (
          <footer className="border-border/40 border-t px-8 py-6">
            <BacklinksSection
              backlinks={backlinks}
              onBacklinkClick={onLinkClick}
            />
          </footer>
        )}

        <footer className="border-border/40 border-t px-8 py-4">
          <a
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
            href={`https://github.com/coscientist/coscientist/edit/main/apps/web/src/content/manifesto/${locale}/${slug}.md`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("editOnGitHub")}
            <span className="sr-only"> ({tCommon("opensInNewTab")})</span>
          </a>
        </footer>
      </div>
    </ScrollArea>
  )
})
