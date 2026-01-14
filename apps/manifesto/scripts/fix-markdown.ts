import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import OpenAI from "openai"

const openai = new OpenAI()

const SCRIPT_DIR = import.meta.dirname
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..")
const NOTES_DIR = path.join(PROJECT_ROOT, "src/content/notes")

const CONCURRENCY_LIMIT = 16
const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000

const FRONTMATTER_BODY_PATTERN = /^---[\s\S]*?---\n([\s\S]*)$/
const LINK_DOUBLE_PAREN_PATTERN = /(?<!\([^\]]*)\]\([^)]+\)\)/
const ORPHAN_PAREN_PUNCT_PATTERN = /\s\)[.,]/
const ORPHAN_PAREN_WORD_PATTERN = /\s\)\s+[a-z]/

interface FileIssue {
  filePath: string
  type: "frontmatter" | "markdown"
  error: string
}

interface FixResult {
  filePath: string
  fixed: boolean
  error?: string
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function executeWithRetry<T>(
  fn: () => Promise<T>,
  taskId: string,
  maxRetries = MAX_RETRIES
): Promise<T> {
  let lastError: Error | undefined

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))

      if (attempt === maxRetries) {
        console.error(`✗ ${taskId}: Failed after ${maxRetries + 1} attempts`)
        throw lastError
      }

      const delay = BASE_DELAY_MS * 2 ** attempt
      console.log(
        `⟳ ${taskId}: Retry ${attempt + 1}/${maxRetries} in ${delay}ms...`
      )
      await sleep(delay)
    }
  }

  throw lastError
}

function detectFrontmatterIssue(content: string): string | null {
  try {
    matter(content)
    return null
  } catch (err) {
    return err instanceof Error ? err.message : String(err)
  }
}

function detectMarkdownIssues(content: string): boolean {
  const bodyMatch = content.match(FRONTMATTER_BODY_PATTERN)
  const body = bodyMatch ? bodyMatch[1] : content

  if (LINK_DOUBLE_PAREN_PATTERN.test(body)) {
    return true
  }
  if (ORPHAN_PAREN_PUNCT_PATTERN.test(body)) {
    return true
  }
  if (ORPHAN_PAREN_WORD_PATTERN.test(body)) {
    return true
  }

  return false
}

async function fixWithAI(content: string, errorMsg?: string): Promise<string> {
  const systemPrompt = `You are a Markdown/YAML syntax expert. Fix ALL syntax issues in this markdown file.

FRONTMATTER FIXES (between --- delimiters):
1. If title or description contains a colon (:), wrap the ENTIRE value in double quotes
2. Example: description: Design from 2001: Odyssey → description: "Design from 2001: Odyssey"
3. Keep sourceLocale, sourceHash, translatedAt fields unchanged

MARKDOWN BODY FIXES:
1. Remove orphaned closing parentheses: " )." → "." and " )," → ","
2. Remove double )) after links: [text](./slug)) → [text](./slug)
3. Remove orphaned " ) " in middle of sentences

STRICT RULES:
1. Keep EXACT same line breaks and paragraph structure
2. Do NOT reflow or reformat text
3. Do NOT change any words or meaning
4. Return ONLY the fixed markdown file, nothing else

${errorMsg ? `YAML ERROR: ${errorMsg}` : ""}`

  const response = await openai.responses.create({
    model: "gpt-4.1-nano",
    input: [
      { role: "developer", content: systemPrompt },
      { role: "user", content },
    ],
  })

  return response.output_text.trim()
}

async function processFile(issue: FileIssue): Promise<FixResult> {
  const { filePath, type, error: issueError } = issue
  const content = await fs.readFile(filePath, "utf-8")
  const relativePath = path.relative(NOTES_DIR, filePath)

  console.log(`🔧 ${relativePath}: Fixing ${type}...`)

  try {
    const errorMsg = type === "frontmatter" ? issueError : undefined
    const fixed = await executeWithRetry(
      () => fixWithAI(content, errorMsg),
      relativePath
    )
    await fs.writeFile(filePath, fixed)
    return { filePath, fixed: true }
  } catch (err) {
    return {
      filePath,
      fixed: false,
      error: err instanceof Error ? err.message : String(err),
    }
  }
}

async function getAllMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = []

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        const subFiles = await getAllMarkdownFiles(fullPath)
        files.push(...subFiles)
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath)
      }
    }
  } catch {
    return []
  }

  return files
}

async function findFilesWithIssues(files: string[]): Promise<FileIssue[]> {
  const issues: FileIssue[] = []

  for (const filePath of files) {
    const content = await fs.readFile(filePath, "utf-8")

    const frontmatterError = detectFrontmatterIssue(content)
    if (frontmatterError) {
      issues.push({ filePath, type: "frontmatter", error: frontmatterError })
      continue
    }

    if (detectMarkdownIssues(content)) {
      issues.push({
        filePath,
        type: "markdown",
        error: "Syntax issues detected",
      })
    }
  }

  return issues
}

async function main() {
  const args = process.argv.slice(2)
  const mode = args.find((a) => a === "--apply" || a === "apply")
    ? "apply"
    : "dry-run"
  const localeFilter = args.find(
    (a) => !a.startsWith("-") && a !== "apply" && a !== "dry-run"
  )

  console.log("\n🔍 Scanning markdown files for issues...\n")

  let targetDir = NOTES_DIR
  if (localeFilter) {
    targetDir = path.join(NOTES_DIR, localeFilter)
    console.log(`Filtering to locale: ${localeFilter}`)
  }

  const files = await getAllMarkdownFiles(targetDir)
  console.log(`Found ${files.length} markdown files\n`)

  const issues = await findFilesWithIssues(files)

  if (issues.length === 0) {
    console.log("✅ No issues found! All markdown files are clean.\n")
    return
  }

  console.log(`Found ${issues.length} files with issues:\n`)

  const frontmatterIssues = issues.filter((i) => i.type === "frontmatter")
  const markdownIssues = issues.filter((i) => i.type === "markdown")

  if (frontmatterIssues.length > 0) {
    console.log(`❌ Frontmatter errors (${frontmatterIssues.length}):`)
    for (const issue of frontmatterIssues) {
      const relativePath = path.relative(NOTES_DIR, issue.filePath)
      console.log(`   ${relativePath}`)
    }
    console.log()
  }

  if (markdownIssues.length > 0) {
    console.log(`⚠️  Markdown syntax issues (${markdownIssues.length}):`)
    for (const issue of markdownIssues.slice(0, 20)) {
      const relativePath = path.relative(NOTES_DIR, issue.filePath)
      console.log(`   ${relativePath}`)
    }
    if (markdownIssues.length > 20) {
      console.log(`   ... and ${markdownIssues.length - 20} more`)
    }
    console.log()
  }

  if (mode !== "apply") {
    console.log("ℹ️  This was a dry-run. No files were modified.")
    console.log("   Run with '--apply' to fix issues using AI:\n")
    console.log("   bun run scripts/fix-markdown.ts --apply")
    console.log("   bun run scripts/fix-markdown.ts --apply en\n")
    return
  }

  console.log(`\n📝 Fixing ${issues.length} files using AI (gpt-4.1-nano)...\n`)

  const results: FixResult[] = []
  const executing = new Set<Promise<void>>()

  for (const issue of issues) {
    const promise = (async () => {
      const result = await processFile(issue)
      results.push(result)
    })()

    executing.add(promise)
    promise.finally(() => executing.delete(promise))

    if (executing.size >= CONCURRENCY_LIMIT) {
      await Promise.race(executing)
    }
  }

  await Promise.all(executing)

  const fixed = results.filter((r) => r.fixed)
  const failed = results.filter((r) => r.error)

  console.log(`\n${"=".repeat(60)}`)
  console.log("SUMMARY")
  console.log(`${"=".repeat(60)}`)
  console.log(`  ✅ Fixed: ${fixed.length}`)
  console.log(`  ❌ Failed: ${failed.length}`)
  console.log(`${"=".repeat(60)}\n`)

  if (failed.length > 0) {
    console.log("Failed files:")
    for (const result of failed) {
      const relativePath = path.relative(NOTES_DIR, result.filePath)
      console.log(`  ${relativePath}: ${result.error}`)
    }
  }
}

main().catch(console.error)
