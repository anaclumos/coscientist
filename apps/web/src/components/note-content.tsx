"use client"

import {
  buildNoteHref,
  isExternalHref,
  normalizeNoteSlug,
} from "@coscientist/web/lib/note-links"
import parse, {
  type DOMNode,
  domToReact,
  Element,
  type HTMLReactParserOptions,
} from "html-react-parser"
import { useTranslations } from "next-intl"
import { IconArrowUpRightOutline18 } from "nucleo-ui-outline-18"
import { useCallback, useMemo } from "react"
import { PreviewLink } from "./preview-link"

interface NoteContentProps {
  contentHtml: string
  onLinkClick: (slug: string) => void
}

export function NoteContent({ contentHtml, onLinkClick }: NoteContentProps) {
  const t = useTranslations("common")
  const handleInternalLink = useCallback(
    (slug: string, e: React.MouseEvent) => {
      e.preventDefault()
      onLinkClick(slug)
    },
    [onLinkClick]
  )

  const parserOptions = useMemo<HTMLReactParserOptions>(() => {
    const options: HTMLReactParserOptions = {
      replace: (domNode: DOMNode) => {
        if (domNode instanceof Element && domNode.name === "a") {
          const href = domNode.attribs?.href
          if (!href) {
            return
          }

          if (isExternalHref(href)) {
            return (
              <a
                className={domNode.attribs?.class}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {domToReact(domNode.children as DOMNode[], options)}
                <IconArrowUpRightOutline18
                  aria-hidden="true"
                  className="ml-0.5 inline-block size-[0.85em] align-baseline"
                />
                <span className="sr-only"> ({t("opensInNewTab")})</span>
              </a>
            )
          }

          const slug = normalizeNoteSlug(href)
          if (!slug) {
            return
          }

          return (
            <PreviewLink
              href={buildNoteHref(slug)}
              onClick={(e) => handleInternalLink(slug, e)}
            >
              {domToReact(domNode.children as DOMNode[], options)}
            </PreviewLink>
          )
        }
      },
    }

    return options
  }, [handleInternalLink, t])

  const parsedContent = useMemo(
    () => parse(contentHtml, parserOptions),
    [contentHtml, parserOptions]
  )

  return <div className="prose-note md:px-4 md:py-3">{parsedContent}</div>
}
