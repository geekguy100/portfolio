"use client"
import { ArticleWithIntro } from "@/components/section-with-intro"
import { ProjectTabs, type Section } from "../_components/project-tabs"
import { useCallback, useState, type ReactNode } from "react"
import { MotionDiv, MotionParagraph } from "@/components/motion-primitives"
import { childFadeInVariants } from "@/lib/animation"

const descriptions: Record<Section, ReactNode> = {
  university: <UniversityDescription />,
  aerospace: <AerospaceDescription />,
}

const DEFAULT_SECTION: Section = "university"
export default function ProjectsShowcase() {
  const [description, setDescription] = useState(descriptions[DEFAULT_SECTION])
  const setDescriptionFromTab = useCallback((tab: Section) => setDescription(descriptions[tab]), [])

  return (
    <ArticleWithIntro animate="visible" id="projects" title="Projects" description={description}>
      <ProjectTabs defaultValue={DEFAULT_SECTION} onTabChanged={setDescriptionFromTab} />
    </ArticleWithIntro>
  )
}

function UniversityDescription() {
  return (
    <MotionParagraph variants={childFadeInVariants}>Projects I worked on during my time in university</MotionParagraph>
  )
}

function AerospaceDescription() {
  return (
    <MotionDiv variants={childFadeInVariants}>
      <p>Projects I worked on during my time at The Aerospace Corporation</p>
      <div className="flex justify-center gap-2">
        <span>-</span>
        <p className="italic">Please note that due to the nature of the work conducted, information may be limited</p>
        <span>-</span>
      </div>
    </MotionDiv>
  )
}
