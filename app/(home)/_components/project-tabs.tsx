import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookIcon, HouseIcon, SatelliteIcon } from "lucide-react"
import { ShowcasePiece, type ShowcasePieceProps } from "@/components/showcase-piece"
import { content } from "@/misc/showcase.json"
import { SteamIcon } from "@/components/icons/brand-icons"
import type { ReactNode } from "react"
import type { ShowcasePiece as ShowcasePieceType } from "@/types"
import { JarIcon } from "@/components/icons/lab-icons"

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
        <PersonalProjects />
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

function PersonalProjects() {
  return <GeneralPiece section="personal" />
}

function GeneralPiece({ section }: { section: Section }) {
  const pieces = (content as ShowcasePieceType[])
    .filter((piece) => piece.section === section)
    .map((piece) => <ShowcasePiece key={piece.id} icon={getPieceIcon(piece)} {...piece} />)

  return pieces.length > 0 ? pieces : <p className="text-center">There's nothing here yet</p>
}

function getPieceIcon({ id, misc }: ShowcasePieceProps): ReactNode | undefined {
  if (id === "disastergolf") return <SteamIcon />
  if (misc === "gameJam") return <JarIcon />
  return undefined
}
