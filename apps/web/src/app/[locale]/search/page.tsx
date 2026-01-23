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
import { springSubtle } from "@/lib/animations"
import { api } from "../../../../convex/_generated/api"

export default function SearchPage() {
  const params = useParams()
  const locale = params.locale as string

  const [searchQuery, setSearchQuery] = useState("")
  const allBlocks = useQuery(api.blocks.getAllBlocks)

  const searchResults = useMemo(() => {
    if (!allBlocks || !searchQuery.trim()) {
      return []
    }

    const query = searchQuery.toLowerCase().trim()

    return allBlocks.filter((block) => {
      const content = String(block.content || "").toLowerCase()
      return content.includes(query)
    })
  }, [allBlocks, searchQuery])

  const isLoading = allBlocks === undefined

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-[1.75rem] font-semibold tracking-tight">
            Search
          </h1>
          <div className="relative">
            <HugeiconsIcon
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              icon={Search01Icon}
              size={18}
            />
            <Input
              autoFocus
              className="pl-12 h-12 text-base"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your blocks..."
              type="search"
              value={searchQuery}
            />
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                className="h-32 bg-muted rounded-2xl animate-pulse"
                key={i}
              />
            ))}
          </div>
        ) : searchQuery.trim() === "" ? (
          <Card className="py-12">
            <CardHeader className="text-center space-y-2">
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
        ) : searchResults.length === 0 ? (
          <Card className="py-12">
            <CardHeader className="text-center space-y-2">
              <CardTitle>No results found</CardTitle>
              <CardDescription>
                Try a different search query or create new content
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Found {searchResults.length} result
              {searchResults.length !== 1 ? "s" : ""}
            </p>
            <div className="space-y-3">
              {searchResults.map((block) => {
                const isDocument = block.type === "document"
                const targetUrl = isDocument
                  ? `/${locale}/workspace/${block._id}`
                  : block.parentId
                    ? `/${locale}/workspace/${block.parentId}`
                    : `/${locale}/workspace`

                return (
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    key={block._id}
                    transition={springSubtle}
                  >
                    <Link href={targetUrl}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0 space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
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
                              className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0"
                              icon={ArrowRight01Icon}
                              size={16}
                            />
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
