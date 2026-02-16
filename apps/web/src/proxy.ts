import { getSessionCookie } from "better-auth/cookies"
import { NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"
import { type Locale, routing } from "./i18n/routing"

const LOCALE_COOKIE = "NEXT_LOCALE"
const handleI18nRouting = createMiddleware(routing)
const settingsRouteRegex = /^\/([^/]+)\/([^/]+)\/settings(?:\/.*)?$/

const localeSet = new Set(routing.locales)

function isProfileRoute(pathname: string): boolean {
  return pathname === "/profile" || pathname.startsWith("/profile/")
}

function getSettingsOrgSlug(pathname: string): string | null {
  const matches = pathname.match(settingsRouteRegex)

  if (!matches) {
    return null
  }

  const [, locale, orgSlug] = matches
  if (!localeSet.has(locale as Locale)) {
    return null
  }

  return orgSlug
}

export default function proxy(
  request: Parameters<typeof handleI18nRouting>[0]
) {
  const { searchParams, pathname } = request.nextUrl
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

  const sessionCookie = getSessionCookie(request.headers)
  const pathSegments = pathname.split("/").filter(Boolean)
  const localePrefix = pathSegments[0]
  const hasLocalePrefix = localeSet.has(localePrefix as Locale)
  const normalizedPath = hasLocalePrefix
    ? `/${pathSegments.slice(1).join("/")}`
    : pathname

  if (!sessionCookie) {
    const isSettingsRoute = getSettingsOrgSlug(pathname) !== null
    if (isProfileRoute(normalizedPath) || isSettingsRoute) {
      return NextResponse.redirect(new URL("/sign-in", request.url))
    }
  }

  if (
    sessionCookie &&
    (normalizedPath === "/sign-in" || normalizedPath === "/sign-up")
  ) {
    const homePath = hasLocalePrefix ? `/${localePrefix}` : "/"
    return NextResponse.redirect(new URL(homePath, request.url))
  }

  const settingsOrgSlug = getSettingsOrgSlug(pathname)
  if (settingsOrgSlug && localeSet.has(settingsOrgSlug as Locale)) {
    const locale = pathname.split("/")[1] || routing.defaultLocale
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  return handleI18nRouting(request)
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
