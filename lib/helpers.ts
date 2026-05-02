import type { Metadata } from "next"
import { content } from "@/misc/showcase.json"

export function getProjectMetdata(projectId: string): Metadata {
  const project = content.find((t) => t.id === projectId)
  if (project === undefined) throw new Error("Could not find project with ID " + projectId)

  return {
    title: `${project.title} | Kyle Grenier`,
    authors: [{ name: "Kyle Grenier" }],
    description: project.descriptions.join(" "),
  }
}

export function awaitPromise(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}
