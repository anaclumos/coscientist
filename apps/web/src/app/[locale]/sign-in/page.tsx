"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { signIn } from "@/lib/auth-client"

export default function SignInPage() {
  const params = useParams()
  const locale = params.locale as string

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await signIn.email(
        {
          email,
          password,
          callbackURL: `/${locale}`,
        },
        {
          onError: (ctx) => {
            setError(ctx.error.message)
            setIsLoading(false)
          },
          onSuccess: () => undefined,
        }
      )
    } catch {
      setError("Invalid email or password")
      setIsLoading(false)
    }
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center px-6 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4" onSubmit={handleEmailSignIn}>
            <div className="space-y-2">
              <Input
                disabled={isLoading}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                type="email"
                value={email}
              />
            </div>
            <div className="space-y-2">
              <Input
                disabled={isLoading}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                type="password"
                value={password}
              />
            </div>

            {error && (
              <div className="text-center text-red-500 text-sm">{error}</div>
            )}

            <Button className="w-full" disabled={isLoading} type="submit">
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center text-muted-foreground text-sm">
            Don&apos;t have an account?{" "}
            <Link
              className="underline hover:text-primary"
              href={`/${locale}/sign-up`}
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
