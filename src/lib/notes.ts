import "server-only"
import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import { cache } from "react"
import { remark } from "remark"
import gfm from "remark-gfm"
import html from "remark-html"
import type { BacklinkInfo, Note } from "./types"

const MD_EXTENSION_REGEX = /\.md$/
const TITLE_LINE_REGEX = /^#\s+.+\n+/

function getNotesDirectory(locale = "en") {
  return path.join(process.cwd(), `src/content/manifesto/${locale}`)
}

function getLegacyNotesDirectory() {
  return path.join(process.cwd(), "src/content/manifesto")
}

function isMissingFile(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "ENOENT"
  )
}

function extractOutboundLinks(content: string): string[] {
  const links: Set<string> = new Set()

  const mdLinkRegex = /\[([^\]]+)\]\(\.?\/?([a-z0-9-]+)(?:\.md)?\)/gi
  const mdMatches = content.matchAll(mdLinkRegex)
  for (const match of mdMatches) {
    const slug = match[2]
    if (!(slug.startsWith("http") || slug.startsWith("mailto:"))) {
      links.add(slug)
    }
  }

  const wikiLinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g
  const wikiMatches = content.matchAll(wikiLinkRegex)
  for (const match of wikiMatches) {
    links.add(match[1].toLowerCase().replace(/\s+/g, "-"))
  }

  return Array.from(links)
}

function extractExcerpt(
  content: string,
  targetSlug: string
): string | undefined {
  const patterns = [
    new RegExp(`\\[([^\\]]+)\\]\\(\\.?\\/?${targetSlug}(?:\\.md)?\\)`, "i"),
    new RegExp(`\\[\\[${targetSlug}(?:\\|[^\\]]+)?\\]\\]`, "i"),
  ]

  for (const pattern of patterns) {
    const match = pattern.exec(content)
    if (match) {
      const index = match.index
      const start = Math.max(0, index - 50)
      const end = Math.min(content.length, index + match[0].length + 50)
      let excerpt = content.slice(start, end)

      if (start > 0) {
        excerpt = `...${excerpt}`
      }
      if (end < content.length) {
        excerpt = `${excerpt}...`
      }

      const targetLinkPattern = new RegExp(
        `\\[([^\\]]+)\\]\\(\\.?\\/?${targetSlug}(?:\\.md)?\\)`,
        "gi"
      )
      excerpt = excerpt.replace(targetLinkPattern, "**$1**")
      excerpt = excerpt.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      excerpt = excerpt.replace(/[#_`]/g, "").replace(/\n+/g, " ").trim()

      return excerpt
    }
  }

  return undefined
}

async function directoryExists(dirPath: string): Promise<boolean> {
  try {
    const stat = await fs.stat(dirPath)
    return stat.isDirectory()
  } catch {
    return false
  }
}

const getNotesDirectoryForLocale = cache(async (locale = "en") => {
  const notesDir = getNotesDirectory(locale)
  const legacyDir = getLegacyNotesDirectory()
  return (await directoryExists(notesDir)) ? notesDir : legacyDir
})

export const getAllNoteSlugs = cache(
  async (locale = "en"): Promise<string[]> => {
    const dirToUse = await getNotesDirectoryForLocale(locale)

    try {
      const fileNames = await fs.readdir(dirToUse)
      return fileNames
        .filter((name) => name.endsWith(".md"))
        .map((name) => name.replace(MD_EXTENSION_REGEX, ""))
    } catch (error) {
      if (isMissingFile(error)) {
        return []
      }
      throw error
    }
  }
)

function generateExcerpt(content: string, maxLength = 300): string {
  const withoutTitle = content.replace(TITLE_LINE_REGEX, "")
  const plainText = withoutTitle
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*_`[\]]/g, "")
    .replace(/\n+/g, " ")
    .trim()

  if (plainText.length <= maxLength) {
    return plainText
  }
  const truncated = plainText.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return `${lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated}...`
}

export const getNoteBySlug = cache(
  async (slug: string, locale = "en"): Promise<Note | null> => {
    const dirToUse = await getNotesDirectoryForLocale(locale)
    const fullPath = path.join(dirToUse, `${slug}.md`)

    let fileContents: string
    try {
      fileContents = await fs.readFile(fullPath, "utf8")
    } catch (error) {
      if (isMissingFile(error)) {
        return null
      }
      throw error
    }
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(gfm)
      .use(html, { sanitize: false })
      .process(content)

    const contentHtml = processedContent.toString()
    const outboundLinks = extractOutboundLinks(content)
    const excerpt = generateExcerpt(content)

    return {
      slug,
      title: data.title || slug,
      description: data.description,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      content,
      contentHtml,
      excerpt,
      outboundLinks,
      inboundLinks: [],
    }
  }
)

export const getAllNotes = cache(async (locale = "en"): Promise<Note[]> => {
  const slugs = await getAllNoteSlugs(locale)
  const notes = await Promise.all(
    slugs.map((slug) => getNoteBySlug(slug, locale))
  )
  return notes.filter((note): note is Note => note !== null)
})

export const buildNoteGraph = cache(
  async (
    locale = "en"
  ): Promise<{
    notes: Map<string, Note>
    backlinks: Map<string, BacklinkInfo[]>
  }> => {
    const allNotes = await getAllNotes(locale)
    const notes = new Map<string, Note>()
    const backlinks = new Map<string, BacklinkInfo[]>()

    for (const note of allNotes) {
      notes.set(note.slug, note)
      backlinks.set(note.slug, [])
    }

    for (const note of allNotes) {
      for (const targetSlug of note.outboundLinks) {
        if (notes.has(targetSlug)) {
          const targetBacklinks = backlinks.get(targetSlug) || []
          targetBacklinks.push({
            slug: note.slug,
            title: note.title,
            excerpt: extractExcerpt(note.content, targetSlug),
          })
          backlinks.set(targetSlug, targetBacklinks)

          const targetNote = notes.get(targetSlug)
          if (targetNote && !targetNote.inboundLinks.includes(note.slug)) {
            targetNote.inboundLinks.push(note.slug)
          }
        }
      }
    }

    return { notes, backlinks }
  }
)

export function getNotesBySlugs(
  slugs: string[],
  locale = "en"
): Promise<(Note | null)[]> {
  return Promise.all(slugs.map((slug) => getNoteBySlug(slug, locale)))
}
