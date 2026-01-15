"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo } from "react"
import {
  buildStackUrl,
  parseStackFromParams,
  popFromStack,
  pushToStack,
} from "./stack"

export function useNoteStack(rootSlug: string) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { stack, focusIndex } = useMemo(() => {
    return parseStackFromParams(rootSlug, searchParams)
  }, [rootSlug, searchParams])

  const pushNote = useCallback(
    (slug: string, fromPaneIndex: number) => {
      const newStack = pushToStack(stack, slug, fromPaneIndex)
      const newUrl = buildStackUrl(newStack)
      router.push(newUrl)
    },
    [stack, router]
  )

  const popNote = useCallback(() => {
    const newStack = popFromStack(stack)
    const newUrl = buildStackUrl(newStack)
    router.push(newUrl)
  }, [stack, router])

  const focusPane = useCallback(
    (index: number) => {
      if (index < 0 || index >= stack.length) {
        return
      }
      if (index === focusIndex) {
        return
      }
      const newUrl = buildStackUrl(stack, index)
      router.replace(newUrl, { scroll: false })
    },
    [stack, focusIndex, router]
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

  return {
    stack,
    focusIndex,
    pushNote,
    popNote,
    focusPane,
    setStack,
    goBack,
  }
}
