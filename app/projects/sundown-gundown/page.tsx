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

export const metadata = getProjectMetdata("sundown-gundown")

export default function SundownGundownPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Sundown Gundown</ProjectTitle>
        <ProjectDescription>
          Sundown Gundown is a rapidly developed prototype made in around three weeks. Play as a lone cowboy whose sole
          goal is to rid the town of malicious bandits. Features a stamina system to encourage tactical gameplay,
          strategy, and decision making. Scope out your surroundings to find cover to hide behind, and take out the
          bandits before they take you out!
        </ProjectDescription>
      </ProjectIntro>
      <PlayProject
        type="download"
        githubLink="https://github.com/geekguy100/CowboyCapstonePrototype"
        downloadLink="https://drive.google.com/file/d/1KyqRJTag6QUuXfLSDVuCHmedKlMKWNwZ/view?usp=sharing"
      />
      <ProjectGameplay
        content={[
          {
            src: "/sundown-gundown.mp4",
            title: "Disaster Golf Gameplay Trailer",
            mimeType: "video/mp4",
          },
        ]}
      />
      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Core Gameplay Programming</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Enemy AI
              <Responsibilities>
                <Responsibility>Enemies will only navigate to non-destroyed cover</Responsibility>
              </Responsibilities>
            </Responsibility>

            <Responsibility>
              Weapons system utilizing Scriptable Objects for quick weapon creation / modification
            </Responsibility>

            <Responsibility>Stamina system to emphasize methodical and strategic gameplay</Responsibility>

            <Responsibility>3C's - Camera, controls, character</Responsibility>

            <Responsibility>Core gameplay loop</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>

      <article>
        <SectionTitle>Design Briefs</SectionTitle>
        <PdfViewer
          showPageNumber
          downloadable
          fileName="Sundown Gundown Design Briefs"
          carouselProps={{ className: "mx-48" }}
          src="/sundowngundown-briefs.pdf"
        />
      </article>

      <article>
        <SectionTitle>Final Changes</SectionTitle>
        <PdfViewer
          showPageNumber
          downloadable
          fileName="Sundown Gundown Final Changes"
          carouselProps={{ className: "mx-48" }}
          src="/sundowngundown-final.pdf"
        />
      </article>

      <ProjectFooter href="https://drive.google.com/drive/folders/1iUNzn4k2bX_IUP7jtwLWE_r0k8BWgmtH?usp=sharing" />
    </Project>
  )
}
