import { getProjectMetdata } from "@/lib/helpers"
import { PlayProject } from "../_components/play-project"
import { ProjectIntro, ProjectTitle, ProjectDescription } from "../_components/project-intro"
import { Project } from "../_components/project-wrapper"
import { SectionTitle } from "@/components/section-title"
import { ProjectFooter } from "../_components/project-footer"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"
import { ProjectGameplay } from "../_components/project-gameplay"
import { MotionArticleContainer } from "../_components/motion-article-container"
import { MotionPdfViewer } from "../_components/motion-pdf-viewer"

export const metadata = getProjectMetdata("ball-barrage")

export default function BallBarragePage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Project: Ball Barrage</ProjectTitle>
        <ProjectDescription>
          Project: Ball Barrage is a rapidly developed prototype made in around three weeks. Jump, dodge, and dash
          around an arena filled with dodgeballs to whip and targets to hit. Make use of the precision aiming system to
          line up your throws, and bounce on the jump pads to soar into the air, raining dodgeballs from above.
        </ProjectDescription>
      </ProjectIntro>

      <PlayProject
        type="download"
        downloadLink="https://drive.google.com/file/d/1HhoSgexqI4W7K6al0_EW6CHTuuHtV6OZ/view?usp=sharing"
        githubLink="https://github.com/geekguy100/DodgeballGame"
      />

      <ProjectGameplay
        content={[
          {
            src: "/ball-barrage.mp4",
            title: "Project: Ball Barrage Gameplay",
            mimeType: "video/mp4",
          },
        ]}
      />

      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Core Gameplay Programming</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>3C's</Responsibility>
            <Responsibility>Pickup and throwing system</Responsibility>
            <Responsibility>Enemy AI</Responsibility>
            <Responsibility>Core gameplay loop</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>

      <MotionArticleContainer>
        <SectionTitle>Design Documentation</SectionTitle>
        <MotionPdfViewer
          showPageNumber
          downloadable
          fileName="Ball Barrage Design Docs"
          src="/ballbarrage-design.pdf"
        />
      </MotionArticleContainer>

      <MotionArticleContainer>
        <SectionTitle>Final Changes</SectionTitle>
        <MotionPdfViewer
          showPageNumber
          downloadable
          fileName="Ball Barrage Final Changes"
          src="/ballbarrage-final.pdf"
        />
      </MotionArticleContainer>

      <ProjectFooter href="https://drive.google.com/drive/folders/1wZLp4Qis0brMEPaf6uy0Qv4K1j_MN0PR?usp=sharing" />
    </Project>
  )
}
