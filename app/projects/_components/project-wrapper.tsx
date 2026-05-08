import { Article } from "@/components/containers"
import type { PropsWithChildren } from "react"

export function Project({ children }: PropsWithChildren) {
  return <Article className="gap-4">{children}</Article>
}
