# Whitepaper - AI Agent Guidelines

> **IMPORTANT**: This file should be updated regularly as the project evolves. After making significant changes, update this document to reflect new patterns, decisions, and learnings.

## Project Philosophy

### Core Concept
Andy Matuschak-style sliding panes for documentation. Users click links to open notes in new panes stacking horizontally, creating a "rabbit hole" exploration trail while maintaining context.

### Key UX Principles
1. **Context preservation** - Never lose where you came from
2. **Horizontal stacking** - New panes open to the right
3. **Book spine collapse** - Overflow panes shrink to thin spines showing titles vertically
4. **Duplicate allowed** - Clicking an existing note appends it again (stack becomes [1,2,3,1] not [1])
5. **URL-synced state** - Stack state persists in `?stack=a,b,c` format

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Runtime | Bun | Fast, modern Node alternative |
| Framework | Next.js 14+ (App Router) | SSR, RSC, file-based routing |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS v4 | Utility-first, design tokens |
| UI Components | COSS/UI | Cal.com's component library, Base UI + Tailwind |
| Font | Faculty Glyphic | Distinctive serif with personality |
| Markdown | gray-matter + remark + remark-gfm | Frontmatter + GFM support |

## Architecture

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── notes/[...slug]/    # Dynamic note route with stack handling
│   ├── globals.css         # Tailwind + COSS/UI tokens
│   ├── layout.tsx          # Root layout with header
│   └── page.tsx            # Home page with note listing
├── components/
│   ├── ui/                 # COSS/UI components (auto-generated)
│   ├── PaneContainer.tsx   # Horizontal scroll container
│   ├── NotePane.tsx        # Individual pane (full or spine mode)
│   ├── NoteContent.tsx     # Markdown renderer with link interception
│   ├── BacklinksSection.tsx# Shows notes linking to current
│   ├── HoverPreview.tsx    # Tooltip preview on hover
│   └── KeyboardNavigation.tsx # Arrow/Escape/Home/End handlers
├── lib/
│   ├── types.ts            # Note, BacklinkInfo, NoteGraph types
│   ├── notes.ts            # Note loading, parsing, graph building
│   ├── stack.ts            # URL state parsing/serialization
│   ├── useNoteStack.ts     # React hook for navigation
│   └── utils.ts            # cn() helper for class merging
└── content/notes/          # Markdown source files
```

### Key Patterns

#### Stack State Management
- Root note from URL path: `/notes/evergreen-notes`
- Additional panes from query: `?stack=spaced-repetition,memory`
- Full stack: `[evergreen-notes, spaced-repetition, memory]`

#### CSS-Based Pane Collapse (Obsidian-style)
- Uses `position: sticky` with incrementing `left` offset per pane
- Each pane offsets by 40px: `left: ${index * 40}px`
- Panes stack/overlap as user scrolls right, showing slivers of left panes
- Z-index increases with index so later panes appear on top
- No JavaScript collapse logic - pure CSS behavior

#### Link Interception
- Internal links (relative, not http/mailto) are intercepted
- `pushNote(slug, fromPaneIndex)` appends to stack
- Panes after `fromPaneIndex` are trimmed before appending

## UI Skills (Opinionated Constraints)

### Stack
- MUST use Tailwind CSS defaults (spacing, radius, shadows) before custom values
- MUST use motion/react (formerly framer-motion) when JavaScript animation is required
- SHOULD use tw-animate-css for entrance and micro-animations in Tailwind CSS
- MUST use cn utility (clsx + tailwind-merge) for class logic

### Components
- MUST use accessible component primitives for anything with keyboard or focus behavior (Base UI, React Aria, Radix)
- MUST use the project's existing component primitives first
- NEVER mix primitive systems within the same interaction surface
- SHOULD prefer Base UI for new primitives if compatible with the stack
- MUST add an aria-label to icon-only buttons
- NEVER rebuild keyboard or focus behavior by hand unless explicitly requested

### Interaction
- MUST use an AlertDialog for destructive or irreversible actions
- SHOULD use structural skeletons for loading states
- NEVER use h-screen, h-dvh, vh, dvh, or any viewport-specific CSS units
- MUST use flex-1 with flex containers for full-height layouts
- MUST respect safe-area-inset for fixed elements
- MUST show errors next to where the action happens
- NEVER block paste in input or textarea elements

### Animation
- NEVER add animation unless it is explicitly requested
- MUST animate only compositor props (transform, opacity)
- NEVER animate layout properties (width, height, top, left, margin, padding)
- SHOULD avoid animating paint properties (background, color) except for small, local UI (text, icons)
- SHOULD use ease-out on entrance
- NEVER exceed 200ms for interaction feedback
- MUST pause looping animations when off-screen
- MUST respect prefers-reduced-motion
- NEVER introduce custom easing curves unless explicitly requested
- SHOULD avoid animating large images or full-screen surfaces

### Typography
- MUST use text-balance for headings and text-pretty for body/paragraphs
- MUST use tabular-nums for data
- SHOULD use truncate or line-clamp for dense UI
- NEVER modify letter-spacing (tracking-) unless explicitly requested

### Layout
- MUST use a fixed z-index scale (no arbitrary z-x)
- SHOULD use size-x for square elements instead of w-x + h-x

### Performance
- NEVER animate large blur() or backdrop-filter surfaces
- NEVER apply will-change outside an active animation
- NEVER use useEffect for anything that can be expressed as render logic

### Design
- NEVER use gradients unless explicitly requested
- NEVER use purple or multicolor gradients
- NEVER use glow effects as primary affordances
- SHOULD use Tailwind CSS default shadow scale unless explicitly requested
- MUST give empty states one clear next action
- SHOULD limit accent color usage to one per view
- SHOULD use existing theme or Tailwind CSS color tokens before introducing new ones

## Component Guidelines

### When Using COSS/UI
- Prefer semantic components: `Card`, `Separator`, `Spinner` over raw divs
- Use `cn()` from `@/lib/utils` for conditional classes
- Follow existing import patterns from `@/components/ui/`

### Tailwind Conventions
- Use design tokens: `bg-card`, `text-foreground`, `border-border`
- Responsive: mobile-first with `md:` breakpoints
- Animation: only when explicitly requested, use compositor props only

### TypeScript
- Define types in `src/lib/types.ts`
- Use strict mode, avoid `any`
- Prefer `interface` for object shapes

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Development server (http://localhost:3000)
bun run build        # Production build
bun run start        # Start production server
```

## Updating This Document

After significant changes, update these sections:
1. **Tech Stack** - New dependencies or replacements
2. **Architecture** - Structural changes
3. **Key Patterns** - New conventions or patterns
4. **Component Guidelines** - Style/component standards

Keep this document accurate - it's the source of truth for AI agents working on this codebase.
