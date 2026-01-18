import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function ProfilePage() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/")
  }

  const user = await currentUser()

  return (
    <main className="container mx-auto max-w-prose px-6 py-16">
      <h1 className="mb-8 text-[1.75rem] font-semibold tracking-tight">
        Profile
      </h1>

      <div className="space-y-6">
        <div>
          <h2 className="mb-2 text-[1.375rem] font-medium tracking-tight">
            User Information
          </h2>
          <dl className="space-y-2">
            <div>
              <dt className="font-medium">Name:</dt>
              <dd className="text-muted-foreground">
                {user?.firstName} {user?.lastName}
              </dd>
            </div>
            <div>
              <dt className="font-medium">Email:</dt>
              <dd className="text-muted-foreground">
                {user?.emailAddresses[0]?.emailAddress}
              </dd>
            </div>
            <div>
              <dt className="font-medium">User ID:</dt>
              <dd className="font-mono text-sm text-muted-foreground">
                {userId}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-border bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            This is an example protected page. It uses{" "}
            <code className="rounded bg-background px-1 py-0.5 font-mono text-xs">
              auth()
            </code>{" "}
            from{" "}
            <code className="rounded bg-background px-1 py-0.5 font-mono text-xs">
              @clerk/nextjs/server
            </code>{" "}
            to check authentication and{" "}
            <code className="rounded bg-background px-1 py-0.5 font-mono text-xs">
              currentUser()
            </code>{" "}
            to fetch user data server-side.
          </p>
        </div>
      </div>
    </main>
  )
}
