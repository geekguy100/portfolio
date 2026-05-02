import type { PropsWithChildren } from "react"
import { Section } from "./containers"
import { SECTION_MARGIN_BOTTOM, SectionTitle } from "./section-title"

export interface ShowcaseSectionProps extends PropsWithChildren {
  title: string
  description?: string
  id: string
}

export function SectionWithIntro({ title, description, id, children }: ShowcaseSectionProps) {
  return (
    <Section id={id}>
      <div className={`text-center ${description && SECTION_MARGIN_BOTTOM}`}>
        <SectionTitle className={description && "mb-0"}>{title}</SectionTitle>
        <p>{description}</p>
      </div>
      {children}
    </Section>
  )
}
