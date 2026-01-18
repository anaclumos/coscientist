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
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1, {
    message:
      "Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY. Get your key at https://dashboard.clerk.com/last-active?path=api-keys",
  }),
  CLERK_SECRET_KEY: z.string().min(1, {
    message:
      "Missing CLERK_SECRET_KEY. Get your key at https://dashboard.clerk.com/last-active?path=api-keys",
  }),
})

export const env = envSchema.parse(process.env)
