import { PlayProject } from "../_components/play-project"
import { ProjectGameplay } from "../_components/project-gameplay"
import { ProjectDescription, ProjectIntro, ProjectTitle } from "../_components/project-intro"
import { getProjectMetdata } from "@/lib/helpers"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"
import { Project } from "../_components/project-wrapper"
import { SectionTitle } from "@/components/section-title"
import { PopupImage } from "@/components/popup-image"
import { PdfViewer } from "@/components/pdf-viewing/pdf-viewer-lazy"
import { ProjectFooter } from "../_components/project-footer"
import { MotionArticleContainer } from "../_components/motion-article-container"
import { MotionPdfViewer } from "../_components/motion-pdf-viewer"

export const metadata = getProjectMetdata("drop-of-life")

export default function DropOfLifePage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>A Drop of Life</ProjectTitle>
        <ProjectDescription>
          A rapidly developed prototype made in around three weeks. Play as a droplet of water, shape shifting through
          the various states of matter to explore the environment and water the dying flowers.
        </ProjectDescription>
      </ProjectIntro>
      <PlayProject
        type="download"
        githubLink="https://github.com/geekguy100/IM388-A-Drop-of-Life/"
        downloadLink="https://drive.google.com/file/d/1mxJtP-POoPq0czHlDWoavCrxZ65IXGxu/view?usp=sharing"
      />

      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Core Gameplay Programmer</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Responsible for the creation of the state-swapping system.
              <Responsibilities>
                <Responsibility>
                  Utilizes multiple design patterns, most notably the state pattern and observer pattern.
                </Responsibility>
                <Responsibility>
                  Scriptable Objects used as data containers to easily swap / modify a state's functionality.
                </Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>Character motor system utilizing Scriptable Objects as data containers.</Responsibility>
            <Responsibility>
              Interaction system using the Strategy pattern to create modular and extendable interactables.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Documentation</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Details the various design patterns and principles used to aid the budding programmers on the team and to
              encourage best practices.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
      <article>
        <SectionTitle>Documentation</SectionTitle>
        <MotionPdfViewer
          showPageNumber
          downloadable
          fileName="A Drop of Life Design Pattern Overview"
          src="/dropoflife-patterns.pdf"
        />
      </article>
      <article>
        <SectionTitle>Design Briefs</SectionTitle>
        <MotionPdfViewer
          showPageNumber
          downloadable
          fileName="A Drop of Life Design Briefs"
          src="/dropoflife-briefs.pdf"
        />
      </article>
      <ProjectFooter href="https://drive.google.com/drive/folders/1JxXxhAGcoq3D6GyPBUMfFaCfe9vpgaRd?usp=sharing" />
    </Project>
  )
}
