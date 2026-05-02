import type { PropsWithChildren } from "react"
import { Section } from "./section"

export interface ShowcaseSectionProps extends PropsWithChildren {
  title: string
  description?: string
  id: string
}

export function ShowcaseSection({ title, description, id, children }: ShowcaseSectionProps) {
  return (
    <Section id={id}>
      <div className="text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {children}
    </Section>
  )
}
