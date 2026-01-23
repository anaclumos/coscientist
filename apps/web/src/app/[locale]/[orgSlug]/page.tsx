"use client"

import { useOrganization } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import { Link } from "@/i18n/navigation"

export default function WorkspacePage() {
  const params = useParams()
  const locale = params.locale as string
  const orgSlug = params.orgSlug as string
  const { organization } = useOrganization()

  return (
    <main className="container mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-4 font-semibold text-[1.75rem] tracking-tight">
        {organization?.name ?? orgSlug}
      </h1>
      <p className="mb-8 text-muted-foreground">
        Welcome to your workspace. This is where your work will live.
      </p>
      <Link
        className="text-primary underline hover:no-underline"
        href={`/${locale}/${orgSlug}/settings`}
      >
        Go to Settings
      </Link>
    </main>
  )
}
