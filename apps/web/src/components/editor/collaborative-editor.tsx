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
    if (!view) {
      return
    }

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
          sync().catch(console.error)
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
    if (!(initialSnapshot && editorRef.current) || viewRef.current) {
      return
    }

    let version = 0
    let doc: ReturnType<typeof schema.nodeFromJSON>

    if (initialSnapshot.content) {
      const content = JSON.parse(initialSnapshot.content)
      doc = schema.nodeFromJSON(content)
      version = initialSnapshot.version
    } else {
      doc = schema.node("doc", null, [
        schema.node("paragraph", null, [schema.text("Start typing...")]),
      ])
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
          sync().catch(console.error)
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
      sync().catch(console.error)
    }, 2000)
    return () => clearInterval(interval)
  }, [sync])

  if (!initialSnapshot) {
    return (
      <div className="flex h-[200px] items-center justify-center rounded-md border bg-muted/50">
        <StatusIndicator status="loading" />
      </div>
    )
  }

  return (
    <div className="group relative mx-auto w-full max-w-prose">
      <div className="absolute top-2 right-2 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <StatusIndicator status={status} />
      </div>
      {/* biome-ignore lint/a11y/noNoninteractiveTabindex: ProseMirror mount point handles its own focus */}
      <div
        className="prose dark:prose-invert min-h-[200px] max-w-none rounded-md border p-4 outline-none transition-all focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20"
        ref={editorRef}
        tabIndex={0}
      />
    </div>
  )
}

function StatusIndicator({ status }: { status: SyncStatus }) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-2 py-1 font-medium text-xs shadow-sm backdrop-blur-sm transition-colors",
        status === "connected" &&
          "border-green-200 bg-green-50/80 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400",
        status === "syncing" &&
          "border-blue-200 bg-blue-50/80 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
        status === "error" &&
          "border-red-200 bg-red-50/80 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400",
        status === "loading" &&
          "border-gray-200 bg-gray-50/80 text-gray-700 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
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
