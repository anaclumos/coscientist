# Coscientist

> Not AGI but close enough

Coscientist is an open-source system for knowledge production and verification. It is built around a dialectical graph, rebuttal-first workflows, and human sovereignty over knowledge.

## Whitepaper

- The whitepaper lives at `apps/whitepaper/src/content/notes/index.md`.
- All other files in `apps/whitepaper/src/content/notes` are atomic notes linked from the whitepaper.

## Development

Requirements: Node >= 18 and Bun (see `package.json`).

From repo root:

```sh
bun run dev
```

```sh
bun run build
```

Or run the whitepaper app directly:

```sh
cd apps/whitepaper
bun run dev
```
