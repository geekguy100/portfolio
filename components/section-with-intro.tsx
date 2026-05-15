"use client"
import type { PropsWithChildren, ReactNode } from "react"
import { Article } from "./containers"
import { SECTION_MARGIN_BOTTOM, SectionTitle } from "./section-title"
import { childFadeInVariants, childSlideInVariants } from "@/lib/animation"
import SlideInContainer from "./slide-in-container"
import { motion } from "motion/react"

export interface ShowcaseSectionProps extends PropsWithChildren {
  title: string
  description?: ReactNode
  id: string
}

export function ArticleWithIntro({ title, description, id, children }: ShowcaseSectionProps) {
  return (
    <Article className="relative" id={id}>
      <SlideInContainer className={`text-center ${description && SECTION_MARGIN_BOTTOM}`}>
        <SectionTitle variants={childFadeInVariants} className={description !== undefined ? "mb-0" : ""}>
          {title}
        </SectionTitle>
        {typeof description === "string" ? (
          <motion.p variants={childSlideInVariants}>{description}</motion.p>
        ) : (
          description
        )}
      </SlideInContainer>
      {children}
    </Article>
  )
}
