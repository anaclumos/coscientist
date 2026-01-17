import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  transpilePackages: ["nucleo-ui-outline-18"],
  images: {
    qualities: [100, 75],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ]
  },
  skipTrailingSlashRedirect: true,
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
