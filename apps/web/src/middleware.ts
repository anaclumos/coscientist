import createMiddleware from "next-intl/middleware"
import { routing } from "@/i18n/routing"

export default createMiddleware(routing)

export const config = {
  matcher: [
    // Match all pathnames except:
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /ingest (PostHog proxy)
    // - /monitoring (Sentry tunnel)
    // - files with extensions (static assets)
    "/((?!api|_next|_vercel|ingest|monitoring|.*\\..*).*)",
  ],
}
