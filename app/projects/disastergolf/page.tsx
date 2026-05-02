import { PlayProject } from "../_components/play-project"
import { ProjectDescription, ProjectIntro, ProjectTitle } from "../_components/project-intro"
import { getProjectMetdata } from "@/lib/helpers"

export const metadata = getProjectMetdata("disastergolf");

export default function DisasterGolfPage() {
  return (
    <>
      <ProjectIntro>
        <ProjectTitle>Disaster Golf</ProjectTitle>
        <ProjectDescription>
          Are you tired of playing golf and having to evacuate when you're given a tornado warning? In Disaster Golf,
          disasters are here to help you play! Utilize lightning to zap the ball across the course at extraordinary
          speeds, meteors to shoot the ball high into the sky with explosive power, and strong gusts of wind to putt the
          golf ball closer and closer to the hole. Golf in different terrain, from the jurassic era, to lush beaches,
          and scorching volcanoes. The world is your golf course!
        </ProjectDescription>
      </ProjectIntro>
      <PlayProject type="download" steamLink="https://store.steampowered.com/app/2575960/Disaster_Golf/" />
    </>
  )
}
