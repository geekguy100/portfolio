import type { Metadata } from "next"
import AboutMe from "./_homepage/aboutme"
import ProjectsShowcase from "./_homepage/projects"

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
