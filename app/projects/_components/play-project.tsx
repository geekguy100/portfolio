"use client"
import { SteamIcon } from "@/components/brand-icons"
import { NavigationButton } from "@/components/nav-button"
import { SectionTitle } from "@/components/section-title"
import { childFadeInVariants } from "@/lib/animation"
import { motion } from "motion/react"
import { type ReactNode } from "react"

type EmbeddedDemoProps = { type: "embed"; children: ReactNode } & Omit<LocalDownloadProps, "steamLink">
type DownloadDemoProps = { type: "download" } & (LocalDownloadProps | SteamDownloadProps)
type SteamDownloadProps = { steamLink: string; githubLink?: never; downloadLink?: never }
type LocalDownloadProps = { githubLink: string; downloadLink: string; steamLink?: never }

export type PlayProjectProps = { title?: string } & (EmbeddedDemoProps | DownloadDemoProps)
export function PlayProject({ title, ...props }: PlayProjectProps) {
  const { type } = props
  return (
    <div className="flex flex-col items-center">
      <SectionTitle>{title ?? "Play the Game"}</SectionTitle>
      {type === "download" && <DownloadDemo {...props} />}
      {type === "embed" && <EmbeddedProject {...props} />}
    </div>
  )
}

function DownloadDemo(props: DownloadDemoProps) {
  return props.steamLink !== undefined ? <SteamDownload {...props} /> : <LocalDownload {...props} />
}

function LocalDownload({ downloadLink, githubLink }: LocalDownloadProps) {
  const hasBoth = downloadLink && githubLink
  const numCols = hasBoth ? "grid-cols-2" : "grid-cols-1"
  return (
    <motion.div variants={childFadeInVariants} className={`grid gap-4 ${numCols}`}>
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
    </motion.div>
  )
}

// TODO: Add motion support
function SteamDownload({ steamLink }: SteamDownloadProps) {
  return (
    <motion.div variants={childFadeInVariants}>
      <NavigationButton newTab href={steamLink}>
        <SteamIcon />
        Purchase on Steam
      </NavigationButton>
    </motion.div>
  )
}

function EmbeddedProject({ children, ...props }: EmbeddedDemoProps) {
  return (
    <motion.div variants={childFadeInVariants} className="flex flex-col items-center gap-2">
      {children}
      <LocalDownload {...props} />
    </motion.div>
  )
}
