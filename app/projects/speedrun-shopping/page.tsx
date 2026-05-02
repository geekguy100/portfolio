import { PlayProject } from "../_components/play-project"
import { ProjectIntro, ProjectTitle, ProjectDescription } from "../_components/project-intro"

export default function SpeedrunShoppingPage() {
  return (
    <>
      <ProjectIntro>
        <ProjectTitle>Speedrun Shopping</ProjectTitle>
        <div className="space-y-2">
          <ProjectDescription>
            Speedrun Shopping is a frantic, fast-paced shopping simulator. Sprint around the shopping center in search
            of the items on your shopping list, and ram into other shoppers to make them drop their items so you can
            steal them for yourself. Once you have all of the items you need, check out and compete for a faster time.
            Speed is the name of the game!
          </ProjectDescription>
          <ProjectDescription>
            Created for CIS 497 - Unity Design Patterns with the theme 'comedy' to practice implementing design patterns
            into larger projects with a team.
          </ProjectDescription>
        </div>
      </ProjectIntro>
      <PlayProject type="embed" downloadLink="" githubLink="https://github.com/geekguy100/CIS497_ComedyGame">
        <iframe src="https://itch.io/embed-upload/3535053?color=333333" width="1000" height="820" />
      </PlayProject>
    </>
  )
}
