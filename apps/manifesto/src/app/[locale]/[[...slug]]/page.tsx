import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { buildNoteGraph, getAllNoteSlugs } from "@/lib/notes";
import type { Note, BacklinkInfo } from "@/lib/types";
import { parseStackFromParams } from "@/lib/stack";
import { routing } from "@/i18n/routing";
import { NotesPageClient } from "./client";

interface PageProps {
  params: Promise<{ locale: string; slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface NotePaneData {
  note: Note;
  backlinks: BacklinkInfo[];
}

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  if (!hasLocale(routing.locales, resolvedParams.locale)) {
    notFound();
  }

  setRequestLocale(resolvedParams.locale);

  const rootSlug = resolvedParams.slug?.[0] ?? "index";

  const urlSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(resolvedSearchParams)) {
    if (typeof value === "string") {
      urlSearchParams.set(key, value);
    } else if (Array.isArray(value)) {
      for (const v of value) {
        urlSearchParams.append(key, v);
      }
    }
  }

  const { stack } = parseStackFromParams(rootSlug, urlSearchParams);

  const { notes, backlinks } = await buildNoteGraph(resolvedParams.locale);
  const rootNote = notes.get(rootSlug);
  if (!rootNote) {
    notFound();
  }

  const notesData: NotePaneData[] = [];
  for (const slug of stack) {
    const note = notes.get(slug);
    if (!note) continue;
    notesData.push({
      note,
      backlinks: backlinks.get(slug) || [],
    });
  }

  return (
    <NotesPageClient
      rootSlug={rootSlug}
      allNotes={Array.from(notes.values())}
      initialNotesData={notesData}
    />
  );
}

export async function generateStaticParams() {
  const slugs = await getAllNoteSlugs();

  const params = [];
  for (const locale of routing.locales) {
    params.push({ locale, slug: undefined });
    for (const slug of slugs) {
      params.push({ locale, slug: [slug] });
    }
  }

  return params;
}
