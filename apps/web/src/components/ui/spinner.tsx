import { cn } from "@coscientist/web/lib/utils"
import { IconArrowRotateClockwiseOutline18 } from "nucleo-ui-outline-18"

const sizeClasses = {
  sm: "size-4",
  default: "size-5",
  lg: "size-6",
  xl: "size-8",
} as const

function Spinner({
  className,
  size = "default",
  ...props
}: Omit<
  React.ComponentProps<typeof IconArrowRotateClockwiseOutline18>,
  "size"
> & {
  size?: keyof typeof sizeClasses
}) {
  return (
    <IconArrowRotateClockwiseOutline18
      aria-label="Loading"
      className={cn("animate-spin", sizeClasses[size], className)}
      role="status"
      {...props}
    />
  )
}

export { Spinner }
