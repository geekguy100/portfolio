import { ShowcasePiece } from "@/components/showcase-piece"
import { ShowcaseSection } from "@/components/showcase-section"
import { content } from "@/misc/showcase.json"

export default function Projects() {
  return (
    <ShowcaseSection id="projects" title="Projects" description="The larger projects I worked on throughout my career">
      {content.map((piece) => (
        <ShowcasePiece key={piece.href} {...piece} />
      ))}
    </ShowcaseSection>
  )
}
