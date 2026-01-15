import type { NextRequest } from "next/server"
import createMiddleware from "next-intl/middleware"
import { type Locale, routing } from "./i18n/routing"

const LOCALE_COOKIE = "NEXT_LOCALE"
const handleI18nRouting = createMiddleware(routing)

export default function proxy(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const localeParam = searchParams.get("locale") as Locale | null

  if (localeParam && routing.locales.includes(localeParam)) {
    const response = handleI18nRouting(request)
    response.cookies.set(LOCALE_COOKIE, localeParam, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    })
    return response
  }

  return handleI18nRouting(request)
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
