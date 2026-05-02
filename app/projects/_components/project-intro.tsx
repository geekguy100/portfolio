import { SectionTitle } from "@/components/section-title"
import type { PropsWithChildren } from "react"

export function ProjectIntro({ children }: PropsWithChildren) {
  return <div className="lg:mx-45">{children}</div>
}

export function ProjectTitle({ children }: PropsWithChildren) {
  return <SectionTitle className="capitalize">{children}</SectionTitle>
}

export function ProjectDescription({ children }: PropsWithChildren) {
  return <p className="text-left">{children}</p>
}
