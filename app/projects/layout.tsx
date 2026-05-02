import { Container } from "@/components/containers"
import type { PropsWithChildren } from "react"

export default async function ProjectsLayout({ children }: PropsWithChildren) {
  return (
    <Container type="div" className="gap-4">
      {children}
    </Container>
  )
}
