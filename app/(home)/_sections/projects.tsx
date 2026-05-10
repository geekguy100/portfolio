"use client"
import { ArticleWithIntro } from "@/components/section-with-intro"
import { ProjectTabs, type Section } from "../_components/project-tabs"
import { useCallback, useState, type ReactNode } from "react"

const descriptions: Record<Section, ReactNode> = {
  university: "Projects I worked on during my time in university",
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
    <div>
      <p>Projects I worked on during my time at The Aerospace Corporation</p>
      <div className="flex justify-center gap-2">
        <span>-</span>
        <p className="italic">Please note that due to the nature of the work conducted, information may be limited</p>
        <span>-</span>
      </div>
    </div>
  )
}
