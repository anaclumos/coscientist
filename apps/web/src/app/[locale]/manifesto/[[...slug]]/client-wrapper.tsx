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
}: Omit<ClientWrapperProps, "searchParams">) {
  const { notes, backlinks } = await noteGraphPromise

  const rootNote = notes.get(rootSlug)
  if (!rootNote) {
    notFound()
  }

  const allNotesData: NotePaneData[] = Array.from(notes.values()).map(
    (note) => ({
      slug: note.slug,
      title: note.title,
      description: note.description,
      contentHtml: note.contentHtml,
      backlinks: backlinks.get(note.slug) || [],
    })
  )

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
      allNotesData={allNotesData}
      noteSummaries={noteSummaries}
      rootSlug={rootSlug}
    />
  )
}
