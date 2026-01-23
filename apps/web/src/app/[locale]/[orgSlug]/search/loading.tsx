export default function SearchLoading() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <div className="h-10 w-32 animate-pulse rounded bg-muted" />
          <div className="h-12 w-full animate-pulse rounded bg-muted" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div className="h-32 animate-pulse rounded-2xl bg-muted" key={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
