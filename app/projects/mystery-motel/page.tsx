import { getProjectMetdata } from "@/lib/helpers"
import { PlayProject } from "../_components/play-project"
import { ProjectIntro, ProjectTitle, ProjectDescription } from "../_components/project-intro"
import { Project } from "../_components/project-wrapper"
import { PdfViewer } from "@/components/pdf-viewing/pdf-viewer-lazy"
import { SectionTitle } from "@/components/section-title"
import { ProjectFooter } from "../_components/project-footer"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"
import Link from "next/link"
import { MotionArticleContainer } from "../_components/motion-article-container"
import { MotionPdfViewer } from "../_components/motion-pdf-viewer"

export const metadata = getProjectMetdata("mystery-motel")

export default function MysteryMotelPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Mystery at the Murder Motel</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Mystery at the Murder Motel is a puzzle game where you play as a detective trying to solve a classic
            whodunnit case. Use your magnifying class to record clues around the motel and piece the clues together
            using your detective journal. Everyone's got something to say - after questioning all the witnesses about
            your recorded clues, accuse one and (hopefully) bring justice to the murderer.
          </ProjectDescription>
          <ProjectDescription>
            Created for CIS 497 - Unity Design Patterns with the theme 'meaning' to practice implementing design
            patterns into larger projects with a team.
          </ProjectDescription>
        </div>
      </ProjectIntro>
      <PlayProject
        type="embed"
        downloadLink="https://geekguy100.itch.io/detective-game"
        githubLink="https://github.com/geekguy100/CIS497_DetectiveGame"
      >
        <iframe src="https://itch.io/embed-upload/3791494?color=333333" allowFullScreen width="1300" height="820" />
      </PlayProject>
      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader className="no-underline">Project Lead / Producer</ProjectRoleHeader>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader className="no-underline">Programming Lead</ProjectRoleHeader>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Core Gameplay Programming</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Responsible for the clue collection system
              <Responsibilities>
                <Responsibility>Founded on the state pattern</Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>
              Created JSON dialogue system to tie dialogue to clue interrogation, and multiple gameplay scenarios
              <Responsibilities>
                <Responsibility>
                  <Link
                    className="underline"
                    href="https://github.com/geekguy100/CIS497_DetectiveGame/tree/main/Assets/Resources"
                    target="_blank"
                  >
                    Click here to view associated resources
                  </Link>
                </Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>Interaction system</Responsibility>
            <Responsibility>Core gameplay loop</Responsibility>
          </Responsibilities>
        </ProjectRole>

        <ProjectRole>
          <ProjectRoleHeader>Documentation</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>Multiple UML diagrams modelling design pattern incorporation</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>

      <MotionArticleContainer>
        <SectionTitle>Design Documentation</SectionTitle>
        <MotionPdfViewer
          showPageNumber
          downloadable
          fileName="Mystery at the Murder Motel Design Docs"
          src="/mysterymotel-design.pdf"
        />
      </MotionArticleContainer>
      <ProjectFooter href="https://drive.google.com/drive/u/0/folders/1DGNkt5FHlMdwJEfBSVksHEKsVeJhthUF" />
    </Project>
  )
}
