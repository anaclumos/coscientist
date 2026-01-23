"use client"

import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import { useParams, useRouter } from "next/navigation"
import { type ReactNode, useEffect } from "react"

interface OrgSlugLayoutProps {
  children: ReactNode
}

export default function OrgSlugLayout({ children }: OrgSlugLayoutProps) {
  const params = useParams()
  const router = useRouter()
  const orgSlug = params.orgSlug as string
  const locale = params.locale as string

  const { organization, isLoaded: isOrgLoaded } = useOrganization()
  const { setActive, isLoaded: isListLoaded } = useOrganizationList()

  useEffect(() => {
    if (!(isOrgLoaded && isListLoaded && setActive)) return

    // If URL orgSlug doesn't match active org, sync it
    if (organization?.slug !== orgSlug) {
      // Try to set the org from URL slug as active
      setActive({ organization: orgSlug }).catch(() => {
        // If org doesn't exist or user doesn't have access, redirect to select-lab
        router.replace(`/${locale}/select-lab`)
      })
    }
  }, [
    organization,
    orgSlug,
    isOrgLoaded,
    isListLoaded,
    setActive,
    router,
    locale,
  ])

  // Show loading while syncing org
  if (!(isOrgLoaded && isListLoaded)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </div>
    )
  }

  // If org slug mismatch, show loading while redirect happens
  if (organization?.slug !== orgSlug) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </div>
    )
  }

  return <>{children}</>
}
