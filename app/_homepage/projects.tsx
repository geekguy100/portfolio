import { ShowcasePiece } from "@/components/showcase-piece"
import { SectionWithIntro } from "@/components/section-with-intro"
import { content } from "@/misc/showcase.json"

export default function ProjectsShowcase() {
  return (
    <SectionWithIntro id="projects" title="Projects" description="The larger projects I worked on throughout my career">
      {content.map((piece) => (
        <ShowcasePiece key={piece.id} {...piece} />
      ))}
    </SectionWithIntro>
  )
}
