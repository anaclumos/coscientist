import { notFound } from "next/navigation"
import { buildFullStack, parseStackString } from "@/lib/stores/stack-utils"
import type { BacklinkInfo, Note, NotePaneData, NoteSummary } from "@/lib/types"
import { NotesPageClient } from "./client"

interface ClientWrapperProps {
  noteGraphPromise: Promise<{
    notes: Map<string, Note>
    backlinks: Map<string, BacklinkInfo[]>
  }>
  rootSlug: string
  locale: string
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function ClientWrapper({
  noteGraphPromise,
  rootSlug,
  locale,
  searchParams,
}: ClientWrapperProps) {
  const { notes, backlinks } = await noteGraphPromise

  const rootNote = notes.get(rootSlug)
  if (!rootNote) {
    notFound()
  }

  const stackParam =
    typeof searchParams.stack === "string" ? searchParams.stack : ""
  const additionalSlugs = parseStackString(stackParam)
  const stack = buildFullStack(rootSlug, additionalSlugs)

  const initialPanesData: NotePaneData[] = []
  for (const slug of stack) {
    const note = notes.get(slug)
    if (note) {
      initialPanesData.push({
        slug: note.slug,
        title: note.title,
        description: note.description,
        contentHtml: note.contentHtml,
        backlinks: backlinks.get(slug) || [],
      })
    }
  }

  if (initialPanesData.length === 0) {
    notFound()
  }

  const noteSummaries: NoteSummary[] = Array.from(notes.values()).map(
    (note) => ({
      slug: note.slug,
      title: note.title,
      description: note.description,
    })
  )
  noteSummaries.sort((a, b) => a.title.localeCompare(b.title, locale))

  return (
    <NotesPageClient
      initialPanesData={initialPanesData}
      noteSummaries={noteSummaries}
      rootSlug={rootSlug}
    />
  )
}
