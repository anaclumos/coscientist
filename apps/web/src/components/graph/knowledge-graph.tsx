"use client"

import { useMemo } from "react"
import ReactFlow, {
  Background,
  Controls,
  type Edge,
  Handle,
  MarkerType,
  type Node,
  type NodeProps,
  Position,
} from "reactflow"
import "reactflow/dist/style.css"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import type { Doc, Id } from "@/convex/_generated/dataModel"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

type BlockType = "text" | "heading" | "list" | "document"
type EdgeType = "contains" | "supports" | "refutes" | "references"

interface KnowledgeGraphProps {
  documentId: Id<"blocks">
  onNodeClick?: (nodeId: string) => void
  className?: string
}

const EDGE_COLORS: Record<EdgeType, string> = {
  supports: "#22c55e",
  refutes: "#ef4444",
  contains: "#6b7280",
  references: "#3b82f6",
}

const NODE_STYLES: Record<BlockType, string> = {
  document:
    "border-2 border-primary bg-background shadow-lg rounded-lg min-w-[200px]",
  heading: "border border-border bg-card shadow-sm rounded-md min-w-[180px]",
  text: "border border-border bg-card/50 rounded min-w-[150px]",
  list: "border border-border bg-card/50 rounded min-w-[150px]",
}

function extractLabel(block: Doc<"blocks">): string {
  if (block.type === "document" || block.type === "heading") {
    if (typeof block.content === "object" && block.content?.title) {
      return block.content.title
    }
    if (typeof block.content === "string") {
      return block.content
    }
  } else if (typeof block.content === "string") {
    return block.content
  }
  return "Block"
}

function calculateNodePosition(
  index: number,
  isRoot: boolean,
  rootX: number,
  rootY: number,
  startX: number,
  childSpacingX: number,
  childSpacingY: number
): { x: number; y: number } {
  if (isRoot) {
    return { x: rootX, y: rootY }
  }
  const childIndex = index - 1
  return {
    x: startX + childIndex * childSpacingX,
    y: rootY + childSpacingY + (childIndex % 2) * 50,
  }
}

const CustomNode = ({ data }: NodeProps) => {
  const blockType = data.type as BlockType
  const label = data.label
  const content = data.content

  return (
    <article
      aria-label={`${blockType} node: ${label || "Untitled Block"}`}
      className={`px-4 py-3 ${NODE_STYLES[blockType] || NODE_STYLES.text}`}
    >
      <Handle
        aria-label="Connection point (top)"
        className="!bg-muted-foreground"
        position={Position.Top}
        type="target"
      />

      <div className="flex flex-col gap-1">
        <div className="font-mono text-muted-foreground text-xs uppercase tracking-wider opacity-70">
          {blockType}
        </div>
        <div className="line-clamp-2 font-medium text-foreground text-sm">
          {label || "Untitled Block"}
        </div>
        {content && typeof content === "string" && (
          <div className="line-clamp-2 font-mono text-muted-foreground text-xs">
            {content.substring(0, 50)}
          </div>
        )}
      </div>

      <Handle
        aria-label="Connection point (bottom)"
        className="!bg-muted-foreground"
        position={Position.Bottom}
        type="source"
      />
    </article>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

export function KnowledgeGraph({
  documentId,
  onNodeClick,
  className,
}: KnowledgeGraphProps) {
  const prefersReducedMotion = useReducedMotion()

  const rootBlock = useQuery(api.blocks.getBlock, { blockId: documentId })
  const childBlocks = useQuery(api.blocks.getBlocksByParent, {
    parentId: documentId,
  })
  const outgoingEdges = useQuery(api.edges.getEdgesFrom, {
    blockId: documentId,
  })

  const { nodes, edges } = useMemo(() => {
    if (!rootBlock) {
      return { nodes: [], edges: [] }
    }

    const allBlocks = [rootBlock, ...(childBlocks || [])]

    const rootX = 400
    const rootY = 50
    const childSpacingX = 250
    const childSpacingY = 200
    const rowWidth = (childBlocks?.length || 0) * childSpacingX
    const startX = rootX - rowWidth / 2 + childSpacingX / 2

    const flowNodes: Node[] = allBlocks.map((block, index) => {
      const isRoot = block._id === documentId
      const position = calculateNodePosition(
        index,
        isRoot,
        rootX,
        rootY,
        startX,
        childSpacingX,
        childSpacingY
      )
      const label = extractLabel(block)

      return {
        id: block._id,
        type: "custom",
        position,
        data: {
          label,
          type: block.type,
          content:
            typeof block.content === "string"
              ? block.content
              : JSON.stringify(block.content),
        },
      }
    })

    const implicitEdges: Edge[] = (childBlocks || []).map(
      (child: Doc<"blocks">) => ({
        id: `contains-${documentId}-${child._id}`,
        source: documentId,
        target: child._id,
        type: "default",
        label: "contains",
        animated: !prefersReducedMotion,
        style: { stroke: EDGE_COLORS.contains },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: EDGE_COLORS.contains,
        },
        data: { type: "contains" },
      })
    )

    const dbEdges: Edge[] = (outgoingEdges || []).map((edge: Doc<"edges">) => ({
      id: edge._id,
      source: edge.from,
      target: edge.to,
      type: "default",
      label: edge.type,
      style: { stroke: EDGE_COLORS[edge.type as EdgeType] || "#000" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: EDGE_COLORS[edge.type as EdgeType] || "#000",
      },
      data: { type: edge.type },
    }))

    return {
      nodes: flowNodes,
      edges: [...implicitEdges, ...dbEdges],
    }
  }, [rootBlock, childBlocks, outgoingEdges, documentId, prefersReducedMotion])

  const handleNodeClick = (_: React.MouseEvent, node: Node) => {
    if (onNodeClick) {
      onNodeClick(node.id)
    }
  }

  if (!rootBlock) {
    return (
      <div
        className={`flex h-full min-h-[400px] items-center justify-center rounded-lg border border-border border-dashed bg-muted/10 ${className}`}
      >
        <div className="text-muted-foreground text-sm">Loading Graph...</div>
      </div>
    )
  }

  return (
    <section
      aria-label="Knowledge graph visualization"
      className={`h-[600px] w-full overflow-hidden rounded-xl border border-border bg-background/50 ${className}`}
    >
      <ReactFlow
        attributionPosition="bottom-right"
        edges={edges}
        fitView
        maxZoom={2}
        minZoom={0.1}
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
      >
        <Background
          className="opacity-5"
          color="currentColor"
          gap={24}
          size={1}
        />
        <Controls className="!bg-background !border-border !shadow-sm [&>button]:!border-border [&>button]:!text-foreground hover:[&>button]:!bg-muted [&>button]:focus-visible:ring-1 [&>button]:focus-visible:ring-primary/20 [&>button]:focus-visible:ring-inset" />
      </ReactFlow>
    </section>
  )
}
