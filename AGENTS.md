# Manifesto - AI Agent Guidelines

> **IMPORTANT**: Update this document after significant changes to reflect new
> patterns, decisions, and learnings.

## Project Philosophy

### Core Concept

Andy Matuschak-style sliding panes for documentation. Users click links to open
notes in new panes stacking horizontally, creating a "rabbit hole" exploration
trail while maintaining context.

### Visual Inspiration: The Monolith (2001: A Space Odyssey)

The logo and sliding panes are inspired by the **Monolith** from Kubrick's
_2001: A Space Odyssey_ — mysterious, minimal, monochromatic vertical slabs
representing knowledge and evolution. The 3-bar logo (100% → 50% → 20% opacity)
evokes stacked monoliths receding into depth.

### Key UX Principles

1. **Context preservation** - Never lose where you came from
2. **Horizontal stacking** - New panes open to the right
3. **Book spine collapse** - Overflow panes shrink to thin spines showing titles
   vertically
4. **Duplicate allowed** - Clicking an existing note appends it again
5. **URL-synced state** - Stack state persists in `?stack=a,b,c&focus=N` format

## Work Logs (MANDATORY)

After completing any work, AI agents **MUST** create a work log entry in HQ, in both English and Korean.

### Location

`apps/hq/content/docs/logs/YYYYMMDD.mdx`

Check the current day with terminal command.

**IMPORTANT**: Each day should have **exactly ONE log entry per language**. If you work on multiple tasks in a single day, consolidate all work into a single file with multiple sections. Read other Work Logs for styles, and match them. If you find discrepancy in English and Korean, raise the issue to the developer. If language entry is missing, create it.

### Format

```mdx
---
title: "YYYY-MM-DD"
description: "Brief summary of work done"
---

# Work Log: YYYY-MM-DD

## [Feature/Task Name]

**Scope**: `apps/web` or relevant path

### Changes Made

| File           | Change                |
| -------------- | --------------------- |
| `path/to/file` | Description of change |

### Technical Decisions

1. **Decision**: Rationale

### Verification

- TypeScript: Pass/Fail
- Build: Pass/Fail
- Tests: Pass/Fail

### Next Steps

Any follow-up actions required.
```

### When to Log

- New feature implementations
- Significant refactors
- Integration of new libraries/services
- Architecture changes
- Bug fixes with non-trivial investigation

### When NOT to Log

- Trivial typo fixes
- Single-line config changes
- Documentation-only updates (unless significant)

## Tech Stack

| Layer         | Choice                            | Why                                                              |
| ------------- | --------------------------------- | ---------------------------------------------------------------- |
| Runtime       | Bun                               | Fast, modern Node alternative                                    |
| Framework     | Next.js 16 (App Router)           | SSR, RSC, file-based routing                                     |
| Language      | TypeScript                        | Type safety                                                      |
| Styling       | Tailwind CSS v4                   | Utility-first, design tokens                                     |
| UI Components | COSS/UI                           | Cal.com's component library, Base UI + Tailwind                  |
| Animation     | motion/react                      | Performant springs, AnimatePresence, layout                      |
| Font          | Faculty Glyphic                   | Distinctive serif with personality                               |
| Icons         | Hugeicons (core-free)             | Unified icon set across UI surfaces                              |
| Backend       | Convex                            | Reactive DB, realtime sync, file storage, auto-generated types   |
| Realtime      | Convex + ProseMirror              | Collaborative editing with CRDT-like conflict resolution         |
| AI Agents     | Mastra                            | TypeScript-first agent framework with workflows, tools, RAG, MCP |
| Workflows     | Vercel Workflow (WDK)             | Durable, resumable long-running tasks with `"use workflow"`      |
| Hosting       | Vercel                            | Edge-optimized, seamless Next.js integration                     |
| Markdown      | gray-matter + remark + remark-gfm | Frontmatter + GFM support                                        |

## Design Tokens

### Colors

```css
/* Light */
--background: #ffffff;
--foreground: #262626;
--border: rgba(0, 0, 0, 0.08);
--muted: rgba(0, 0, 0, 0.04);
--link: #2563eb;

/* Dark */
--background: #0a0a0a;
--foreground: #ededed;
--border: rgba(255, 255, 255, 0.1);
--muted: rgba(255, 255, 255, 0.04);
--link: #60a5fa;
```

### Typography

| Element | Size     | Weight | Classes                                       |
| ------- | -------- | ------ | --------------------------------------------- |
| H1      | 1.75rem  | 600    | `text-[1.75rem] font-semibold tracking-tight` |
| H2      | 1.375rem | 500    | `text-[1.375rem] font-medium tracking-tight`  |
| Body    | 1rem     | 400    | `text-base leading-[1.8]`                     |
| Mono    | 0.875rem | 400    | `font-mono text-sm tabular-nums`              |

**Fonts**: Faculty Glyphic (primary), Noto Serif (CJK), Iosevka (mono)

### Spacing & Layout

| Token                | Value  | Purpose             |
| -------------------- | ------ | ------------------- |
| `--pane-min-width`   | 20rem  | Expanded pane width |
| `--pane-spine-width` | 2.5rem | Collapsed spine     |
| `max-w-prose`        | 65ch   | Reading width       |

### Z-Index Scale

```css
--z-base: 0;
--z-pane: 10;
--z-dropdown: 100;
--z-sticky: 200;
--z-overlay: 300;
--z-modal: 400;
--z-popover: 500;
--z-toast: 600;
```

## Animation (CRITICAL: Use Motion MCP)

> **MANDATORY**: When implementing ANY animation, **ALWAYS use the Motion MCP
> tools first**. Query `search-motion-codex` for patterns, use
> `generate-css-spring` for CSS springs, and `visualise-spring` to preview.

### Motion MCP Usage

```bash
# Before implementing animation, ALWAYS search Motion Codex first:
mcp_motion_search-motion-codex(platform="react", searchTerm="accordion")
mcp_motion_search-motion-codex(platform="react", searchTerm="drag")

# Generate CSS springs for non-JS animations:
mcp_motion_generate-css-spring(duration=0.2, bounce=0.05)

# Visualize spring curves before committing:
mcp_motion_visualise-spring(duration=0.2, bounce=0.05)
```

### Spring Configurations (src/lib/animations.ts)

| Name           | Duration | Bounce | Use Case                         |
| -------------- | -------- | ------ | -------------------------------- |
| `springSubtle` | 200ms    | 0.05   | Pane enter/exit, collapse/expand |
| `springQuick`  | 150ms    | 0      | Micro-interactions, buttons      |

### Pane Animation Variants

```ts
export const paneVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const paneContentVariants = {
  collapsed: { opacity: 0.4, x: "var(--pane-spine-width)" },
  expanded: { opacity: 1, x: 0 },
};
```

### Animation Rules

- MUST use Motion MCP to search patterns before implementing
- MUST animate only compositor props (`transform`, `opacity`)
- NEVER exceed 200ms for interaction feedback
- MUST respect `prefers-reduced-motion` via `useReducedMotion()` hook
- NEVER animate layout properties (width, height, margin, padding)

## Architecture

### Directory Structure

```
src/
├── app/
│   ├── globals.css          # Tokens, prose layer
│   ├── [locale]/layout.tsx  # Root layout, fonts
│   └── api/og/route.tsx     # OG image generation
├── components/
│   ├── note-pane.tsx        # Main pane component
│   ├── pane-spine.tsx       # Collapsed state
│   ├── pane-container.tsx   # Scroll + collapse detection
│   ├── note-content.tsx     # Markdown renderer
│   ├── all-notes-list.tsx   # Note index
│   └── ui/                  # COSS/UI components
├── lib/
│   ├── animations.ts        # Spring configs
│   └── types.ts             # Note, BacklinkInfo
├── hooks/
│   └── use-reduced-motion.ts
└── mastra/
    ├── agents/              # Agent definitions with instructions, models, tools
    ├── tools/               # Reusable tools (API calls, database queries)
    ├── workflows/           # Multi-step workflow definitions
    └── index.ts             # Mastra configuration and registration
convex/
├── schema.ts                # Database schema (defineSchema, defineTable)
├── _generated/              # Auto-generated types (don't edit)
│   ├── api.d.ts             # Typed function exports
│   ├── server.d.ts          # QueryCtx, MutationCtx types
│   └── dataModel.d.ts       # DataModel, Id<T> types
├── http.ts                  # HTTP endpoints for webhooks
└── functions/               # Queries, mutations, actions
    ├── notes.ts
    └── ...
```

### Key Patterns

#### Stack State Management

- Root note from URL path: `/manifesto/coscientist`
- Additional panes from query: `?stack=dialectical-graph,active-recall`
- Focus parameter: `?stack=a,b&focus=1` (optional, defaults to last)

#### CSS-Based Pane Collapse

- Uses `position: sticky` with incrementing `left` offset per pane
- Each pane: `left: calc(index * var(--pane-spine-width))`
- Z-index: `calc(var(--z-pane) + index)`
- No JavaScript collapse logic - pure CSS behavior

## Convex (Backend & Realtime)

Convex provides the reactive database, file storage, and realtime sync layer.

### Schema Definition

```ts
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  notes: defineTable({
    slug: v.string(),
    title: v.string(),
    content: v.string(),
    locale: v.string(),
  }).index("by_slug_locale", ["slug", "locale"]),
});
```

### Queries & Mutations

```ts
// convex/functions/notes.ts
import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

export const get = query({
  args: { slug: v.string(), locale: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("notes")
      .withIndex("by_slug_locale", (q) =>
        q.eq("slug", args.slug).eq("locale", args.locale),
      )
      .unique();
  },
});
```

### Client Usage (React)

```tsx
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function NotePane({ slug, locale }: { slug: string; locale: string }) {
  const note = useQuery(api.functions.notes.get, { slug, locale });
  // Automatically reactive - re-renders when data changes
}
```

### ProseMirror Collaborative Editing

```tsx
import { useBlockNoteSync } from "@convex-dev/prosemirror-sync";
import { api } from "@/convex/_generated/api";

function Editor({ docId }: { docId: string }) {
  const sync = useBlockNoteSync(api.prosemirrorSync, docId);
  return sync.editor ? <BlockNote editor={sync.editor} /> : <Spinner />;
}
```

## Mastra (AI Agent System)

Mastra is the TypeScript-first AI framework for agents, workflows, and tools.

### Agent Definition

```ts
// src/mastra/agents/researcher.ts
import { Agent } from "@mastra/core";

export const researcherAgent = new Agent({
  name: "researcher",
  instructions: `You are a research assistant that helps find and synthesize information.
    Always cite sources. Be concise.`,
  model: {
    provider: "OPEN_AI",
    name: "gpt-4o",
  },
  tools: [webSearchTool, noteQueryTool],
});
```

### Tool Definition

```ts
// src/mastra/tools/web-search.ts
import { createTool } from "@mastra/core";
import { z } from "zod";

export const webSearchTool = createTool({
  id: "web-search",
  description: "Search the web for information",
  inputSchema: z.object({
    query: z.string().describe("Search query"),
  }),
  execute: async ({ context }) => {
    // Implementation
  },
});
```

### Mastra Configuration

```ts
// src/mastra/index.ts
import { Mastra } from "@mastra/core";
import { researcherAgent } from "./agents/researcher";
import { webSearchTool } from "./tools/web-search";

export const mastra = new Mastra({
  agents: { researcher: researcherAgent },
  tools: { webSearch: webSearchTool },
});
```

## Vercel Workflow (Durable Tasks)

Vercel Workflow (WDK) enables long-running, resumable tasks.

### Workflow Definition

```ts
// src/app/api/workflows/translate/route.ts
export async function translateNote(noteId: string) {
  "use workflow";

  const note = await fetchNote(noteId);
  const translations = await translateToAllLocales(note);
  await saveTranslations(translations);

  return { success: true, count: translations.length };
}
```

### Step Definition

```ts
async function translateToAllLocales(note: Note) {
  "use step";

  // This step is automatically retried on failure
  // and persisted for durability
  const locales = ["ja", "ko", "zh-CN", "es", "fr"];
  return Promise.all(locales.map((l) => translateTo(note, l)));
}
```

### Key Concepts

| Directive        | Purpose                                      |
| ---------------- | -------------------------------------------- |
| `"use workflow"` | Marks function as durable (survives crashes) |
| `"use step"`     | Marks unit of work (auto-retry, persistence) |
| `sleep()`        | Pause without holding compute, resume later  |

## UI Constraints

### Components

- MUST use COSS/UI / Base UI primitives for keyboard/focus behavior
- MUST use the project's existing component primitives first
- MUST add `aria-label` to icon-only buttons
- NEVER rebuild keyboard or focus behavior by hand

### Animation

- MUST use Motion MCP tools (`search-motion-codex`, `generate-css-spring`)
- MUST use `motion/react` for JavaScript animations
- SHOULD use `tw-animate-css` for CSS-only micro-animations
- MUST use `cn()` utility for class logic

### Typography

- MUST use `text-balance` for headings, `text-pretty` for body
- MUST use `tabular-nums` for numerical data
- NEVER modify `letter-spacing` unless explicitly requested

### Layout

- MUST use fixed z-index scale (no arbitrary `z-[999]`)
- NEVER use `h-screen`, `vh`, `dvh` - use `flex-1` instead
- MUST respect `safe-area-inset` for fixed elements

### Design

- NEVER use gradients unless explicitly requested
- NEVER use glow effects as primary affordances
- SHOULD use existing theme tokens before new colors

### Icons

- NEVER use unicode characters for icons (→, ←, ✓, ×, •, etc.)
- MUST use Hugeicons via `@hugeicons/react` and `@hugeicons/core-free-icons`
- Import pattern: `import { HugeiconsIcon } from "@hugeicons/react"` + `import { IconName } from "@hugeicons/core-free-icons"`
- Usage: `<HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={1.5} />`
- Common icons: `Menu01Icon`, `ArrowRight01Icon`, `Cancel01Icon`, `Tick01Icon`

## Dark Mode Effects

```tsx
// Ambient gradients (pane background)
<div className="opacity-0 dark:opacity-100" style={{
  background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
  filter: "blur(80px)",
}} />

// Gradient text (titles) - Monolith aesthetic
<h1 className="dark:bg-gradient-to-br dark:from-white dark:via-white dark:to-neutral-500 dark:bg-clip-text dark:text-transparent">
```

## Logo (The Monolith)

3 vertical bars with decreasing opacity — stacked monoliths receding into depth.

```tsx
<svg viewBox="0 0 32 32">
  <rect x="5" y="6" width="6" height="20" fill="white" fillOpacity="1" />
  <rect x="13" y="6" width="6" height="20" fill="white" fillOpacity="0.5" />
  <rect x="21" y="6" width="6" height="20" fill="white" fillOpacity="0.2" />
</svg>
```

## COSS/UI Patterns

### Component Anatomy

```tsx
import { SomePrimitive } from "@base-ui/react/some-primitive";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva("base-classes", {
  variants: { size: { sm: "...", lg: "..." } },
});

function Component({ className, size, ...props }) {
  return (
    <SomePrimitive className={cn(variants({ size }), className)} {...props} />
  );
}
```

### Key Patterns

- **Polymorphism**: `<Button render={<a href="/" />}>` renders as `<a>`
- **Data slots**: `data-slot="button"` for CSS targeting
- **Theme tokens**: Use `bg-card`, `text-foreground`, `border-border`

### Available Components

| Category   | Components                                        |
| ---------- | ------------------------------------------------- |
| Layout     | Card, Separator, Frame, Group                     |
| Forms      | Button, Input, Textarea, Select, Switch, Checkbox |
| Feedback   | Alert, AlertDialog, Toast, Spinner, Skeleton      |
| Overlay    | Dialog, Sheet, Popover, Tooltip, PreviewCard      |
| Disclosure | Accordion, Collapsible, Toggle                    |

### Nested Sheet Pattern (Mobile Drill-Down)

For mobile "More" menus with sub-options, use nested Sheets:

```tsx
// Parent state controls
const [isMainOpen, setIsMainOpen] = useState(false)
const [isChildOpen, setIsChildOpen] = useState(false)

// Main Sheet
<Sheet open={isMainOpen} onOpenChange={setIsMainOpen}>
  <SheetTrigger render={<Button />}>Menu</SheetTrigger>
  <SheetPopup side="bottom">
    <SheetHeader><SheetTitle>More</SheetTitle></SheetHeader>
    <SheetPanel>
      <Button onClick={() => setIsChildOpen(true)}>
        Sub-option <ArrowRight01Icon />
      </Button>
    </SheetPanel>
  </SheetPopup>
</Sheet>

// Nested Sheet (transparent backdrop to overlay parent)
<Sheet open={isChildOpen} onOpenChange={setIsChildOpen}>
  <SheetPopup side="bottom" backdropClassName="bg-transparent">
    <SheetHeader className="flex-row items-center gap-2 border-b">
      <Button onClick={() => setIsChildOpen(false)} size="icon" variant="ghost">
        <ArrowLeft01Icon />
      </Button>
      <SheetTitle>Sub-option</SheetTitle>
    </SheetHeader>
    <SheetPanel>
      {/* Child content */}
    </SheetPanel>
  </SheetPopup>
</Sheet>
```

Key points:

- Use `backdropClassName="bg-transparent"` on child sheets to prevent double-darkening
- Child sheet headers include back button (`ArrowLeft01Icon`)
- Selection in child should close BOTH sheets: `setIsChildOpen(false); setIsMainOpen(false);`
- Requires `backdropClassName` prop added to `SheetPopup` in `sheet.tsx`

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Development server (localhost:3000)
bun run build        # Production build
bun run start        # Start production server
```

## Content Management

### Adding Notes

Create `src/content/manifesto/en/your-slug.md`:

```md
---
title: Your Title
description: One-line description
---

Content here. Link with [Display Text](./other-slug).
```

**Link format**: `[Text](./slug)` — not wikilinks (`[[slug]]`).

### Korean Manifesto Writing Pattern (Assertive Academic)

**Principles**

- Declarative, assertive tone: state claims as facts, not possibilities.
- Remove colloquial fillers/intensifiers (뭔가, 그냥, 너무, 되게, 꽤).
- Prefer direct predicates: "...할 수 있다" → "...한다/된다"; avoid "...해준다" → "...한다/하게 한다".
- Keep sentences tight; split long chains; avoid softeners like "아마/모른다/일지도".
- Standardize terminology and avoid mixed English labels inside body text.

**Standard Terms**

- 책임선 (not 책임 경계선)
- 증거 구간 (not 증거 범위/근거 구간/스팬)
- 정의 표류 (not 정의 드리프트)
- 다국어 지식 메쉬 (not 메시)
- 오퍼레이터 (not Operator)
- 변증법적 그래프 / 노드 / 엣지

**Examples**

```md
- Before: "하지만 뭔가가 빠져 있었다."
  After: "하지만 핵심이 빠져 있었다."

- Before: "이 시스템은 정보를 다시 떠올리게 해줄 수 있다."
  After: "이 시스템은 정보를 다시 떠올리게 한다."

- Before: "번역 오류가 합의가 있는 것처럼 보이게 만들 수 있다."
  After: "번역 오류는 합의가 있는 것처럼 보이게 만든다."

- Before: "근거 범위와 책임 경계선을 추적한다."
  After: "증거 구간과 책임선을 추적한다."

- Before: "Operator는 AI 출력의 소비자다."
  After: "오퍼레이터는 AI 출력의 소비자다."
```

### Scripts

| Command                                      | Purpose                           |
| -------------------------------------------- | --------------------------------- |
| `bun run scripts/translate.ts markdown`      | Translate new/changed notes       |
| `bun run scripts/translate.ts backfill`      | Add hashes without re-translating |
| `bun run scripts/generate-embeddings.ts`     | Regenerate embeddings             |
| `bun run scripts/suggest-mentions.ts`        | Find link suggestions             |
| `bun run scripts/inject-mentions.ts --apply` | Apply high-confidence links       |

### Workflow

```bash
# 1. Create English note
# 2. Translate
bun run scripts/translate.ts markdown
# 3. Update embeddings & suggestions
bun run scripts/generate-embeddings.ts
bun run scripts/suggest-mentions.ts
```

### Translation Provenance

Translated files include:

- `sourceLocale: en`
- `sourceHash: abc123...` (12-char hash of English content)
- `translatedAt: 2026-01-15`

Editing English auto-detects staleness on next translate run.

### Locales (24)

zh-CN, zh-TW, hi, es, fr, ar, bn, pt, ru, id, ja, fa, de, vi, ta, te, tr, ko, ur,
it, th, pl, uk, nl

## Accessibility

| Feature        | Implementation                                    |
| -------------- | ------------------------------------------------- |
| Reduced motion | `useReducedMotion()` → `{ duration: 0 }`          |
| Keyboard       | `←/→` navigate, `Escape` close, `Enter` expand    |
| Focus          | `focus-visible:ring-1 ring-primary/20 ring-inset` |
| Semantic       | `<article>` for panes, `<aside>` for list         |

_Last updated: January 2026_
