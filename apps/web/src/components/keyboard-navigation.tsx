"use client"

import { useCallback, useEffect } from "react"

interface KeyboardNavigationProps {
  stackLength: number
  focusIndex: number
  maxFocusIndex?: number
  onFocusChange: (index: number) => void
  onPopStack: () => void
  onScrollToPane: (index: number) => void
}

export function useKeyboardNavigation({
  stackLength,
  focusIndex,
  maxFocusIndex,
  onFocusChange,
  onPopStack,
  onScrollToPane,
}: KeyboardNavigationProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) {
        return
      }

      if (isTextInput(e.target)) {
        return
      }

      const upperBound = Math.max(0, maxFocusIndex ?? stackLength - 1)

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault()
          if (focusIndex > 0) {
            onFocusChange(focusIndex - 1)
            onScrollToPane(focusIndex - 1)
          }
          break

        case "ArrowRight":
          e.preventDefault()
          if (focusIndex < upperBound) {
            onFocusChange(focusIndex + 1)
            onScrollToPane(focusIndex + 1)
          }
          break

        case "Escape":
          e.preventDefault()
          if (stackLength > 1) {
            onPopStack()
          }
          break

        case "Home":
          e.preventDefault()
          onFocusChange(0)
          onScrollToPane(0)
          break

        case "End":
          e.preventDefault()
          onFocusChange(upperBound)
          onScrollToPane(upperBound)
          break

        default:
          break
      }
    },
    [
      focusIndex,
      stackLength,
      maxFocusIndex,
      onFocusChange,
      onPopStack,
      onScrollToPane,
    ]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])
}

function isTextInput(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    target.isContentEditable
  )
}
