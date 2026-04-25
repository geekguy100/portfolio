import { ShowcaseCard } from "@/components/showcase-card"
import { content } from "@/misc/showcase.json"

export default function Projects() {
  return (
    <div className="flex flex-col gap-2" id="projects">
      <div className="text-center">
        <h3>Projects</h3>
        <p>The larger projects I worked on throughout my career</p>
      </div>
      {content.map((piece) => (
        <ShowcaseCard key={piece.href} {...piece} />
      ))}
    </div>
  )
}
