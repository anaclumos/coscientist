"use client"

import { Key01Icon, Tick01Icon } from "@hugeicons/core-free-icons"
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
import { Input } from "@/components/ui/input"
import { authClient, useSession } from "@/lib/auth-client"

export default function SettingsPage() {
  const params = useParams()
  const router = useRouter()
  const locale = params.locale as string
  const { data: session, isPending: isSessionPending } = useSession()
  const { data: activeOrg, isPending: isOrgPending } =
    authClient.useActiveOrganization()

  const [apiKey, setApiKey] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [hasKey, setHasKey] = useState(false)

  useEffect(() => {
    if (!activeOrg?.id) {
      return
    }
    const checkKeyStatus = async () => {
      const response = await fetch("/api/settings/openai-key").catch(() => null)
      if (response?.ok) {
        const data = await response.json()
        setHasKey(data.hasKey ?? false)
      }
    }
    checkKeyStatus()
  }, [activeOrg?.id])

  if (isSessionPending || isOrgPending) {
    return (
      <main className="container mx-auto max-w-2xl px-6 py-16">
        <div className="h-8 w-32 animate-pulse rounded bg-muted" />
      </main>
    )
  }

  if (!session?.user) {
    router.push(`/${locale}`)
    return null
  }

  if (!activeOrg) {
    router.push(`/${locale}`)
    return null
  }

  const handleSaveKey = async () => {
    if (!apiKey.trim()) {
      return
    }

    setIsUpdating(true)
    try {
      const response = await fetch("/api/settings/openai-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey: apiKey.trim() }),
      })

      if (response.ok) {
        setApiKey("")
        setHasKey(true)
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
      }
    } finally {
      setIsUpdating(false)
    }
  }

  const handleRemoveKey = async () => {
    setIsUpdating(true)
    try {
      const response = await fetch("/api/settings/openai-key", {
        method: "DELETE",
      })

      if (response.ok) {
        setHasKey(false)
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
      }
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <main className="container mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-8 font-semibold text-[1.75rem] tracking-tight">
        Settings
      </h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                className="text-muted-foreground"
                icon={Key01Icon}
                size={20}
              />
              <CardTitle>OpenAI API Key</CardTitle>
            </div>
            <CardDescription>
              Bring your own OpenAI API key to enable AI features like edge
              suggestions and counterevidence search.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {hasKey ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 rounded-md border border-green-500/20 bg-green-500/10 p-3">
                  <HugeiconsIcon
                    className="text-green-600 dark:text-green-400"
                    icon={Tick01Icon}
                    size={16}
                  />
                  <span className="text-green-700 text-sm dark:text-green-300">
                    API key configured
                  </span>
                </div>
                <div className="flex gap-2">
                  <Input
                    className="font-mono"
                    disabled={isUpdating}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-... (enter new key to replace)"
                    type="password"
                    value={apiKey}
                  />
                  <Button
                    disabled={!apiKey.trim() || isUpdating}
                    onClick={handleSaveKey}
                  >
                    Update
                  </Button>
                </div>
                <Button
                  className="w-full"
                  disabled={isUpdating}
                  onClick={handleRemoveKey}
                  variant="outline"
                >
                  Remove API Key
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    className="font-mono"
                    disabled={isUpdating}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    type="password"
                    value={apiKey}
                  />
                  <Button
                    disabled={!apiKey.trim() || isUpdating}
                    onClick={handleSaveKey}
                  >
                    Save
                  </Button>
                </div>
                <p className="text-muted-foreground text-xs">
                  Get your API key from{" "}
                  <a
                    className="underline hover:text-foreground"
                    href="https://platform.openai.com/api-keys"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    platform.openai.com/api-keys
                  </a>
                </p>
              </div>
            )}

            {showSuccess && (
              <div className="rounded-md border border-green-500/20 bg-green-500/10 p-3 text-center text-green-700 text-sm dark:text-green-300">
                Settings saved successfully
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About BYOK</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground text-sm">
            <p>
              <strong>Bring Your Own Key (BYOK)</strong> means your API key is
              stored securely and used only when you trigger AI features.
            </p>
            <p>
              Your key is stored in your workspace&apos;s secure metadata and
              never shared. API calls are made directly from our servers to
              OpenAI using your key.
            </p>
            <p>
              You can remove your key at any time. Without a key, AI features
              will use heuristic-based suggestions instead.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
