"use client"

import { GithubIcon, GoogleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { signIn, signUp } from "@/lib/auth-client"

export default function SignUpPage() {
  const params = useParams()
  const locale = params.locale as string

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSocialSignUp = async (provider: "google" | "github") => {
    setIsLoading(true)
    setError("")
    try {
      await signIn.social({
        provider,
        callbackURL: `/${locale}`,
      })
    } catch {
      setError("Failed to sign up with social provider")
      setIsLoading(false)
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await signUp.email(
        {
          name,
          email,
          password,
          callbackURL: `/${locale}`,
        },
        {
          onError: (ctx) => {
            setError(ctx.error.message)
            setIsLoading(false)
          },
          onSuccess: () => {
            return
          },
        }
      )
    } catch {
      setError("Something went wrong")
      setIsLoading(false)
    }
  }

  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center px-6 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="w-full"
              disabled={isLoading}
              onClick={() => handleSocialSignUp("google")}
              variant="outline"
            >
              <HugeiconsIcon className="mr-2" icon={GoogleIcon} size={20} />
              Google
            </Button>
            <Button
              className="w-full"
              disabled={isLoading}
              onClick={() => handleSocialSignUp("github")}
              variant="outline"
            >
              <HugeiconsIcon className="mr-2" icon={GithubIcon} size={20} />
              GitHub
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleEmailSignUp}>
            <div className="space-y-2">
              <Input
                disabled={isLoading}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                type="text"
                value={name}
              />
            </div>
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
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>

          <div className="text-center text-muted-foreground text-sm">
            Already have an account?{" "}
            <Link
              className="underline hover:text-primary"
              href={`/${locale}/sign-in`}
            >
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
