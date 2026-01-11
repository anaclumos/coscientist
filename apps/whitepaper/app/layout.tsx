import type React from 'react'
import './globals.css'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Faculty_Glyphic } from 'next/font/google'

const facultyGlyphic = Faculty_Glyphic({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://coscientist.app'),
  title: 'Coscientist',
  description:
    'Always-on AI for calm verification, knowledge sovereignty, and ScienceOps. Not AGI but close enough.',
  openGraph: {
    title: 'Coscientist',
    description:
      'Always-on AI for calm verification, knowledge sovereignty, and ScienceOps.',
    siteName: 'Coscientist',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={facultyGlyphic.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
