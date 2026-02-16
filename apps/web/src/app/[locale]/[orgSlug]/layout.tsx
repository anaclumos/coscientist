import { headers } from "next/headers"
import { redirect } from "next/navigation"
import type { ReactNode } from "react"

import { auth } from "@/lib/auth"

interface OrgSlugLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string; orgSlug: string }>
}

export default async function OrgSlugLayout({
  children,
  params,
}: OrgSlugLayoutProps) {
  const { locale, orgSlug } = await params
  const hdrs = await headers()

  const session = await auth.api.getSession({ headers: hdrs })

  if (!session) {
    redirect(`/${locale}/sign-in`)
  }

  const orgs = await auth.api.listOrganizations({ headers: hdrs })

  const matchingOrg = orgs?.find(
    (org: { slug: string }) => org.slug === orgSlug
  )

  if (!matchingOrg) {
    redirect(`/${locale}`)
  }

  return <>{children}</>
}
