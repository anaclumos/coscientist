import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import type { Note, BacklinkInfo } from './types';

const notesDirectory = path.join(process.cwd(), 'src/content/notes');

function isMissingFile(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code?: string }).code === 'ENOENT'
  );
}

function extractOutboundLinks(content: string): string[] {
  const links: Set<string> = new Set();
  
  const mdLinkRegex = /\[([^\]]+)\]\(\.?\/?([a-z0-9-]+)(?:\.md)?\)/gi;
  const mdMatches = content.matchAll(mdLinkRegex);
  for (const match of mdMatches) {
    const slug = match[2];
    if (!slug.startsWith('http') && !slug.startsWith('mailto:')) {
      links.add(slug);
    }
  }
  
  const wikiLinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  const wikiMatches = content.matchAll(wikiLinkRegex);
  for (const match of wikiMatches) {
    links.add(match[1].toLowerCase().replace(/\s+/g, '-'));
  }
  
  return Array.from(links);
}

function extractExcerpt(content: string, targetSlug: string): string | undefined {
  const patterns = [
    new RegExp(`\\[([^\\]]+)\\]\\(\\.?\\/?${targetSlug}(?:\\.md)?\\)`, 'i'),
    new RegExp(`\\[\\[${targetSlug}(?:\\|[^\\]]+)?\\]\\]`, 'i'),
  ];
  
  for (const pattern of patterns) {
    const match = pattern.exec(content);
    if (match) {
      const index = match.index;
      const start = Math.max(0, index - 50);
      const end = Math.min(content.length, index + match[0].length + 50);
      let excerpt = content.slice(start, end);
      
      if (start > 0) excerpt = `...${excerpt}`;
      if (end < content.length) excerpt = `${excerpt}...`;
      
      excerpt = excerpt.replace(/[#*_`]/g, '').replace(/\n+/g, ' ').trim();
      
      return excerpt;
    }
  }
  
  return undefined;
}

export async function getAllNoteSlugs(): Promise<string[]> {
  try {
    const fileNames = await fs.readdir(notesDirectory);
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    if (isMissingFile(error)) {
      return [];
    }
    throw error;
  }
}

function generateExcerpt(content: string, maxLength = 300): string {
  const withoutTitle = content.replace(/^#\s+.+\n+/, '');
  const plainText = withoutTitle
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#*_`\[\]]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  const truncated = plainText.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated}...`;
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  const fullPath = path.join(notesDirectory, `${slug}.md`);

  let fileContents: string;
  try {
    fileContents = await fs.readFile(fullPath, 'utf8');
  } catch (error) {
    if (isMissingFile(error)) {
      return null;
    }
    throw error;
  }
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(content);
  
  const contentHtml = processedContent.toString();
  const outboundLinks = extractOutboundLinks(content);
  const excerpt = generateExcerpt(content);
  
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
  };
}

export async function getAllNotes(): Promise<Note[]> {
  const slugs = await getAllNoteSlugs();
  const notes = await Promise.all(slugs.map((slug) => getNoteBySlug(slug)));
  return notes.filter((note): note is Note => note !== null);
}

export async function buildNoteGraph(): Promise<{
  notes: Map<string, Note>;
  backlinks: Map<string, BacklinkInfo[]>;
}> {
  const allNotes = await getAllNotes();
  const notes = new Map<string, Note>();
  const backlinks = new Map<string, BacklinkInfo[]>();
  
  for (const note of allNotes) {
    notes.set(note.slug, note);
    backlinks.set(note.slug, []);
  }
  
  for (const note of allNotes) {
    for (const targetSlug of note.outboundLinks) {
      if (notes.has(targetSlug)) {
        const targetBacklinks = backlinks.get(targetSlug) || [];
        targetBacklinks.push({
          slug: note.slug,
          title: note.title,
          excerpt: extractExcerpt(note.content, targetSlug),
        });
        backlinks.set(targetSlug, targetBacklinks);
        
        const targetNote = notes.get(targetSlug);
        if (targetNote && !targetNote.inboundLinks.includes(note.slug)) {
          targetNote.inboundLinks.push(note.slug);
        }
      }
    }
  }
  
  return { notes, backlinks };
}

export async function getNotesBySlugs(slugs: string[]): Promise<(Note | null)[]> {
  return Promise.all(slugs.map((slug) => getNoteBySlug(slug)));
}
