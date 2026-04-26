import AboutMe from "./_aboutme/page"
import Projects from "./_projects/page"

export default function Page() {
  return (
    <div className="flex flex-col">
      <AboutMe />
      <Projects />
    </div>
  )
}
