const PROTOCOL_REGEX = /^[a-z][a-z0-9+.-]*:/i;

export function isExternalHref(href: string): boolean {
  return PROTOCOL_REGEX.test(href) || href.startsWith("#");
}

export function normalizeNoteSlug(href: string): string {
  const trimmed = href.trim();
  if (!trimmed) return "";

  const withoutHash = trimmed.split("#")[0]?.split("?")[0] ?? "";
  const withoutLeading = withoutHash.replace(/^(\.\/|\/)+/, "");
  const withoutPrefix = withoutLeading.replace(/^notes\//, "");
  const withoutExtension = withoutPrefix.replace(/\.md$/, "");
  return withoutExtension.replace(/\/$/, "");
}

export function buildNoteHref(slug: string): string {
  const normalized = normalizeNoteSlug(slug);
  return `/notes/${normalized}`;
}
