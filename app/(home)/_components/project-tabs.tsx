import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookIcon, HouseIcon, SatelliteIcon } from "lucide-react"
import { ShowcasePiece } from "@/components/showcase-piece"
import { content } from "@/misc/showcase.json"
import { SteamIcon } from "@/components/brand-icons"
import type { ReactNode } from "react"

export type Section = "university" | "aerospace" | "personal"
export interface ProjectTabProps {
  onTabChanged?(value: Section): void
  defaultValue: Section
}

export function ProjectTabs({ onTabChanged, defaultValue }: ProjectTabProps) {
  return (
    <Tabs defaultValue={defaultValue} onValueChange={onTabChanged as (value: string) => void}>
      <TabsList className="mx-auto w-full">
        <TabsTrigger value="university">
          <BookIcon />
          University
        </TabsTrigger>
        <TabsTrigger value="aerospace">
          <SatelliteIcon />
          Aerospace
        </TabsTrigger>
        <TabsTrigger value="personal">
          <HouseIcon />
          Personal
        </TabsTrigger>
      </TabsList>
      <TabsContent value="university">
        <UniversityProjects />
      </TabsContent>
      <TabsContent value="aerospace">
        <AerospaceProjects />
      </TabsContent>
      <TabsContent value="personal">
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
  const pieces = content
    .filter((piece) => piece.section === section)
    .map((piece) => <ShowcasePiece key={piece.id} icon={getPieceIcon(piece.id)} {...piece} />)

  return pieces.length > 0 ? pieces : <p className="text-center">There's nothing here yet</p>
}

function getPieceIcon(id: string): ReactNode | undefined {
  if (id !== "disastergolf") return undefined
  return <SteamIcon />
}
