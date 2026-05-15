"use client"
import { Article } from "@/components/containers"
import { containerSlideInProps } from "@/lib/animation"
import type { PropsWithChildren } from "react"

export function Project({ children }: PropsWithChildren) {
  return (
    <Article {...containerSlideInProps} className="gap-4">
      {children}
    </Article>
  )
}
