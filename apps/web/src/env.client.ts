import { z } from "zod/v4"

const clientEnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional().default(""),
  NEXT_PUBLIC_POSTHOG_HOST: z
    .url()
    .optional()
    .default("https://us.i.posthog.com"),
  NEXT_PUBLIC_APP_URL: z.string().default("http://localhost:3000"),
})

export const clientEnv = clientEnvSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
})
