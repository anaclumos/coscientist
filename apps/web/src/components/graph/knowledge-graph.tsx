"use client"

import { useMemo } from "react"
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Handle,
  MarkerType,
  Node,
  NodeProps,
  Position,
} from "reactflow"
import "reactflow/dist/style.css"
import { useQuery } from "convex/react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { api } from "../../../convex/_generated/api"
import { Doc, Id } from "../../../convex/_generated/dataModel"

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

const CustomNode = ({ data, type }: NodeProps) => {
  const blockType = data.type as BlockType
  const label = data.label
  const content = data.content

  return (
    <div
      aria-label={`${blockType} node: ${label || "Untitled Block"}`}
      className={`px-4 py-3 ${NODE_STYLES[blockType] || NODE_STYLES.text}`}
      role="article"
    >
      <Handle
        aria-label="Connection point (top)"
        className="!bg-muted-foreground"
        position={Position.Top}
        type="target"
      />

      <div className="flex flex-col gap-1">
        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground opacity-70">
          {blockType}
        </div>
        <div className="font-medium text-sm text-foreground line-clamp-2">
          {label || "Untitled Block"}
        </div>
        {content && typeof content === "string" && (
          <div className="text-xs text-muted-foreground line-clamp-2 font-mono">
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
    </div>
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
    if (!rootBlock) return { nodes: [], edges: [] }

    const allBlocks = [rootBlock, ...(childBlocks || [])]

    const rootX = 400
    const rootY = 50
    const childSpacingX = 250
    const childSpacingY = 200
    const rowWidth = (childBlocks?.length || 0) * childSpacingX
    const startX = rootX - rowWidth / 2 + childSpacingX / 2

    const flowNodes: Node[] = allBlocks.map((block, index) => {
      const isRoot = block._id === documentId

      let position = { x: rootX, y: rootY }
      if (!isRoot) {
        const childIndex = index - 1
        position = {
          x: startX + childIndex * childSpacingX,
          y: rootY + childSpacingY + (childIndex % 2) * 50,
        }
      }

      let label = "Block"
      if (block.type === "document" || block.type === "heading") {
        if (typeof block.content === "object" && block.content?.title) {
          label = block.content.title
        } else if (typeof block.content === "string") {
          label = block.content
        }
      } else {
        if (typeof block.content === "string") {
          label = block.content
        }
      }

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
  }, [rootBlock, childBlocks, outgoingEdges, documentId])

  const handleNodeClick = (_: React.MouseEvent, node: Node) => {
    if (onNodeClick) {
      onNodeClick(node.id)
    }
  }

  if (!rootBlock) {
    return (
      <div
        className={`flex items-center justify-center h-full min-h-[400px] bg-muted/10 rounded-lg border border-dashed border-border ${className}`}
      >
        <div className="text-muted-foreground text-sm">Loading Graph...</div>
      </div>
    )
  }

  return (
    <div
      aria-label="Knowledge graph visualization"
      className={`h-[600px] w-full bg-background/50 rounded-xl border border-border overflow-hidden ${className}`}
      role="region"
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
    </div>
  )
}
