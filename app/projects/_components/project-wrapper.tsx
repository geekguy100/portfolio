import type { PropsWithChildren } from "react"

export function Project({ children }: PropsWithChildren) {
  return <article className="space-y-4 lg:mx-45">{children}</article>
}
