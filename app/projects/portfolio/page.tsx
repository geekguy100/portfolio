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
import Link from "next/link"
import { PlayProject } from "../_components/play-project"
import { ProjectGameplay } from "../_components/project-gameplay"

export const metadata = getProjectMetdata("portfolio")

export default function PortfolioPage() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Portfolio</ProjectTitle>
        <ProjectDescription>
          I picked up full stack web development during my time at The Aerospace Corporation due to a project's updated
          requirements. My original portfolio was developed using Wix, but since I now know how to build websites, I
          decided to rebuild it using the skills I learned.
        </ProjectDescription>
      </ProjectIntro>
      <PlayProject
        title="Links"
        type="download"
        downloadLink=""
        githubLink="https://github.com/geekguy100/geekguy100.github.io"
      />
      <ProjectGameplay
        title="Development Progress"
        content={[
          {
            src: "/portfolio-dev-1.png",
            title: "Early site development",
            mimeType: "image/png",
            caption: "Early site development",
          },
          {
            src: "/portfolio-dev-2.png",
            title: "Final site development",
            mimeType: "image/png",
            caption: "Final site development",
          },
        ]}
      />

      <ProjectRoles title="Development">
        <ProjectRole>
          <ProjectRoleHeader>Technologies</ProjectRoleHeader>
          <Responsibilities className="[&_a]:underline">
            <Responsibility>
              <Link href="https://nextjs.org/" target="_blank">
                Next.js
              </Link>
            </Responsibility>

            <Responsibility>
              <Link href="https://ui.shadcn.com/" target="_blank">
                shadcn/ui
              </Link>
            </Responsibility>

            <Responsibility>
              <Link href="https://tailwindcss.com/" target="_blank">
                Tailwind CSS
              </Link>
            </Responsibility>

            <Responsibility>
              <Link href="https://motion.dev/" target="_blank">
                Motion
              </Link>{" "}
              for animation
            </Responsibility>
          </Responsibilities>
        </ProjectRole>

        <ProjectRole>
          <ProjectRoleHeader>Notable Efforts</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Created a PDF viewer component that uses Mozilla's pdf.js under the hood.
              <Responsibilities>
                <Responsibility>
                  Built with the intention of it being able to stand alone - not tightly coupled with the portfolio
                  application itself.
                </Responsibility>
                <Responsibility>Uses the Embla Carousel component as a container for each page.</Responsibility>
                <Responsibility>Developed custom hooks to provide a better developer experience.</Responsibility>
              </Responsibilities>
            </Responsibility>
            <Responsibility>
              Learned Motion.
              <Responsibilities>
                <Responsibilities>
                  Learned how to use the Motion animation library to provide clean, non-distracting animations that help
                  add some character to the site.
                </Responsibilities>
              </Responsibilities>
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
