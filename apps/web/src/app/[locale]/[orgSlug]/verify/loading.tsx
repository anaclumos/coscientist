export default function VerifyLoading() {
  return (
    <main className="container mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl animate-pulse space-y-4">
        <div className="mx-auto h-8 w-1/3 rounded bg-muted" />
        <div className="h-[400px] rounded-xl bg-muted" />
      </div>
    </main>
  )
}
