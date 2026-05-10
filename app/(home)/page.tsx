import type { Metadata } from "next"
import AboutMe from "./_components/aboutme"
import ProjectsShowcase from "./_components/projects"

export const metadata: Metadata = {
  title: "Home | Kyle Grenier",
  description: "Kyle Grenier's Portfolio",
  authors: [{ name: "Kyle Grenier" }],
}

export default function HomePage() {
  return (
    <>
      <AboutMe />
      <ProjectsShowcase />
    </>
  )
}
