import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookIcon, SatelliteIcon } from "lucide-react"
import { ShowcasePiece } from "@/components/showcase-piece"
import { content } from "@/misc/showcase.json"

export type Section = "university" | "aerospace"
export interface ProjectTabProps {
  onTabChanged?(value: Section): void
  defaultValue: Section
}
export function ProjectTabs({ onTabChanged, defaultValue }: ProjectTabProps) {
  return (
    <Tabs onValueChange={onTabChanged as (value: string) => void} defaultValue={defaultValue}>
      <TabsList className="mx-auto w-full">
        <TabsTrigger value="university">
          <BookIcon />
          University
        </TabsTrigger>
        <TabsTrigger value="aerospace">
          <SatelliteIcon />
          Aerospace
        </TabsTrigger>
      </TabsList>
      <TabsContent value="university">
        <UniversityProjects />
      </TabsContent>
      <TabsContent value="aerospace">
        <AerospaceProjects />
      </TabsContent>
    </Tabs>
  )
}

function UniversityProjects() {
  return <GeneralPiece section="university" />
}

function AerospaceProjects() {
  return <GeneralPiece section="aerospace" />
}

function GeneralPiece({ section }: { section: string }) {
  return content
    .filter((piece) => piece.section === section)
    .map((piece) => <ShowcasePiece key={piece.id} {...piece} />)
}
