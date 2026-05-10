"use client"
import { ArticleWithIntro } from "@/components/section-with-intro"
import { ProjectTabs, type Section } from "../_components/project-tabs"
import { useCallback, useState, type ReactNode } from "react"

const descriptions: Record<Section, ReactNode> = {
  university: "The projects I worked on during my time in university.",
  aerospace: <AerospaceDescription />,
}

const DEFAULT_SECTION: Section = "university"
export default function ProjectsShowcase() {
  const [description, setDescription] = useState(descriptions[DEFAULT_SECTION])
  const setDescriptionFromTab = useCallback((tab: Section) => setDescription(descriptions[tab]), [])

  return (
    <ArticleWithIntro id="projects" title="Projects" description={description}>
      <ProjectTabs defaultValue={DEFAULT_SECTION} onTabChanged={setDescriptionFromTab} />
    </ArticleWithIntro>
  )
}

function AerospaceDescription() {
  return (
    <div className="flex justify-center gap-2">
      <span>-</span>
      <p>Please note that due to the nature of the work conducted, information is limited</p>
      <span>-</span>
    </div>
  )
}
