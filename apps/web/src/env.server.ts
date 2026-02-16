import "server-only"
import { z } from "zod/v4"
import { clientEnv } from "./env.client"

const serverEnvSchema = z.object({
  SITE_URL: z.url().optional().default("http://localhost:3000"),
  DATABASE_URL: z.string().min(1, {
    message: "Missing DATABASE_URL. Required for database connection.",
  }),
  BETTER_AUTH_SECRET: z.string().min(1, {
    message: "Missing BETTER_AUTH_SECRET. Required for authentication.",
  }),
  BETTER_AUTH_URL: z.string().url().optional().default("http://localhost:3000"),
})

const serverOnlyEnv = serverEnvSchema.parse({
  SITE_URL: process.env.SITE_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
})

export const serverEnv = {
  ...clientEnv,
  ...serverOnlyEnv,
}
