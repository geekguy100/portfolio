"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookIcon, SatelliteIcon } from "lucide-react"
import { ShowcasePiece } from "@/components/showcase-piece"
import { content } from "@/misc/showcase.json"
import { useState } from "react"

export type Section = "university" | "aerospace"
export interface ProjectTabProps {
  onTabChanged?(value: Section): void
  defaultValue: Section
}

export function ProjectTabs({ onTabChanged, defaultValue }: ProjectTabProps) {
  const [currentTab, setCurrentTab] = useState<Section>(defaultValue)
  const [playedAnims, setPlayedAnims] = useState<Section[]>([])

  return (
    <Tabs
      onValueChange={(value) => {
        const desiredTab = value as Section
        onTabChanged?.(desiredTab)

        setPlayedAnims((prev) => {
          if (prev.includes(currentTab)) return prev
          return [...prev, currentTab]
        })

        setCurrentTab(desiredTab)
      }}
      value={currentTab}
    >
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
        <UniversityProjects preventAnim={playedAnims.includes("university")} />
      </TabsContent>
      <TabsContent value="aerospace">
        <AerospaceProjects preventAnim={playedAnims.includes("aerospace")} />
      </TabsContent>
    </Tabs>
  )
}

function UniversityProjects({ preventAnim }: { preventAnim: boolean }) {
  return <GeneralPiece preventAnim={preventAnim} section="university" />
}

function AerospaceProjects({ preventAnim }: { preventAnim: boolean }) {
  return <GeneralPiece preventAnim={preventAnim} section="aerospace" />
}

function GeneralPiece({ section, preventAnim }: { section: string; preventAnim: boolean }) {
  const pieces = content
    .filter((piece) => piece.section === section)
    .map((piece, i) => <ShowcasePiece animIndex={preventAnim ? undefined : i + 1} key={piece.id} {...piece} />)

  return pieces.length > 0 ? pieces : <p className="text-center">There's nothing here yet</p>
}
