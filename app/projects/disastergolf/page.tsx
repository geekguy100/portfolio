import { PlayProject } from "../_components/play-project"
import { ProjectGameplay } from "../_components/project-gameplay"
import { ProjectDescription, ProjectIntro, ProjectTitle } from "../_components/project-intro"
import { getProjectMetdata } from "@/lib/helpers"
import {
  ProjectRole,
  ProjectRoleHeader,
  ProjectRoleResponsibilities as Responsibilities,
  ProjectRoleResponsibility as Responsibility,
  ProjectRoles,
} from "../_components/project-roles"
import { Project } from "../_components/project-wrapper"

export const metadata = getProjectMetdata("disastergolf")

export default function DisasterGolfPage() {
  return (
    <Project>
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
      <ProjectGameplay
        content={[
          {
            src: "https://www.youtube.com/embed/rs9bdJmgKEg?si=adlZ4V4I9EkkdqeP",
            title: "Disaster Golf Gameplay Trailer",
          },
        ]}
      />
      <ProjectRoles>
        <ProjectRole>
          <ProjectRoleHeader>Creative Director</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Hosted sprint retrospectives to discuss the most recent sprint.
              <ul>
                <li>I made sure that the team knows these discussions are open for anyone to provide feedback.</li>
              </ul>
            </Responsibility>
            <Responsibility>Verified all work meets the discussed vision we have for the game.</Responsibility>
            <Responsibility>
              Managed discipline leads and sub-team leads to make sure the team is not only contributing to the
              project's creative vision but learning along the way.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Lead Producer</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Frequently checked in with individual team members to ensure work is being completed as expected.
            </Responsibility>
            <Responsibility>Verified all work meets the discussed vision we have for the game.</Responsibility>
            <Responsibility>
              Notifies team members that any/all of their opinions are valid and will be taken into consideration.
              <ul>
                <li>
                  I want people to be excited to work on this project. I want them to take ownership of their work and
                  feel like they are contributing to something amazing.
                </li>
              </ul>
            </Responsibility>
            <Responsibility>
              Makes sure the team is not only contributing to the project but learning along the way.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Other Achievements</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Overhauled project management when work was not getting completed.
              <ul>
                <li>
                  My efforts resulted in a steady flow of work being produced, increased communication between
                  sub-teams, explicitly defined expectations for being a member of the project, a discipline lead, and a
                  sub-team lead.
                </li>
              </ul>
            </Responsibility>
            <Responsibility>
              Created anonymous feedback form where the team can privately express concerns and considerations.
            </Responsibility>
            <Responsibility>Created and managed our ClickUp page.</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
      <ProjectRoles title="My Roles During Capstone">
        <ProjectRole>
          <ProjectRoleHeader>Core Gameplay Programmer on the Disasters Functional Team</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Refactored old prototype code to follow design principles and to be more expandable.
              <ul>
                <li>
                  Utilizing inheritance and composition to create new disasters and methods of placing them in the game.
                </li>
              </ul>
            </Responsibility>
            <Responsibility>Created backend architecture to streamline creation of new disasters.</Responsibility>
            <Responsibility>
              Created backend architecture to streamline creation of new disaster placement types.
            </Responsibility>
            <Responsibility>
              Created documentation to inform team members of how the system works, how to create new disasters,
              placement types, etc.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Analytics Tracking</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Setup a MySQLserver using phpMyAdmin to track analytics such as disaster usage, time spent per level,
              hazards interacted with, etc.
            </Responsibility>
            <Responsibility>
              Programmed C# scripts to collect and aggregate in-game data to prepare it for submission.
            </Responsibility>
            <Responsibility>
              Programmed PHP scripts to accept queries coming from the in-game database handler.
            </Responsibility>
          </Responsibilities>
        </ProjectRole>
        <ProjectRole>
          <ProjectRoleHeader>Documentation</ProjectRoleHeader>
          <Responsibilities>
            <Responsibility>
              Disaster and Placement Creation
              <ul>
                <li>
                  Created documentation to inform team members on how the system works, how to create new disasters,
                  placement types, etc.
                </li>
              </ul>
            </Responsibility>
            <Responsibility>
              Analytics Tracking
              <ul>
                <li>
                  Created documentation to inform other programmers on how the data is being tracked, stored, and
                  prepared for submission.
                </li>
              </ul>
            </Responsibility>
            <Responsibility>Created and managed our ClickUp page.</Responsibility>
          </Responsibilities>
        </ProjectRole>
      </ProjectRoles>
    </Project>
  )
}
