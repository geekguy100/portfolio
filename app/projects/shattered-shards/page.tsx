import { getProjectMetdata } from "@/lib/helpers"
import { PlayProject } from "../_components/play-project"
import { ProjectIntro, ProjectTitle, ProjectDescription } from "../_components/project-intro"
import { Project } from "../_components/project-wrapper"
import { PdfViewer } from "@/components/pdf-viewing/pdf-viewer-lazy"
import { SectionTitle } from "@/components/section-title"
import { ProjectFooter } from "../_components/project-footer"
import Link from "next/link"
import { ProjectGameplay } from "../_components/project-gameplay"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"

export const metadata = getProjectMetdata("shattered-shards")

export default function ShatteredShards() {
  return (
    <Project>
      <ProjectIntro>
        <ProjectTitle>Shattered Shards</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Shattered Shards is a rapidly developed prototype made in around three weeks. Explore an eerie, distorted,
            abandoned school for notes left by previous captives to figure out what happened and how you'll get out.
            Keep your eyes peeled for the monster lurking the halls.
          </ProjectDescription>
        </div>
      </ProjectIntro>
      <PlayProject
        type="download"
        downloadLink="https://drive.google.com/file/d/1kPSF9F72ahyI6RNlIAzy_j9w3luQ46FS/view?usp=sharing"
        githubLink="https://github.com/geekguy100/HorrorGame"
      />
      <ProjectGameplay
        content={[
          {
            src: "/horror_gameplay.mp4",
            title: "Shattered Shards Gameplay",
            mimeType: "video/mp4",
          },
        ]}
      />
      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Core Gameplay Programmer</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>First person character controller</Responsibility>
            <Responsibility>Interaction system utilizing the strategy pattern</Responsibility>
            <Responsibility>Note collection and journal system</Responsibility>
            <Responsibility>Event system to trigger jump scares</Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Technical Art</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Utilized Unity's HDRP volumes to create volumetric fog that varies between environments.
            </Responsibility>
            <Responsibility>Dust particles in the air using Unity Shader Graph.</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
      <article>
        <SectionTitle>Design Briefs</SectionTitle>
        <PdfViewer
          showPageNumber
          downloadable
          fileName="Shattered Shards Design Briefs"
          carouselProps={{ className: "mx-48" }}
          src="/horror_design_briefs.pdf"
        />
      </article>
      <article>
        <SectionTitle>Final Changes</SectionTitle>
        <PdfViewer
          showPageNumber
          downloadable
          fileName="Shattered Shards Final Changes"
          carouselProps={{ className: "mx-48" }}
          src="/horror_final_changes.pdf"
        />
      </article>
      <ProjectFooter>
        <p>
          For a full list of documents, forms, assets, etc., please click{" "}
          <Link
            href="https://drive.google.com/drive/folders/1D6u7gq7-ZMg7tUY_IlXbfOdVSaPgalBy?usp=sharing"
            target="_blank"
            className="underline"
          >
            here
          </Link>
          .
        </p>
      </ProjectFooter>
    </Project>
  )
}
