import type { PropsWithChildren } from "react"
import { Article } from "./containers"
import { SECTION_MARGIN_BOTTOM, SectionTitle } from "./section-title"

export interface ShowcaseSectionProps extends PropsWithChildren {
  title: string
  description?: string
  id: string
}

export function ArticleWithIntro({ title, description, id, children }: ShowcaseSectionProps) {
  return (
    <Article id={id}>
      <div className={`text-center ${description && SECTION_MARGIN_BOTTOM}`}>
        <SectionTitle className={description && "mb-0"}>{title}</SectionTitle>
        <p>{description}</p>
      </div>
      {children}
    </Article>
  )
}
