"use client"

import { ArrowRight01Icon, Search01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useQuery } from "convex/react"
import { motion } from "motion/react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useMemo, useState } from "react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api"
import { springSubtle } from "@/lib/animations"

export default function SearchPage() {
  const params = useParams()
  const locale = params.locale as string
  const orgSlug = params.orgSlug as string

  const [searchQuery, setSearchQuery] = useState("")
  const allBlocks = useQuery(api.blocks.getAllBlocks)

  const searchResults = useMemo(() => {
    if (!(allBlocks && searchQuery.trim())) {
      return []
    }

    const query = searchQuery.toLowerCase().trim()

    return allBlocks.filter((block) => {
      const content = String(block.content || "").toLowerCase()
      return content.includes(query)
    })
  }, [allBlocks, searchQuery])

  const isLoading = allBlocks === undefined

  const getTargetUrl = (block: NonNullable<typeof allBlocks>[number]) => {
    const isDocument = block.type === "document"
    if (isDocument) {
      return `/${locale}/${orgSlug}/workspace/${block._id}`
    }
    if (block.parentId) {
      return `/${locale}/${orgSlug}/workspace/${block.parentId}`
    }
    return `/${locale}/${orgSlug}/workspace`
  }

  const renderSearchContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div className="h-32 animate-pulse rounded-2xl bg-muted" key={i} />
          ))}
        </div>
      )
    }

    if (searchQuery.trim() === "") {
      return (
        <Card className="py-12">
          <CardHeader className="space-y-2 text-center">
            <HugeiconsIcon
              className="mx-auto text-muted-foreground/40"
              icon={Search01Icon}
              size={48}
            />
            <CardTitle>Start searching</CardTitle>
            <CardDescription>
              Enter a search query to find blocks across your workspace
            </CardDescription>
          </CardHeader>
        </Card>
      )
    }

    if (searchResults.length === 0) {
      return (
        <Card className="py-12">
          <CardHeader className="space-y-2 text-center">
            <CardTitle>No results found</CardTitle>
            <CardDescription>
              Try a different search query or create new content
            </CardDescription>
          </CardHeader>
        </Card>
      )
    }

    return (
      <div className="space-y-4">
        <p className="text-muted-foreground text-sm">
          Found {searchResults.length} result
          {searchResults.length !== 1 ? "s" : ""}
        </p>
        <div className="space-y-3">
          {searchResults.map((block) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              key={block._id}
              transition={springSubtle}
            >
              <Link href={getTargetUrl(block)}>
                <Card className="group cursor-pointer transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-muted-foreground text-xs uppercase tracking-wider">
                            {block.type}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2">
                          {block.content || "Untitled"}
                        </CardTitle>
                        <CardDescription>
                          Updated{" "}
                          {new Date(block.updatedAt).toLocaleDateString(
                            locale,
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </CardDescription>
                      </div>
                      <HugeiconsIcon
                        className="shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                        icon={ArrowRight01Icon}
                        size={16}
                      />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="font-semibold text-[1.75rem] tracking-tight">
            Search
          </h1>
          <div className="relative">
            <HugeiconsIcon
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground"
              icon={Search01Icon}
              size={18}
            />
            <Input
              autoFocus
              className="h-12 pl-12 text-base"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your blocks..."
              type="search"
              value={searchQuery}
            />
          </div>
        </div>

        {renderSearchContent()}
      </div>
    </main>
  )
}
