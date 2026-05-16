"use client"
import type { PropsWithChildren, ReactNode } from "react"
import { Article } from "./containers"
import { SECTION_MARGIN_BOTTOM, SectionTitle } from "./section-title"
import { childFadeInVariants, containerSlideInProps } from "@/lib/animation"
import { motion } from "motion/react"

export interface ShowcaseSectionProps extends PropsWithChildren {
  title: string
  description?: ReactNode
  id: string
}

export function ArticleWithIntro({ title, description, id, children }: ShowcaseSectionProps) {
  return (
    <Article {...containerSlideInProps} className="relative" id={id}>
      <div className={`text-center ${description && SECTION_MARGIN_BOTTOM}`}>
        <SectionTitle variants={childFadeInVariants} className={description !== undefined ? "mb-0" : ""}>
          {title}
        </SectionTitle>
        {typeof description === "string" ? (
          <motion.p variants={childFadeInVariants}>{description}</motion.p>
        ) : (
          description
        )}
      </div>
      {children}
    </Article>
  )
}
