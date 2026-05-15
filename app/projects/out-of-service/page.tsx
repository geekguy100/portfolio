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
import Link from "next/link"
import { ProjectGameplay } from "../_components/project-gameplay"
import { childSlideInVariants } from "@/lib/animation"
import {
  MotionArticle,
  MotionBlockquote,
  MotionDiv,
  MotionHeader5,
  MotionParagraph,
} from "@/components/motion-primitives"
import { MotionArticleContainer } from "../_components/motion-article-container"
import { MotionPdfViewer } from "../_components/motion-pdf-viewer"

export const metadata = getProjectMetdata("out-of-service")

export default function OutOfServicePage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Out Of Service</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Out of Service is a rapidly developed prototype made in around three weeks.
          </ProjectDescription>
          <ProjectDescription>
            Inspired by 90s-themed FMV games such as "Her Story" and "Night Trap", Out of Service is a FMV game where
            you are in charge of helping the protagonists find a working laundry machine - one that isn't out of
            service.
          </ProjectDescription>
          <ProjectDescription>
            Control the fates of a cast of wacky characters through a series of unorthodox encounters.
          </ProjectDescription>
          <ProjectDescription>
            You call the shots as you lead the characters on a quest in search of a working laundry machine while
            exploring the never-before-seen side of the Saint James apartment complex
          </ProjectDescription>
        </div>
      </ProjectIntro>
      <PlayProject
        type="download"
        downloadLink="https://drive.google.com/file/d/1DBc_dLZyocg4E56GaxQtA2FjnleRPgr4/view?usp=sharing"
        githubLink="https://github.com/geekguy100/FMVGame/"
      />

      <article className="space-y-2">
        <SectionTitle>Praise for Out Of Service</SectionTitle>
        <MotionArticle>
          <MotionHeader5 variants={childSlideInVariants}>Free Game Planet</MotionHeader5>
          <MotionBlockquote
            variants={childSlideInVariants}
            cite="https://www.freegameplanet.com/out-of-service-downloadable-game/"
            className="italic"
          >
            Out of Service is a wonderfully silly and knowingly cheesy 90's styled FMV adventure where things get very
            weird as you and your mildly psychotic friend set out to do some laundry.
          </MotionBlockquote>
          <MotionDiv variants={childSlideInVariants}>
            <Link className="underline" href="https://www.freegameplanet.com/out-of-service-downloadable-game/">
              https://www.freegameplanet.com/out-of-service-downloadable-game/
            </Link>
          </MotionDiv>
        </MotionArticle>
        <article>
          <MotionHeader5 variants={childSlideInVariants}>YouTube Playthrough</MotionHeader5>
          <MotionParagraph variants={childSlideInVariants} className="italic">
            - Ya Pal Korin
          </MotionParagraph>
          <ProjectGameplay
            content={[
              {
                src: "https://www.youtube.com/embed/xTnpD2aEzd4?si=YW-rJ0xp11OhqxH4",
                title: "Out of Service Playthrough",
              },
            ]}
          />
        </article>
      </article>

      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Tools Programming</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Custom-made tools to streamline the FMV creation process in Unity
              <Responsibilities>
                <Responsibility>Based around ScriptableObjects to simplify scenario creation</Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>
              Custom Unity editor using the <span className="italic">Odin - Inspector and Serializer</span> plugin
            </Responsibility>
            <Responsibility>Documentation to help teammates use tools</Responsibility>
            <Responsibility>
              Inventory system to keep track of items the player picks up throughout their game
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>

      <MotionArticleContainer>
        <SectionTitle>FMV Maker Tools Documentation</SectionTitle>
        <MotionPdfViewer showPageNumber downloadable fileName="FMV Maker Tools Documentation" src="/fmv-docs.pdf" />
      </MotionArticleContainer>
      <ProjectFooter href="https://drive.google.com/drive/folders/15nndCQTnqM_eK1M2GP7vSmePMREDLYCR?usp=sharing" />
    </Project>
  )
}
