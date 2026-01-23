"use client"

import {
  Add01Icon,
  CheckListIcon,
  Delete02Icon,
  Heading01Icon,
  TextIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMutation, useQuery } from "convex/react"
import { AnimatePresence, motion } from "motion/react"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { springSubtle } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { api } from "../../../convex/_generated/api"
import { Id } from "../../../convex/_generated/dataModel"

type BlockType = "text" | "heading" | "list" | "document"

interface BlockEditorProps {
  parentId?: Id<"blocks">
  blockId?: Id<"blocks">
  className?: string
}

export function BlockEditor({
  parentId,
  blockId,
  className,
}: BlockEditorProps) {
  const prefersReducedMotion = useReducedMotion()
  const transition = prefersReducedMotion ? { duration: 0 } : springSubtle

  const blocks = useQuery(
    api.blocks.getBlocksByParent,
    parentId ? { parentId } : "skip"
  )
  const singleBlock = useQuery(
    api.blocks.getBlock,
    blockId ? { blockId } : "skip"
  )

  const createBlock = useMutation(api.blocks.createBlock)

  const handleAddBlock = useCallback(
    async (type: BlockType = "text") => {
      if (!parentId) return
      await createBlock({
        type,
        content: "",
        parentId,
      })
    },
    [createBlock, parentId]
  )

  if (parentId && blocks === undefined) {
    return (
      <div className="animate-pulse space-y-4 p-4">
        <div className="h-8 bg-muted rounded w-3/4"></div>
        <div className="h-24 bg-muted rounded"></div>
        <div className="h-24 bg-muted rounded"></div>
      </div>
    )
  }

  if (blockId && singleBlock === undefined) {
    return <div className="animate-pulse p-4 h-24 bg-muted rounded"></div>
  }

  return (
    <div className={cn("w-full max-w-prose mx-auto space-y-4", className)}>
      <AnimatePresence mode="popLayout">
        {parentId &&
          blocks?.map((block) => <BlockItem block={block} key={block._id} />)}

        {blockId && singleBlock && (
          <BlockItem block={singleBlock} key={singleBlock._id} />
        )}
      </AnimatePresence>

      {parentId && (
        <motion.div
          animate={{ opacity: 1 }}
          className="flex gap-2 pt-4 border-t border-border/40"
          initial={{ opacity: 0 }}
          layout
        >
          <Button
            className="text-muted-foreground hover:text-foreground"
            onClick={() => handleAddBlock("text")}
            size="sm"
            variant="ghost"
          >
            <HugeiconsIcon className="mr-2" icon={Add01Icon} size={16} />
            Add Text
          </Button>
          <Button
            className="text-muted-foreground hover:text-foreground"
            onClick={() => handleAddBlock("heading")}
            size="sm"
            variant="ghost"
          >
            <HugeiconsIcon className="mr-2" icon={Heading01Icon} size={16} />
            Add Heading
          </Button>
          <Button
            className="text-muted-foreground hover:text-foreground"
            onClick={() => handleAddBlock("list")}
            size="sm"
            variant="ghost"
          >
            <HugeiconsIcon className="mr-2" icon={CheckListIcon} size={16} />
            Add List
          </Button>
        </motion.div>
      )}
    </div>
  )
}

interface BlockItemProps {
  block: any
}

function BlockItem({ block }: BlockItemProps) {
  const prefersReducedMotion = useReducedMotion()
  const transition = prefersReducedMotion ? { duration: 0 } : springSubtle

  const updateBlock = useMutation(api.blocks.updateBlock)
  const deleteBlock = useMutation(api.blocks.deleteBlock)

  const [content, setContent] = useState(block.content || "")

  useEffect(() => {
    const timer = setTimeout(() => {
      if (content !== block.content) {
        updateBlock({
          blockId: block._id,
          content,
        })
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [content, block.content, block._id, updateBlock])

  const handleDelete = async () => {
    await deleteBlock({ blockId: block._id })
  }

  const handleTypeChange = async (newType: string) => {
    await updateBlock({
      blockId: block._id,
      type: newType as BlockType,
    })
  }

  const getStyles = () => {
    switch (block.type) {
      case "heading":
        return "text-[1.375rem] font-medium tracking-tight leading-tight min-h-[2.5rem]"
      case "list":
        return "text-base leading-[1.8] pl-2"
      case "text":
      default:
        return "text-base leading-[1.8]"
    }
  }

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="group relative flex items-start gap-2"
      exit={{ opacity: 0, x: -20 }}
      initial={{ opacity: 0, y: 10 }}
      layout
      transition={springSubtle}
    >
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute -left-8 flex flex-col gap-1">
        <Select onValueChange={handleTypeChange} value={block.type}>
          <SelectTrigger
            aria-label="Change block type"
            className="h-6 w-6 p-0 border-none bg-transparent shadow-none focus:ring-0 focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-inset"
          >
            <div className="p-1 hover:bg-muted rounded cursor-pointer text-muted-foreground">
              {block.type === "heading" && (
                <HugeiconsIcon icon={Heading01Icon} size={14} />
              )}
              {block.type === "list" && (
                <HugeiconsIcon icon={CheckListIcon} size={14} />
              )}
              {block.type === "text" && (
                <HugeiconsIcon icon={TextIcon} size={14} />
              )}
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text">Text</SelectItem>
            <SelectItem value="heading">Heading</SelectItem>
            <SelectItem value="list">List</SelectItem>
          </SelectContent>
        </Select>

        <button
          aria-label="Delete block"
          className="p-1 hover:bg-red-100 hover:text-red-600 rounded text-muted-foreground transition-colors focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-inset"
          onClick={handleDelete}
        >
          <HugeiconsIcon icon={Delete02Icon} size={14} />
        </button>
      </div>

      {block.type === "list" && (
        <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
      )}

      <Textarea
        aria-label={`${block.type} content`}
        className={cn(
          "resize-none overflow-hidden bg-transparent border-none shadow-none focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-inset p-0 min-h-[1.8rem]",
          getStyles(),
          block.type === "heading" ? "placeholder:text-muted-foreground/50" : ""
        )}
        onChange={(e) => setContent(e.target.value)}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement
          target.style.height = "auto"
          target.style.height = `${target.scrollHeight}px`
        }}
        placeholder={block.type === "heading" ? "Heading" : "Type something..."}
        ref={(ref) => {
          if (ref) {
            ref.style.height = "auto"
            ref.style.height = `${ref.scrollHeight}px`
          }
        }}
        rows={1}
        value={content}
      />
    </motion.div>
  )
}
