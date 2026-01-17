import { Skeleton } from "@/components/ui/skeleton"

export default function ManifestoLoading() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex w-full max-w-prose flex-col border-border border-r p-6">
        <Skeleton className="mb-4 h-8 w-3/4" />
        <Skeleton className="mb-6 h-4 w-full" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="my-6" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="hidden w-10 flex-shrink-0 border-border border-r bg-muted/50 md:block" />
    </div>
  )
}
