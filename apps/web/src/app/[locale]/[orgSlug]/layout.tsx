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
    if (!(isOrgLoaded && isListLoaded && setActive)) {
      return
    }

    if (organization?.slug !== orgSlug) {
      setActive({ organization: orgSlug }).catch(() => {
        router.replace(`/${locale}`)
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

  if (!(isOrgLoaded && isListLoaded)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </div>
    )
  }

  if (organization?.slug !== orgSlug) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </div>
    )
  }

  return <>{children}</>
}
