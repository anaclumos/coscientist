"use client"

import { useUser } from "@clerk/nextjs"
import {
  Add01Icon,
  ArrowRight01Icon,
  Clock01Icon,
  File01Icon,
  InboxIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMutation, useQuery } from "convex/react"
import { motion } from "motion/react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { springSubtle } from "@/lib/animations"
import { api } from "../../../../../convex/_generated/api"

export default function WorkspacePage() {
  const params = useParams()
  const router = useRouter()
  const locale = params.locale as string
  const orgSlug = params.orgSlug as string
  const { user, isLoaded: isUserLoaded } = useUser()

  const allBlocks = useQuery(api.blocks.getAllBlocks)
  const dueReviews = useQuery(api.verification.getDueReviews)
  const documents = useQuery(api.blocks.getBlocksByType, { type: "document" })
  const createBlock = useMutation(api.blocks.createBlock)

  const [quickCaptureText, setQuickCaptureText] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  const handleQuickCapture = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!quickCaptureText.trim() || isCreating) {
      return
    }

    setIsCreating(true)
    try {
      const id = await createBlock({
        type: "document",
        content: quickCaptureText,
      })
      router.push(`/${locale}/${orgSlug}/workspace/${id}`)
    } catch (error) {
      console.error("Failed to create block:", error)
      setIsCreating(false)
    }
  }

  const handleCreateDocument = async () => {
    const id = await createBlock({
      type: "document",
      content: "Untitled Document",
    })
    router.push(`/${locale}/${orgSlug}/workspace/${id}`)
  }

  if (
    !isUserLoaded ||
    allBlocks === undefined ||
    dueReviews === undefined ||
    documents === undefined
  ) {
    return (
      <main className="min-h-screen p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="h-10 w-48 animate-pulse rounded bg-muted" />
          <div className="h-12 w-full animate-pulse rounded bg-muted" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div className="h-40 animate-pulse rounded-xl bg-muted" key={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="h-32 animate-pulse rounded-xl bg-muted" key={i} />
            ))}
          </div>
        </div>
      </main>
    )
  }

  const userId = user?.id

  const inboxBlocks = allBlocks.filter((b) => b.createdBy !== userId)

  const recentActivity = [...allBlocks]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 10)

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="font-semibold text-[1.75rem] tracking-tight">
              Workspace
            </h1>
            <p className="text-base text-muted-foreground">
              Welcome back, {user?.firstName || "Operator"}
            </p>
          </div>
          <Button onClick={handleCreateDocument}>
            <HugeiconsIcon icon={Add01Icon} size={16} />
            New Document
          </Button>
        </div>

        <form className="relative" onSubmit={handleQuickCapture}>
          <Input
            className="h-12 px-4 text-lg shadow-sm"
            disabled={isCreating}
            onChange={(e) => setQuickCaptureText(e.target.value)}
            placeholder="Quick capture... (Press Enter to create document)"
            value={quickCaptureText}
          />
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <Button
              disabled={!quickCaptureText.trim() || isCreating}
              size="sm"
              type="submit"
              variant="ghost"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
            </Button>
          </div>
        </form>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="flex h-full flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <HugeiconsIcon icon={InboxIcon} size={18} />
                <span className="font-medium">Inbox</span>
              </div>
              <CardTitle className="text-2xl">{inboxBlocks.length}</CardTitle>
              <CardDescription>Shared with you</CardDescription>
            </CardHeader>
            <CardContent className="max-h-[300px] min-h-0 flex-1 space-y-2 overflow-y-auto">
              {inboxBlocks.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  No pending items
                </p>
              ) : (
                inboxBlocks.slice(0, 5).map((block) => (
                  <Link
                    className="block rounded-md p-2 transition-colors hover:bg-muted/50"
                    href={`/${locale}/${orgSlug}/workspace/${block._id}`}
                    key={block._id}
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span className="truncate font-medium text-sm">
                        {typeof block.content === "string"
                          ? block.content
                          : "Untitled Block"}
                      </span>
                    </div>
                    <div className="mt-0.5 pl-3.5 text-muted-foreground text-xs">
                      {block.type} •{" "}
                      {new Date(block.updatedAt).toLocaleDateString(locale)}
                    </div>
                  </Link>
                ))
              )}
              {inboxBlocks.length > 5 && (
                <div className="pt-2 text-center text-muted-foreground text-xs">
                  + {inboxBlocks.length - 5} more
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="flex h-full flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <HugeiconsIcon icon={Tick01Icon} size={18} />
                <span className="font-medium">Verification</span>
              </div>
              <CardTitle className="text-2xl">{dueReviews.length}</CardTitle>
              <CardDescription>Due for review</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-end">
              <Link href={`/${locale}/${orgSlug}/verify`}>
                <Button
                  className="w-full"
                  variant={dueReviews.length > 0 ? "default" : "outline"}
                >
                  {dueReviews.length > 0 ? "Review Now" : "All Caught Up"}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="flex h-full flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <HugeiconsIcon icon={Clock01Icon} size={18} />
                <span className="font-medium">Recent Activity</span>
              </div>
              <CardTitle className="text-2xl">
                {recentActivity.length}
              </CardTitle>
              <CardDescription>Last updated blocks</CardDescription>
            </CardHeader>
            <CardContent className="max-h-[300px] min-h-0 flex-1 space-y-2 overflow-y-auto">
              {recentActivity.slice(0, 5).map((block) => (
                <Link
                  className="block rounded-md p-2 transition-colors hover:bg-muted/50"
                  href={`/${locale}/${orgSlug}/workspace/${block._id}`}
                  key={block._id}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate font-medium text-sm">
                      {typeof block.content === "string"
                        ? block.content
                        : "Untitled Block"}
                    </span>
                    <span className="whitespace-nowrap text-muted-foreground text-xs">
                      {new Date(block.updatedAt).toLocaleDateString(locale, {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              className="text-muted-foreground"
              icon={File01Icon}
              size={20}
            />
            <h2 className="font-medium text-lg">My Documents</h2>
          </div>

          {documents.length === 0 ? (
            <Card className="border-dashed py-12">
              <CardHeader className="space-y-4 text-center">
                <CardTitle>No documents yet</CardTitle>
                <CardDescription>
                  Create your first document to get started
                </CardDescription>
                <Button className="mx-auto" onClick={handleCreateDocument}>
                  <HugeiconsIcon icon={Add01Icon} size={16} />
                  Create Document
                </Button>
              </CardHeader>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  key={doc._id}
                  transition={springSubtle}
                >
                  <Link href={`/${locale}/${orgSlug}/workspace/${doc._id}`}>
                    <Card className="group h-full cursor-pointer transition-shadow hover:shadow-md">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <CardTitle className="truncate text-base">
                              {doc.content || "Untitled Document"}
                            </CardTitle>
                            <CardDescription className="mt-2 text-xs">
                              Updated{" "}
                              {new Date(doc.updatedAt).toLocaleDateString(
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
          )}
        </div>
      </div>
    </main>
  )
}
