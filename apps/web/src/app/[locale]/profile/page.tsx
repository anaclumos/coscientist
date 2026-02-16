import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session) {
    redirect("/")
  }

  const user = session.user

  return (
    <main className="container mx-auto max-w-prose px-6 py-16">
      <h1 className="mb-8 font-semibold text-[1.75rem] tracking-tight">
        Profile
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="mb-2 font-medium text-[1.375rem] tracking-tight">
            User Information
          </h2>
          <dl className="space-y-2">
            <div>
              <dt className="font-medium">Name:</dt>
              <dd className="text-muted-foreground">{user?.name}</dd>
            </div>
            <div>
              <dt className="font-medium">Email:</dt>
              <dd className="text-muted-foreground">{user?.email}</dd>
            </div>
            <div>
              <dt className="font-medium">User ID:</dt>
              <dd className="font-mono text-muted-foreground text-sm">
                {user?.id}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-border bg-muted p-4">
          <p className="text-muted-foreground text-sm">
            This is an example protected page. It uses{" "}
            <code className="rounded bg-background px-1 py-0.5 font-mono text-xs">
              auth.api.getSession()
            </code>{" "}
            from{" "}
            <code className="rounded bg-background px-1 py-0.5 font-mono text-xs">
              @/lib/auth
            </code>{" "}
            to check authentication and fetch user data server-side.
          </p>
        </div>
      </div>
    </main>
  )
}
