import { notFound } from 'next/navigation';
import { buildNoteGraph, getAllNoteSlugs } from '@/lib/notes';
import type { Note, BacklinkInfo } from '@/lib/types';
import { parseStackFromParams } from '@/lib/stack';
import { NotesPageClient } from './client';

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface NotePaneData {
  note: Note;
  backlinks: BacklinkInfo[];
}

export default async function NotesPage({ params, searchParams }: NotesPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const rootSlug = resolvedParams.slug[0];
  if (!rootSlug) {
    notFound();
  }

  const urlSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(resolvedSearchParams)) {
    if (typeof value === 'string') {
      urlSearchParams.set(key, value);
    } else if (Array.isArray(value)) {
      for (const v of value) {
        urlSearchParams.append(key, v);
      }
    }
  }
  
  const { stack } = parseStackFromParams(rootSlug, urlSearchParams);

  const { notes, backlinks } = await buildNoteGraph();
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
  
  return slugs.map((slug) => ({
    slug: [slug],
  }));
}
