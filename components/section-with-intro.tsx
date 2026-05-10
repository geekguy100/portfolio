import type { PropsWithChildren, ReactNode } from "react"
import { Article } from "./containers"
import { SECTION_MARGIN_BOTTOM, SectionTitle } from "./section-title"

export interface ShowcaseSectionProps extends PropsWithChildren {
  title: string
  description?: ReactNode
  id: string
}

export function ArticleWithIntro({ title, description, id, children }: ShowcaseSectionProps) {
  return (
    <Article id={id}>
      <div className={`text-center ${description && SECTION_MARGIN_BOTTOM}`}>
        <SectionTitle className={description !== undefined ? "mb-0" : ""}>{title}</SectionTitle>
        {typeof description === "string" ? <p>{description}</p> : description}
      </div>
      {children}
    </Article>
  )
}
