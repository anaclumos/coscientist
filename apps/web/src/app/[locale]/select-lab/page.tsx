"use client"

import {
  CreateOrganization,
  OrganizationList,
  useOrganization,
  useUser,
} from "@clerk/nextjs"
import { Add01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SelectLabPage() {
  const params = useParams()
  const router = useRouter()
  const locale = params.locale as string

  const { user, isLoaded: isUserLoaded } = useUser()
  const { organization, isLoaded: isOrgLoaded } = useOrganization()

  const [showCreate, setShowCreate] = useState(false)

  // If user already has an active org, redirect to workspace
  useEffect(() => {
    if (isOrgLoaded && organization?.slug) {
      router.replace(`/${locale}/${organization.slug}/workspace`)
    }
  }, [isOrgLoaded, organization, locale, router])

  if (!(isUserLoaded && isOrgLoaded)) {
    return (
      <main className="flex min-h-screen items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </main>
    )
  }

  // Already has org, show loading while redirect happens
  if (organization?.slug) {
    return (
      <main className="flex min-h-screen items-center justify-center p-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      </main>
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-lg space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="font-semibold text-[1.75rem] tracking-tight">
            Select a Lab
          </h1>
          <p className="text-muted-foreground">
            Choose a lab to work in or create a new one
          </p>
        </div>

        {showCreate ? (
          <Card>
            <CardHeader>
              <CardTitle>Create a New Lab</CardTitle>
              <CardDescription>
                Labs are collaborative workspaces for your team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CreateOrganization
                afterCreateOrganizationUrl={`/${locale}/:slug/workspace`}
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none border-0 p-0",
                  },
                }}
                skipInvitationScreen
              />
              <Button
                className="mt-4 w-full"
                onClick={() => setShowCreate(false)}
                variant="ghost"
              >
                Back to lab list
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card>
              <CardContent className="pt-6">
                <OrganizationList
                  afterCreateOrganizationUrl={`/${locale}/:slug/workspace`}
                  afterSelectOrganizationUrl={`/${locale}/:slug/workspace`}
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "shadow-none border-0 p-0",
                    },
                  }}
                  hideSlug={false}
                />
              </CardContent>
            </Card>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>

            <Button
              className="w-full"
              onClick={() => setShowCreate(true)}
              variant="outline"
            >
              <HugeiconsIcon icon={Add01Icon} size={16} />
              Create a New Lab
            </Button>
          </>
        )}
      </div>
    </main>
  )
}
