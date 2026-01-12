'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Note } from '@/lib/types';
import { buildNoteHref, isExternalHref, normalizeNoteSlug } from '@/lib/note-links';
import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPopup,
} from '@/components/ui/preview-card';

interface NotePreviewContextValue {
  notesMap: Map<string, Note>;
}

const NotePreviewContext = createContext<NotePreviewContextValue>({
  notesMap: new Map(),
});

export function NotePreviewProvider({
  children,
  notesMap,
}: {
  children: ReactNode;
  notesMap: Map<string, Note>;
}) {
  return (
    <NotePreviewContext.Provider value={{ notesMap }}>
      {children}
    </NotePreviewContext.Provider>
  );
}

export function useNotePreview() {
  return useContext(NotePreviewContext);
}

interface PreviewLinkProps {
  href: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export function PreviewLink({ href, children, onClick }: PreviewLinkProps) {
  const { notesMap } = useNotePreview();
  
  const slug = isExternalHref(href) ? '' : normalizeNoteSlug(href);
  const note = slug ? notesMap.get(slug) : undefined;
  const resolvedHref = slug ? buildNoteHref(slug) : href;
  
  if (!note) {
    return (
      <a href={resolvedHref} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <PreviewCard>
      <PreviewCardTrigger
        render={
          <a href={resolvedHref} onClick={onClick}>
            {children}
          </a>
        }
      />
      <PreviewCardPopup side="bottom" align="start" sideOffset={8}>
        <p className="text-xs text-muted-foreground line-clamp-4">
          {note.excerpt}
        </p>
      </PreviewCardPopup>
    </PreviewCard>
  );
}
