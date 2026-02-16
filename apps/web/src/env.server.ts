import "server-only"
import { z } from "zod/v4"
import { clientEnv } from "./env.client"

const serverEnvSchema = z.object({
  SITE_URL: z.url().optional().default("http://localhost:3000"),
})

const serverOnlyEnv = serverEnvSchema.parse({
  SITE_URL: process.env.SITE_URL,
})

export const serverEnv = {
  ...clientEnv,
  ...serverOnlyEnv,
}
