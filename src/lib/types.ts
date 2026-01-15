interface NoteMeta {
  slug: string
  title: string
  description?: string
  createdAt?: string
  updatedAt?: string
}

export interface Note extends NoteMeta {
  content: string
  contentHtml: string
  excerpt: string
  outboundLinks: string[]
  inboundLinks: string[]
}

export interface BacklinkInfo {
  slug: string
  title: string
  excerpt?: string
}

export interface NoteSummary {
  slug: string
  title: string
  description?: string
}

export interface NotePaneData {
  slug: string
  title: string
  description?: string
  contentHtml: string
  backlinks: BacklinkInfo[]
}
