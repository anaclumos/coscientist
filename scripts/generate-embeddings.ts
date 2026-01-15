import fs from "node:fs/promises"
import path from "node:path"
import OpenAI from "openai"

const openai = new OpenAI()

const EMBEDDING_MODEL = "text-embedding-3-small"
const BATCH_SIZE = 100

const FRONTMATTER_REGEX = /^---\n([\s\S]*?)\n---/
const TITLE_REGEX = /title:\s*["']?([^"'\n]+)["']?/
const DESCRIPTION_REGEX = /description:\s*["']?([^"'\n]+)["']?/
const BODY_REGEX = /^---\n[\s\S]*?\n---\n([\s\S]*)$/
const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g
const MDLINK_REGEX = /\[([^\]]+)\]\(\.?\/?([a-z0-9-]+)(?:\.md)?\)/gi
const WIKILINK_SLUG_REGEX = /\[\[([^\]|]+)/
const MDLINK_SLUG_REGEX = /\]\(\.?\/?([a-z0-9-]+)/
const WHITESPACE_REGEX = /\s+/g

interface NoteEmbedding {
  slug: string
  title: string
  embedding: number[]
  existingLinks: string[]
}

interface EmbeddingStore {
  model: string
  generatedAt: string
  notes: NoteEmbedding[]
}

function extractFrontmatter(content: string): {
  title?: string
  description?: string
} {
  const match = content.match(FRONTMATTER_REGEX)
  if (!match) {
    return {}
  }

  const frontmatter = match[1]
  const title = frontmatter.match(TITLE_REGEX)?.[1]
  const description = frontmatter.match(DESCRIPTION_REGEX)?.[1]

  return { title, description }
}

function extractBody(content: string): string {
  const match = content.match(BODY_REGEX)
  return match ? match[1].trim() : content.trim()
}

function extractExistingLinks(content: string): string[] {
  const wikiLinks = content.match(WIKILINK_REGEX) || []
  const mdLinks = content.match(MDLINK_REGEX) || []

  const slugs = new Set<string>()

  for (const link of wikiLinks) {
    const match = link.match(WIKILINK_SLUG_REGEX)
    if (match) {
      slugs.add(match[1].toLowerCase().replace(WHITESPACE_REGEX, "-"))
    }
  }

  for (const link of mdLinks) {
    const match = link.match(MDLINK_SLUG_REGEX)
    if (match) {
      slugs.add(match[1])
    }
  }

  return Array.from(slugs)
}

async function generateEmbeddings() {
  const SCRIPT_DIR = import.meta.dirname
  const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..")
  const notesDir = path.join(PROJECT_ROOT, "src/content/manifesto/en")
  const outputPath = path.join(PROJECT_ROOT, "src/data/embeddings.json")

  const files = (await fs.readdir(notesDir)).filter((f) => f.endsWith(".md"))

  console.log(`Processing ${files.length} notes...\n`)

  const notes: {
    slug: string
    title: string
    text: string
    existingLinks: string[]
  }[] = []

  for (const file of files) {
    const content = await fs.readFile(path.join(notesDir, file), "utf-8")
    const { title, description } = extractFrontmatter(content)
    const body = extractBody(content)
    const slug = file.replace(".md", "")

    const text = [title || slug, description || "", body.slice(0, 8000)].join(
      "\n\n"
    )

    notes.push({
      slug,
      title: title || slug,
      text,
      existingLinks: extractExistingLinks(content),
    })
  }

  const embeddings: number[][] = []

  for (let i = 0; i < notes.length; i += BATCH_SIZE) {
    const batch = notes.slice(i, i + BATCH_SIZE)
    const batchNum = Math.floor(i / BATCH_SIZE) + 1
    const totalBatches = Math.ceil(notes.length / BATCH_SIZE)
    console.log(`Embedding batch ${batchNum}/${totalBatches}...`)

    const response = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: batch.map((n) => n.text),
    })

    embeddings.push(...response.data.map((d) => d.embedding))
  }

  const store: EmbeddingStore = {
    model: EMBEDDING_MODEL,
    generatedAt: new Date().toISOString(),
    notes: notes.map((n, i) => ({
      slug: n.slug,
      title: n.title,
      embedding: embeddings[i],
      existingLinks: n.existingLinks,
    })),
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, JSON.stringify(store, null, 2))

  const sizeKB = (JSON.stringify(store).length / 1024).toFixed(1)
  console.log(`\n✓ Embeddings saved to ${outputPath}`)
  console.log(`  Model: ${EMBEDDING_MODEL}`)
  console.log(`  Notes: ${notes.length}`)
  console.log(`  Size: ${sizeKB} KB`)
}

generateEmbeddings().catch(console.error)
