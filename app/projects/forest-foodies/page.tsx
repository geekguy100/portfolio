import { getProjectMetdata } from "@/lib/helpers"
import { PlayProject } from "../_components/play-project"
import { ProjectIntro, ProjectTitle, ProjectDescription } from "../_components/project-intro"
import { Project } from "../_components/project-wrapper"
import { SectionTitle } from "@/components/section-title"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"
import Link from "next/link"
import JamResults from "./_images/forest-foodies-results.png"
import { PopupImage } from "@/components/popup-image"
import { MotionParagraph } from "@/components/motion-primitives"
import { childFadeInVariants } from "@/lib/animation"

export const metadata = getProjectMetdata("forest-foodies")

export default function PeaceFighterPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Forest Foodies</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Forest Foodies was my team's submission to the{" "}
            <Link className="underline" href="https://itch.io/jam/gmtk-2024/rate/2910407" target="_blank">
              Game Maker's Toolkit Game Jam 2024
            </Link>
            .
          </ProjectDescription>
          <ProjectDescription>
            The theme of this jam was <span className="font-bold">Built to Scale</span> and was developed in 96 hours.
          </ProjectDescription>
          <ProjectDescription>
            Inspired by Pikmin and similar games, you control of a variety of forest creatures with the goal of
            collecting the ingredients required to cook stew before nightfall.
          </ProjectDescription>
        </div>
      </ProjectIntro>
      <PlayProject type="embed" downloadLink="" githubLink="" itchLink="https://geekguy100.itch.io/forest-foodies">
        <iframe src="https://itch.io/embed-upload/11242357?color=6f965f" allowFullScreen width="1000" height="700" />
      </PlayProject>
      <article>
        <SectionTitle>Jam Results</SectionTitle>
        <PopupImage
          width={320}
          height={218}
          src={JamResults}
          alt="The overall results of Forest Foodies in GMTK 2024"
          title="Jam Results"
          className="mx-auto"
        />
        <MotionParagraph variants={childFadeInVariants} className="text-center italic">
          Ranked from 16 ratings
        </MotionParagraph>
      </article>
      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Programming</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>3Cs</Responsibility>
            <Responsibility>Creature selection system</Responsibility>
            <Responsibility>Creature AI (carry weights, etc.)</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
