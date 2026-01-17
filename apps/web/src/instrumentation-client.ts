import { initBotId } from "botid/client/core"
import posthog from "posthog-js"
import { env } from "./env"

initBotId({ protect: [] })

posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2025-11-30",
})
