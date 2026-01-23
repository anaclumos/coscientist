import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"
import { type Locale, routing } from "./i18n/routing"

const LOCALE_COOKIE = "NEXT_LOCALE"
const handleI18nRouting = createMiddleware(routing)

// Routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/:locale/:orgSlug/settings(.*)",
  "/:locale/profile(.*)",
])

// Routes that require an active organization
const isOrgRoute = createRouteMatcher(["/:locale/:orgSlug/settings(.*)"])

export default clerkMiddleware(
  async (auth, request) => {
    const { searchParams, pathname } = request.nextUrl
    const localeParam = searchParams.get("locale") as Locale | null

    // Handle locale switching via query param
    if (localeParam && routing.locales.includes(localeParam)) {
      const url = new URL(request.url)
      url.searchParams.delete("locale")

      const response = NextResponse.redirect(url)
      response.cookies.set(LOCALE_COOKIE, localeParam, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      })
      return response
    }

    // Protect routes that require authentication
    if (isProtectedRoute(request)) {
      await auth.protect()
    }

    // For org routes, check if user has an active org
    if (isOrgRoute(request)) {
      const { orgSlug } = await auth()

      // If no active org, redirect to landing page
      if (!orgSlug) {
        const pathParts = pathname.split("/")
        const locale = pathParts[1] || "en"
        const url = new URL(`/${locale}`, request.url)
        return NextResponse.redirect(url)
      }
    }

    return handleI18nRouting(request)
  },
  {
    // Enable organization sync from URL slug
    organizationSyncOptions: {
      organizationPatterns: ["/:locale/:slug", "/:locale/:slug/(.*)"],
    },
  }
)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
