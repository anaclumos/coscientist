export default function WorkspaceLoading() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="h-10 w-48 animate-pulse rounded bg-muted" />
        <div className="h-12 w-full animate-pulse rounded bg-muted" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div className="h-40 animate-pulse rounded-xl bg-muted" key={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div className="h-32 animate-pulse rounded-xl bg-muted" key={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
