"use client"

import {
  ArrowLeft01Icon,
  Menu01Icon,
  Share08Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useQuery } from "convex/react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { BlockEditor } from "@/components/editor/block-editor"
import { Button } from "@/components/ui/button"
import { api } from "../../../../../../convex/_generated/api"
import type { Id } from "../../../../../../convex/_generated/dataModel"

export default function DocumentPage() {
  const params = useParams()
  const locale = params.locale as string
  const orgSlug = params.orgSlug as string
  const id = params.id as string

  const document = useQuery(api.blocks.getBlock, {
    blockId: id as Id<"blocks">,
  })

  if (document === undefined) {
    return (
      <main className="min-h-screen">
        <div className="border-border/40 border-b px-6 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div className="h-8 w-48 animate-pulse rounded bg-muted" />
            <div className="flex gap-2">
              <div className="h-9 w-32 animate-pulse rounded bg-muted" />
              <div className="h-9 w-24 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="mx-auto max-w-prose space-y-4">
            <div className="h-12 animate-pulse rounded bg-muted" />
            <div className="h-24 animate-pulse rounded bg-muted" />
            <div className="h-24 animate-pulse rounded bg-muted" />
          </div>
        </div>
      </main>
    )
  }

  if (document === null) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="font-semibold text-[1.75rem] tracking-tight">
            Document not found
          </h1>
          <p className="text-muted-foreground">
            This document may have been deleted or you don't have access to it.
          </p>
          <Link href={`/${locale}/${orgSlug}/workspace`}>
            <Button>
              <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
              Back to Workspace
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <div className="sticky top-0 z-10 border-border/40 border-b bg-background/80 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/${orgSlug}/workspace`}>
              <Button size="icon-sm" variant="ghost">
                <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
              </Button>
            </Link>
            <h1 className="max-w-md truncate font-medium text-[1.375rem] tracking-tight">
              {document.content || "Untitled Document"}
            </h1>
          </div>
          <div className="flex gap-2">
            <Link href={`/${locale}/${orgSlug}/workspace/${id}/graph`}>
              <Button size="sm" variant="outline">
                <HugeiconsIcon icon={Share08Icon} size={16} />
                Graph View
              </Button>
            </Link>
            <Button size="icon-sm" variant="ghost">
              <HugeiconsIcon icon={Menu01Icon} size={16} />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-8">
        <BlockEditor parentId={id as Id<"blocks">} />
      </div>
    </main>
  )
}
