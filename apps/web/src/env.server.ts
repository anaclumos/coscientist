import "server-only"
import { z } from "zod/v4"
import { clientEnv } from "./env.client"

const serverEnvSchema = z.object({
  SITE_URL: z.url().optional().default("http://localhost:3000"),
  CLERK_SECRET_KEY: z.string().min(1, {
    message:
      "Missing CLERK_SECRET_KEY. Get your key at https://dashboard.clerk.com/last-active?path=api-keys",
  }),
})

const serverOnlyEnv = serverEnvSchema.parse({
  SITE_URL: process.env.SITE_URL,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
})

export const serverEnv = {
  ...clientEnv,
  ...serverOnlyEnv,
}
