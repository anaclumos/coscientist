import { cn } from "@coscientist/web/lib/utils"

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size = 20 }: LogoProps) {
  return (
    <svg
      aria-label="Coscientist logo"
      className={cn("text-foreground", className)}
      fill="none"
      height={size}
      role="img"
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="fill-neutral-900 dark:fill-neutral-100"
        height="32"
        width="32"
      />
      <rect
        className="fill-white dark:fill-neutral-900"
        fillOpacity="1"
        height="20"
        width="6"
        x="5"
        y="6"
      />
      <rect
        className="fill-white dark:fill-neutral-900"
        fillOpacity="0.5"
        height="20"
        width="6"
        x="13"
        y="6"
      />
      <rect
        className="fill-white dark:fill-neutral-900"
        fillOpacity="0.2"
        height="20"
        width="6"
        x="21"
        y="6"
      />
    </svg>
  )
}
