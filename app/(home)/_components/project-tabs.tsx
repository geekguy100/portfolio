"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookIcon, SatelliteIcon } from "lucide-react"
import { ShowcasePiece } from "@/components/showcase-piece"
import { content } from "@/misc/showcase.json"
import { useState } from "react"
import { MotionConfig } from "motion/react"

export type Section = "university" | "aerospace"
export interface ProjectTabProps {
  onTabChanged?(value: Section): void
  defaultValue: Section
}

export function ProjectTabs({ onTabChanged, defaultValue }: ProjectTabProps) {
  const [currentTab, setCurrentTab] = useState<Section>(defaultValue)

  return (
    <Tabs
      onValueChange={(value) => {
        const desiredTab = value as Section
        onTabChanged?.(desiredTab)
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
  const pieces = content
    .filter((piece) => piece.section === section)
    .map((piece, i) => (
      <MotionConfig key={piece.id}>
        <ShowcasePiece animIndex={i + 1} {...piece} />
      </MotionConfig>
    ))

  return pieces.length > 0 ? pieces : <p className="text-center">There's nothing here yet</p>
}
