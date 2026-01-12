'use client';

import { useCallback, useMemo } from 'react';
import parse, { domToReact, type HTMLReactParserOptions, type DOMNode, Element } from 'html-react-parser';
import type { Note } from '@/lib/types';
import { cn } from '@/lib/utils';
import { buildNoteHref, isExternalHref, normalizeNoteSlug } from '@/lib/note-links';
import { PreviewLink } from './preview-link';

interface NoteContentProps {
  note: Note;
  onLinkClick: (slug: string) => void;
}

export function NoteContent({ note, onLinkClick }: NoteContentProps) {
  const handleInternalLink = useCallback(
    (slug: string, e: React.MouseEvent) => {
      e.preventDefault();
      onLinkClick(slug);
    },
    [onLinkClick]
  );

  const parserOptions = useMemo<HTMLReactParserOptions>(() => {
    const options: HTMLReactParserOptions = {
      replace: (domNode: DOMNode) => {
        if (domNode instanceof Element && domNode.name === 'a') {
          const href = domNode.attribs?.href;
          if (!href || isExternalHref(href)) return;
          const slug = normalizeNoteSlug(href);
          if (!slug) return;

          return (
            <PreviewLink
              href={buildNoteHref(slug)}
              onClick={(e) => handleInternalLink(slug, e)}
            >
              {domToReact(domNode.children as DOMNode[], options)}
            </PreviewLink>
          );
        }
      },
    };

    return options;
  }, [handleInternalLink]);

  const parsedContent = useMemo(() => parse(note.contentHtml, parserOptions), [note.contentHtml, parserOptions]);
  
  return (
    <div
      className={cn(
        'p-8 max-w-prose',
        '[&_h1]:text-[1.75rem] [&_h1]:font-semibold [&_h1]:leading-tight [&_h1]:mb-4 [&_h1]:text-foreground [&_h1]:text-balance',
        '[&_h2]:text-[1.375rem] [&_h2]:font-medium [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-foreground [&_h2]:text-balance',
        '[&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-5 [&_h3]:mb-2 [&_h3]:text-foreground [&_h3]:text-balance',
        '[&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-foreground/90 [&_p]:text-pretty',
        '[&_ul]:mb-4 [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:pl-6',
        '[&_li]:text-base [&_li]:leading-relaxed [&_li]:mb-2 [&_li]:text-foreground/90 [&_li]:text-pretty',
        '[&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono',
        '[&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:mb-4',
        '[&_pre_code]:bg-transparent [&_pre_code]:p-0',
        '[&_blockquote]:border-l-[3px] [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:ml-0 [&_blockquote]:mb-4 [&_blockquote]:text-muted-foreground [&_blockquote]:italic',
        '[&_a]:text-blue-600 [&_a]:no-underline [&_a]:border-b [&_a]:border-transparent [&_a]:transition-colors',
        '[&_a:hover]:border-blue-600',
        '[&_a:visited]:text-blue-800 dark:[&_a]:text-blue-400 dark:[&_a:hover]:border-blue-400 dark:[&_a:visited]:text-blue-300'
      )}
    >
      {parsedContent}
    </div>
  );
}
