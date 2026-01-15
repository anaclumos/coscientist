import { z } from "zod/v4"

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  SITE_URL: z.url().optional().default("http://localhost:3000"),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional().default(""),
  NEXT_PUBLIC_POSTHOG_HOST: z
    .url()
    .optional()
    .default("https://us.i.posthog.com"),
})

export const env = envSchema.parse(process.env)
