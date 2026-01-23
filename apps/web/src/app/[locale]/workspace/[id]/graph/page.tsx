"use client"

import { ArrowLeft01Icon, Edit02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useQuery } from "convex/react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { KnowledgeGraph } from "@/components/graph/knowledge-graph"
import { Button } from "@/components/ui/button"
import { api } from "../../../../../../convex/_generated/api"
import { Id } from "../../../../../../convex/_generated/dataModel"

export default function GraphViewPage() {
  const params = useParams()
  const locale = params.locale as string
  const id = params.id as string

  const document = useQuery(api.blocks.getBlock, {
    blockId: id as Id<"blocks">,
  })

  if (document === undefined) {
    return (
      <main className="min-h-screen">
        <div className="border-b border-border/40 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="h-8 bg-muted rounded w-48 animate-pulse" />
            <div className="flex gap-2">
              <div className="h-9 bg-muted rounded w-32 animate-pulse" />
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-5rem)] bg-muted/20 animate-pulse" />
      </main>
    )
  }

  if (document === null) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-[1.75rem] font-semibold tracking-tight">
            Document not found
          </h1>
          <p className="text-muted-foreground">
            This document may have been deleted or you don't have access to it.
          </p>
          <Link href={`/${locale}/workspace`}>
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
    <main className="min-h-screen flex flex-col">
      <div className="border-b border-border/40 px-6 py-4 bg-background z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/${locale}/workspace/${id}`}>
              <Button size="icon-sm" variant="ghost">
                <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
              </Button>
            </Link>
            <div>
              <h1 className="text-[1.375rem] font-medium tracking-tight truncate max-w-md">
                {document.content || "Untitled Document"}
              </h1>
              <p className="text-sm text-muted-foreground">Graph View</p>
            </div>
          </div>
          <Link href={`/${locale}/workspace/${id}`}>
            <Button size="sm" variant="outline">
              <HugeiconsIcon icon={Edit02Icon} size={16} />
              Edit Document
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex-1 relative">
        <KnowledgeGraph documentId={id as Id<"blocks">} />
      </div>
    </main>
  )
}
