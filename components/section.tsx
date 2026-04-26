import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export function Section({ children, id, className, ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn("site-section flex flex-col gap-2 p-6", className)} id={id}>
      {children}
    </section>
  )
}
