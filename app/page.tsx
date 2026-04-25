import AboutMe from "./_aboutme/page"
import Projects from "./_projects/page"

export default function Page() {
  return (
    <div className="m-6 flex flex-col gap-2 *:rounded-2xl *:bg-card *:p-6">
      <AboutMe />
      <Projects />
    </div>
  )
}
