"use client"
import { Container } from "@/components/containers"
import { usePathname } from "next/navigation"
import type { PropsWithChildren } from "react"
import { ProjectContext, type ProjectDetails } from "./_context/project-context"
import { content } from "@/misc/showcase.json"
import { Project } from "./_components/project-wrapper"
import { ProjectDescription, ProjectIntro, ProjectTitle } from "./_components/project-intro"
import { PlayProject } from "./_components/play-project"

const STARTING_INDEX = "projects/".length + 1

export default function ProjectsLayout({ children }: PropsWithChildren) {
  const pathname = usePathname().slice(STARTING_INDEX)
  const projectDetails = content.find((t) => t.id === pathname)

  return (
    <ProjectContext.Provider value={projectDetails as ProjectDetails | undefined}>
      <Container type="div" className="gap-4">
        {projectDetails && (
          <Project>
            <ProjectIntro>
              <ProjectTitle>{projectDetails.title}</ProjectTitle>
              {projectDetails.longDescriptions?.map((t, i) => (
                <ProjectDescription key={i}>{t}</ProjectDescription>
              ))}
            </ProjectIntro>
            {projectDetails.playProject.type === "download" && (
              <PlayProject {...(projectDetails.playProject as ProjectDetails["playProject"] & { type: "download" })} />
            )}
            {children}
          </Project>
        )}
        {!projectDetails && <p>No details associated with this project</p>}
      </Container>
    </ProjectContext.Provider>
  )
}
