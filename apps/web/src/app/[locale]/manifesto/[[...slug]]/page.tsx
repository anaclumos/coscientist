import { routing } from "@coscientist/web/i18n/routing"
import {
  buildNoteGraph,
  getAllNoteSlugs,
  getNoteBySlug,
} from "@coscientist/web/lib/notes"
import { parseStackFromParams } from "@coscientist/web/lib/stack"
import type {
  BacklinkInfo,
  Note,
  NotePaneData,
  NoteSummary,
} from "@coscientist/web/lib/types"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { NotesPageClient } from "./client"

interface PageProps {
  params: Promise<{ locale: string; slug?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params

  if (!hasLocale(routing.locales, locale)) {
    return {}
  }

  const rootSlug = slug?.[0] ?? "index"
  const note = await getNoteBySlug(rootSlug, locale)

  if (!note) {
    const t = await getTranslations({ locale, namespace: "metadata" })
    return {
      title: t("title"),
      description: t("description"),
    }
  }

  const title = note.title
  const description = note.description || note.excerpt

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      locale,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description || "")}&locale=${locale}`,
          width: 2400,
          height: 1260,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description || "")}&locale=${locale}`,
      ],
    },
  }
}

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  if (!hasLocale(routing.locales, resolvedParams.locale)) {
    notFound()
  }

  const locale = resolvedParams.locale
  setRequestLocale(locale)

  const rootSlug = resolvedParams.slug?.[0] ?? "index"

  const noteGraphPromise = buildNoteGraph(locale)

  const urlSearchParams = new URLSearchParams()
  for (const [key, value] of Object.entries(resolvedSearchParams)) {
    if (typeof value === "string") {
      urlSearchParams.set(key, value)
    } else if (Array.isArray(value)) {
      for (const v of value) {
        urlSearchParams.append(key, v)
      }
    }
  }

  const { stack } = parseStackFromParams(rootSlug, urlSearchParams)

  const {
    notes,
    backlinks,
  }: { notes: Map<string, Note>; backlinks: Map<string, BacklinkInfo[]> } =
    await noteGraphPromise
  const rootNote = notes.get(rootSlug)
  if (!rootNote) {
    notFound()
  }

  const initialPanesData: NotePaneData[] = []
  for (const slug of stack) {
    const note = notes.get(slug)
    if (!note) {
      continue
    }
    initialPanesData.push({
      slug: note.slug,
      title: note.title,
      description: note.description,
      contentHtml: note.contentHtml,
      backlinks: backlinks.get(slug) || [],
    })
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

export async function generateStaticParams() {
  const slugs = await getAllNoteSlugs(routing.defaultLocale)

  const params: Array<{ locale: string; slug: string[] | undefined }> = []
  for (const locale of routing.locales) {
    params.push({ locale, slug: undefined })
    for (const slug of slugs) {
      params.push({ locale, slug: [slug] })
    }
  }

  return params
}
