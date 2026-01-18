import { initBotId } from "botid/client/core"
import posthog from "posthog-js"
import { clientEnv } from "./env.client"

initBotId({ protect: [] })

posthog.init(clientEnv.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: clientEnv.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: "2025-11-30",
})
