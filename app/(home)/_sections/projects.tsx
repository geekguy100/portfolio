"use client"
import { ArticleWithIntro } from "@/components/section-with-intro"
import { ProjectTabs, type Section } from "../_components/project-tabs"
import { useCallback, useState } from "react"

const descriptions: Record<Section, string> = {
  university: "The projects I worked on during my time in university.",
  aerospace: "Some of the projects I worked on during my time at The Aerospace Corporation.",
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
