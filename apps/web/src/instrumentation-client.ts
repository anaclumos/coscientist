import { env } from "@coscientist/web/env"
import posthog from "posthog-js"

posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: "2025-11-30",
  loaded: (posthog) => {
    if (process.env.NODE_ENV === "development") {
      posthog.debug()
    }
  },
})
