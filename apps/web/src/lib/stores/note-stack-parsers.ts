"use client"

import { createParser, parseAsInteger } from "nuqs"

/**
 * Custom array parser that uses comma separator WITHOUT URL-encoding.
 * Standard parseAsArrayOf encodes commas as %2C, making URLs ugly.
 * This parser keeps URLs clean: ?stack=note-a,note-b,note-c
 */
export const stackParser = createParser({
  parse: (value: string) => {
    if (!value) return []
    return value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
  },
  serialize: (value: string[]) => {
    if (!value || value.length === 0) return ""
    return value.join(",")
  },
}).withDefault([])

export const focusParser = parseAsInteger

export const noteStackParsers = {
  stack: stackParser,
  focus: focusParser,
}

export function buildFullStack(
  rootSlug: string,
  additionalSlugs: string[]
): string[] {
  return [rootSlug, ...additionalSlugs]
}

export function getFocusIndex(
  focus: number | null,
  stackLength: number
): number {
  if (focus === null) {
    return Math.max(0, stackLength - 1)
  }
  return Math.min(Math.max(0, focus), stackLength - 1)
}

export function pushToStack(
  currentStack: string[],
  newSlug: string,
  fromIndex: number
): string[] {
  if (currentStack.length === 0) {
    return [newSlug]
  }
  const safeIndex = Math.min(Math.max(fromIndex, 0), currentStack.length - 1)
  return [...currentStack.slice(0, safeIndex + 1), newSlug]
}

export function popFromStack(currentStack: string[]): string[] {
  if (currentStack.length <= 1) {
    return currentStack
  }
  return currentStack.slice(0, -1)
}
