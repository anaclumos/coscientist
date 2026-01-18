import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { type NextRequest, NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"
import { type Locale, routing } from "./i18n/routing"

const LOCALE_COOKIE = "NEXT_LOCALE"
const handleI18nRouting = createMiddleware(routing)

const isProtectedRoute = createRouteMatcher(["/*/profile(.*)"])

export default clerkMiddleware(async (auth, request: NextRequest) => {
  const { searchParams } = request.nextUrl
  const localeParam = searchParams.get("locale") as Locale | null

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

  if (isProtectedRoute(request)) {
    await auth.protect()
  }

  return handleI18nRouting(request)
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
