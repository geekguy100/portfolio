import { SteamIcon } from "@/components/brand-icons"
import { NavigationButton } from "@/components/nav-button"
import { SectionTitle } from "@/components/section-title"
import type { ReactNode } from "react"

type EmbeddedDemoProps = { type: "embed"; children: ReactNode } & Omit<LocalDownloadProps, "steamLink">
type DownloadDemoProps = { type: "download" } & (LocalDownloadProps | SteamDownloadProps)
type SteamDownloadProps = { steamLink: string; githubLink?: never; downloadLink?: never }
type LocalDownloadProps = { githubLink: string; downloadLink: string; steamLink?: never }

export type PlayProjectProps = EmbeddedDemoProps | DownloadDemoProps
export function PlayProject(props: PlayProjectProps) {
  const { type } = props
  return (
    <div className="flex flex-col items-center">
      <SectionTitle>Play the Game</SectionTitle>
      {type === "download" && <DownloadDemo {...props} />}
      {type === "embed" && <EmbeddedProject {...props} />}
    </div>
  )
}

function DownloadDemo(props: DownloadDemoProps) {
  return props.steamLink !== undefined ? <SteamDownload {...props} /> : <LocalDownload {...props} />
}

function LocalDownload({ downloadLink, githubLink }: LocalDownloadProps) {
  const numCols = githubLink && downloadLink ? "grid-cols-2" : "grid-cols-1"
  return (
    <div className={`grid gap-4 ${numCols}`}>
      {githubLink !== "" && (
        <NavigationButton newTab href={githubLink}>
          View on GitHub
        </NavigationButton>
      )}
      {downloadLink !== "" && (
        <NavigationButton newTab href={downloadLink}>
          Download
        </NavigationButton>
      )}
    </div>
  )
}

function SteamDownload({ steamLink }: SteamDownloadProps) {
  return (
    <NavigationButton newTab href={steamLink}>
      <SteamIcon />
      Purcase on Steam
    </NavigationButton>
  )
}

function EmbeddedProject({ children, ...props }: EmbeddedDemoProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <LocalDownload {...props} />
    </div>
  )
}
