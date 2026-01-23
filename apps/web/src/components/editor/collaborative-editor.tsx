"use client"

import {
  Alert01Icon,
  Loading03Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  collab,
  getVersion,
  receiveTransaction,
  sendableSteps,
} from "@tiptap/pm/collab"
import { schema } from "@tiptap/pm/schema-basic"
import { EditorState } from "@tiptap/pm/state"
import { Step } from "@tiptap/pm/transform"
import { EditorView } from "@tiptap/pm/view"
import { useConvex, useQuery } from "convex/react"
import { useCallback, useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"
import { api } from "../../../convex/_generated/api"

interface CollaborativeEditorProps {
  documentId: string
}

type SyncStatus = "loading" | "connected" | "syncing" | "error"

export function CollaborativeEditor({ documentId }: CollaborativeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const viewRef = useRef<EditorView | null>(null)
  const [status, setStatus] = useState<SyncStatus>("loading")
  const convex = useConvex()

  const initialSnapshot = useQuery(api.prosemirror.getSnapshot, {
    id: documentId,
  })

  const sync = useCallback(async () => {
    const view = viewRef.current
    if (!view) return

    const localVersion = getVersion(view.state)

    try {
      const serverVersion = await convex.query(api.prosemirror.latestVersion, {
        id: documentId,
      })

      if (serverVersion && serverVersion > localVersion) {
        setStatus("syncing")
        const { steps, clientIds } = await convex.query(
          api.prosemirror.getSteps,
          {
            id: documentId,
            version: localVersion,
          }
        )

        const tr = receiveTransaction(
          view.state,
          steps.map((s: string) => Step.fromJSON(schema, JSON.parse(s))),
          clientIds
        )
        view.dispatch(tr)
      }

      const sendable = sendableSteps(view.state)
      if (sendable) {
        setStatus("syncing")
        const result = await convex.mutation(api.prosemirror.submitSteps, {
          id: documentId,
          version: sendable.version,
          clientId: sendable.clientID as string,
          steps: sendable.steps.map((s) => JSON.stringify(s.toJSON())),
        })

        if (result.status === "synced") {
          const tr = receiveTransaction(
            view.state,
            sendable.steps,
            sendable.steps.map(() => sendable.clientID)
          )
          view.dispatch(tr)
          setStatus("connected")
        } else if (result.status === "needs-rebase") {
          const tr = receiveTransaction(
            view.state,
            result.steps.map((s: string) =>
              Step.fromJSON(schema, JSON.parse(s))
            ),
            result.clientIds
          )
          view.dispatch(tr)
          void sync()
        }
      } else {
        setStatus("connected")
      }
    } catch (error) {
      console.error("Sync error:", error)
      setStatus("error")
    }
  }, [convex, documentId])

  useEffect(() => {
    if (!initialSnapshot || !editorRef.current || viewRef.current) return

    let doc
    let version = 0

    if (initialSnapshot.content) {
      const content = JSON.parse(initialSnapshot.content)
      doc = schema.nodeFromJSON(content)
      version = initialSnapshot.version
    } else {
      doc = schema.node("doc", null, [
        schema.node("paragraph", null, [schema.text("Start typing...")]),
      ])
      version = 0
    }

    const state = EditorState.create({
      schema,
      doc,
      plugins: [collab({ version })],
    })

    const view = new EditorView(editorRef.current, {
      state,
      dispatchTransaction: (tr) => {
        const newState = view.state.apply(tr)
        view.updateState(newState)
        if (tr.docChanged) {
          void sync()
        }
      },
    })

    viewRef.current = view
    setStatus("connected")

    return () => {
      view.destroy()
      viewRef.current = null
    }
  }, [initialSnapshot, sync])

  useEffect(() => {
    const interval = setInterval(() => {
      void sync()
    }, 2000)
    return () => clearInterval(interval)
  }, [sync])

  if (!initialSnapshot) {
    return (
      <div className="flex items-center justify-center h-[200px] border rounded-md bg-muted/50">
        <StatusIndicator status="loading" />
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-prose mx-auto group">
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <StatusIndicator status={status} />
      </div>
      <div
        aria-label="Collaborative text editor"
        className="min-h-[200px] p-4 border rounded-md focus-within:ring-1 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all outline-none prose dark:prose-invert max-w-none"
        ref={editorRef}
        role="textbox"
      />
    </div>
  )
}

function StatusIndicator({ status }: { status: SyncStatus }) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-colors backdrop-blur-sm border shadow-sm",
        status === "connected" &&
          "bg-green-50/80 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
        status === "syncing" &&
          "bg-blue-50/80 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
        status === "error" &&
          "bg-red-50/80 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
        status === "loading" &&
          "bg-gray-50/80 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700"
      )}
    >
      {status === "connected" && (
        <HugeiconsIcon icon={Tick01Icon} size={12} strokeWidth={2} />
      )}
      {(status === "syncing" || status === "loading") && (
        <HugeiconsIcon
          className="animate-spin"
          icon={Loading03Icon}
          size={12}
          strokeWidth={2}
        />
      )}
      {status === "error" && (
        <HugeiconsIcon icon={Alert01Icon} size={12} strokeWidth={2} />
      )}

      <span>
        {status === "connected" && "Saved"}
        {status === "syncing" && "Syncing"}
        {status === "error" && "Error"}
        {status === "loading" && "Loading"}
      </span>
    </div>
  )
}
