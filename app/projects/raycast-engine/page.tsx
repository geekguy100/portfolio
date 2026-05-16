import { PlayProject } from "../_components/play-project"
import { ProjectGameplay } from "../_components/project-gameplay"
import { ProjectDescription, ProjectIntro, ProjectTitle } from "../_components/project-intro"
import { getProjectMetdata } from "@/lib/helpers"
import {
  ProjectRole,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"
import { Project } from "../_components/project-wrapper"
import Link from "next/link"

export const metadata = getProjectMetdata("raycast-engine")

export default function RaycastEnginePage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Raycasting Engine</ProjectTitle>
        <ProjectDescription>
          To learn more about the C programming language and in pursuit of developing my own game engine, I am working
          through the{" "}
          <Link
            className="underline"
            target="_blank"
            href="https://pikuma.com/courses/raycasting-engine-tutorial-algorithm-javascript"
          >
            Raycasting Engine Programming
          </Link>{" "}
          course by Pikuma.
        </ProjectDescription>
      </ProjectIntro>
      <ProjectGameplay
        content={[
          {
            src: "/ball-barrage.gif",
            title: "Disaster Golf Gameplay Trailer",
            mimeType: "image/gif",
          },
        ]}
      />
      <ProjectRoles title="Takeaways">
        <ProjectRole>
          <Responsibilities>
            <Responsibility>
              Hosted sprint retrospectives to discuss the most recent sprint.
              <Responsibilities>
                <Responsibility>
                  I made sure that the team knew these discussions were open for anyone to provide feedback.
                </Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>Verified all work meets the discussed vision we had for the game.</Responsibility>
            <Responsibility>
              Managed discipline leads and sub-team leads to make sure the team is not only contributing to the
              project's creative vision but learning along the way.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
