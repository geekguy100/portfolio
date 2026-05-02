import { cn } from "@/lib/utils"
import type { ComponentProps, HTMLAttributes } from "react"

const COMMON_CLASSNAME: HTMLAttributes<"div">["className"] = "site-section flex flex-col gap-2 p-6"

export function Section({ children, id, className, ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(COMMON_CLASSNAME, className)} id={id}>
      {children}
    </section>
  )
}

export function Article({ children, id, className, ...props }: ComponentProps<"article">) {
  return (
    <article {...props} className={cn(COMMON_CLASSNAME, className)} id={id}>
      {children}
    </article>
  )
}

export function DivSection({ children, id, className, ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className={cn(COMMON_CLASSNAME, className)} id={id}>
      {children}
    </div>
  )
}
