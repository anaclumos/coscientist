"use client"

import { useQueryStates } from "nuqs"
import { useCallback, useMemo, useRef } from "react"
import { useRouter } from "@/i18n/navigation"
import {
  buildFullStack,
  buildStackUrl,
  getFocusIndex,
  noteStackParsers,
  popFromStack,
  pushToStack,
} from "./stores/note-stack-parsers"

export function useNoteStack(rootSlug: string) {
  const router = useRouter()
  const [urlState] = useQueryStates(noteStackParsers, {
    shallow: false,
  })

  const stack = useMemo(
    () => buildFullStack(rootSlug, urlState.stack),
    [rootSlug, urlState.stack]
  )

  const focusIndex = useMemo(
    () => getFocusIndex(urlState.focus, stack.length),
    [urlState.focus, stack.length]
  )

  const stackRef = useRef(stack)
  stackRef.current = stack

  const pushNote = useCallback(
    (slug: string, fromPaneIndex: number) => {
      const newStack = pushToStack(stackRef.current, slug, fromPaneIndex)
      const newUrl = buildStackUrl(newStack)
      router.push(newUrl)
    },
    [router]
  )

  const popNote = useCallback(() => {
    const newStack = popFromStack(stackRef.current)
    const newUrl = buildStackUrl(newStack)
    router.push(newUrl)
  }, [router])

  const focusPane = useCallback(
    (index: number) => {
      const currentStack = stackRef.current
      if (index < 0 || index >= currentStack.length) {
        return
      }
      const currentFocusIndex = getFocusIndex(
        urlState.focus,
        currentStack.length
      )
      if (index === currentFocusIndex) {
        return
      }
      const newUrl = buildStackUrl(currentStack, index)
      router.replace(newUrl, { scroll: false })
    },
    [router, urlState.focus]
  )

  const setStack = useCallback(
    (newStack: string[], focusIdx?: number) => {
      const newUrl = buildStackUrl(newStack, focusIdx)
      router.push(newUrl)
    },
    [router]
  )

  const goBack = useCallback(() => {
    router.back()
  }, [router])

  return useMemo(
    () => ({
      stack,
      focusIndex,
      pushNote,
      popNote,
      focusPane,
      setStack,
      goBack,
    }),
    [stack, focusIndex, pushNote, popNote, focusPane, setStack, goBack]
  )
}
