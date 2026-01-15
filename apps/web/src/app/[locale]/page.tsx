import { redirect } from "next/navigation"

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function LocaleRootPage({ params }: PageProps) {
  const { locale } = await params
  redirect(`/${locale}/manifesto`)
}
