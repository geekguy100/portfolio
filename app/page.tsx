import AboutMe from "./_homepage/aboutme"
import ProjectsShowcase from "./_homepage/projects"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <AboutMe />
      <ProjectsShowcase />
    </div>
  )
}
