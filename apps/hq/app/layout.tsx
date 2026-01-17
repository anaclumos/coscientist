import { RootProvider } from "fumadocs-ui/provider/next"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "Coscientist HQ",
  description: "Internal documentation and ADRs for Coscientist",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  )
}
