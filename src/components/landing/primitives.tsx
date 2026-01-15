import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Container({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl px-6 md:max-w-3xl lg:max-w-7xl lg:px-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function Heading({
  children,
  className,
  ...props
}: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-balance font-display text-5xl/12 tracking-tight sm:text-[5rem]/20",
        "text-neutral-950 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function Subheading({
  children,
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-pretty text-[2rem]/10 tracking-tight sm:text-5xl/14",
        "text-neutral-950 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function Eyebrow({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "font-semibold text-sm/7",
        "text-neutral-700 dark:text-neutral-400",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function Text({
  children,
  className,
  size = "md",
  ...props
}: ComponentProps<"div"> & { size?: "md" | "lg" }) {
  return (
    <div
      className={cn(
        size === "md" && "text-base/7",
        size === "lg" && "text-lg/8",
        "text-neutral-700 dark:text-neutral-400",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function Section({
  eyebrow,
  headline,
  subheadline,
  cta,
  className,
  children,
  ...props
}: {
  eyebrow?: ReactNode
  headline?: ReactNode
  subheadline?: ReactNode
  cta?: ReactNode
} & ComponentProps<"section">) {
  return (
    <section className={cn("py-16", className)} {...props}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        {headline && (
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="flex flex-col gap-2">
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              <Subheading>{headline}</Subheading>
            </div>
            {subheadline && <Text className="text-pretty">{subheadline}</Text>}
            {cta}
          </div>
        )}
        <div>{children}</div>
      </Container>
    </section>
  )
}
