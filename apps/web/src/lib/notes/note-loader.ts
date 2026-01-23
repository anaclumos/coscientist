import "server-only"

import { cache } from "react"
import type { Note, NoteGraphNode } from "@/lib/types"
import { getAllNoteSlugs, readNoteFile } from "./file-io"
import { extractOutboundLinks } from "./link-extractor"
import {
  generateExcerpt,
  parseFrontmatter,
  parseMarkdown,
} from "./markdown-parser"

export async function loadNote(
  slug: string,
  locale = "en"
): Promise<Note | null> {
  const fileContents = await readNoteFile(slug, locale)
  if (!fileContents) {
    return null
  }

  const { data, content, contentHtml } = await parseMarkdown(fileContents)
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
  }
}

async function loadNoteGraphNode(
  slug: string,
  locale = "en"
): Promise<NoteGraphNode | null> {
  const fileContents = await readNoteFile(slug, locale)
  if (!fileContents) {
    return null
  }

  const { data, content } = parseFrontmatter(fileContents)
  const outboundLinks = extractOutboundLinks(content)

  return {
    slug,
    title: data.title || slug,
    description: data.description,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    content,
    outboundLinks,
  }
}

const loadNoteGraphNodeCached = cache(loadNoteGraphNode)

export async function loadAllNoteGraphNodes(
  locale = "en"
): Promise<NoteGraphNode[]> {
  const slugs = await getAllNoteSlugs(locale)
  const notes = await Promise.all(
    slugs.map((slug) => loadNoteGraphNodeCached(slug, locale))
  )
  return notes.filter((note): note is NoteGraphNode => note !== null)
}
