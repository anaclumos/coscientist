"use client"

import { useAuth } from "@clerk/nextjs"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import type { ReactNode } from "react"

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_CLOUD_URL
if (!convexUrl) {
  throw new Error(
    "NEXT_PUBLIC_CONVEX_CLOUD_URL environment variable is required"
  )
}
const convex = new ConvexReactClient(convexUrl)

interface ConvexClientProviderProps {
  children: ReactNode
}

export function ConvexClientProvider({ children }: ConvexClientProviderProps) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
}
