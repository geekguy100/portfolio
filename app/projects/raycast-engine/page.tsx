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
        <ProjectDescription>
          I think developing your own engine is important for programmers in the game development industry because it
          provides insight into what goes on under the hood of commercial game engines.
        </ProjectDescription>
        <ProjectDescription>
          Understanding C is also important for programmers because you rely less on abstractions, and that helps you
          understand <span className="italic">how</span> the computer will be executing your program while providing
          insight into what goes on under the hood hardware-wise.
        </ProjectDescription>
      </ProjectIntro>
      <ProjectGameplay
        title="Showcase"
        content={[
          {
            src: "/js_raycasting_demo.gif",
            title: "Prototype of raycasting engine written in JavaScript",
            mimeType: "image/gif",
            caption: "Prototype of raycasting engine written in JavaScript",
          },
          {
            src: "/c_raycasting_demo.gif",
            title: "In-progress showcase of minimap written in C",
            mimeType: "image/gif",
            caption: "In-progress showcase of minimap written in C",
          },
        ]}
      />
    </Project>
  )
}
