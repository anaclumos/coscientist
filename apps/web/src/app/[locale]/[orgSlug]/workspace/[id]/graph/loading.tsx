export default function GraphLoading() {
  return (
    <main className="min-h-screen">
      <div className="border-border/40 border-b px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="h-8 w-48 animate-pulse rounded bg-muted" />
          <div className="flex gap-2">
            <div className="h-9 w-32 animate-pulse rounded bg-muted" />
          </div>
        </div>
      </div>
      <div className="h-[calc(100vh-5rem)] animate-pulse bg-muted/20" />
    </main>
  )
}
