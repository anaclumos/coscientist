export default function DocumentLoading() {
  return (
    <main className="min-h-screen">
      <div className="border-border/40 border-b px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="h-8 w-48 animate-pulse rounded bg-muted" />
          <div className="flex gap-2">
            <div className="h-9 w-32 animate-pulse rounded bg-muted" />
            <div className="h-9 w-24 animate-pulse rounded bg-muted" />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="mx-auto max-w-prose space-y-4">
          <div className="h-12 animate-pulse rounded bg-muted" />
          <div className="h-24 animate-pulse rounded bg-muted" />
          <div className="h-24 animate-pulse rounded bg-muted" />
        </div>
      </div>
    </main>
  )
}
