import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

export function ProjectFooter({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children: ReactNode }) {
  return (
    <div {...props} className={cn("flex flex-col items-center italic", className)}>
      {children}
    </div>
  )
}
