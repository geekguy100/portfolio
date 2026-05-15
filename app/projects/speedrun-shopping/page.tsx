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
import { MotionArticleContainer } from "../_components/motion-article-container"
import { MotionPdfViewer } from "../_components/motion-pdf-viewer"

export const metadata = getProjectMetdata("speedrun-shopping")

export default function SpeedrunShoppingPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Speedrun Shopping</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Speedrun Shopping is a frantic, fast-paced shopping simulator. Sprint around the shopping center in search
            of the items on your shopping list, and ram into other shoppers to make them drop their items so you can
            steal them for yourself. Once you have all of the items you need, check out and compete for a faster time.
            Speed is the name of the game!
          </ProjectDescription>
          <ProjectDescription>
            Created for CIS 497 - Unity Design Patterns with the theme 'comedy' to practice implementing design patterns
            into larger projects with a team.
          </ProjectDescription>
        </div>
      </ProjectIntro>
      <PlayProject type="embed" downloadLink="" githubLink="https://github.com/geekguy100/CIS497_ComedyGame">
        <iframe src="https://itch.io/embed-upload/3535053?color=333333" width="1000" height="820" />
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
              Responsible for enemy AI
              <Responsibilities>
                <Responsibility>Founded on the state pattern</Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>Interaction system</Responsibility>
            <Responsibility>Shopping list behavior</Responsibility>
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
          fileName="Speedrun Shopping Design Docs"
          src="/speedrunshopping_docs.pdf"
        />
      </MotionArticleContainer>
      <ProjectFooter href="https://drive.google.com/drive/u/0/folders/1c30YEPJtQDrso8lM7uSEHH6bER8n0z2q" />
    </Project>
  )
}
