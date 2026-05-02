import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export const SECTION_MARGIN_BOTTOM = "mb-1"
export function SectionTitle({ children, className, ...props }: ComponentProps<"h2">) {
  return (
    <h3 {...props} className={cn(`${SECTION_MARGIN_BOTTOM} text-center`, className)}>
      {children}
    </h3>
  )
}
