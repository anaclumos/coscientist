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
  GOOGLE_CLIENT_ID: z.string().optional().default(""),
  GOOGLE_CLIENT_SECRET: z.string().optional().default(""),
  GITHUB_CLIENT_ID: z.string().optional().default(""),
  GITHUB_CLIENT_SECRET: z.string().optional().default(""),
})

const serverOnlyEnv = serverEnvSchema.parse({
  SITE_URL: process.env.SITE_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
})

export const serverEnv = {
  ...clientEnv,
  ...serverOnlyEnv,
}
