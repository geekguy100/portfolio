import { BlocksIcon, CogIcon, TvIcon } from "lucide-react"
import { NavigationButton } from "./layout/nav-button"
import { GitHubIcon } from "./brand-icons"
import type { ReactNode } from "react"

interface SocialProps {
  href: string
  icon: ReactNode
  alt: string
}
const socials: SocialProps[] = [
  {
    href: "https://github.com/geekguy100",
    alt: "GitHub Profile",
    icon: <GitHubIcon className="size-7" />,
  },
  {
    href: "https://github.com/geekguy1003",
    alt: "GitHub Profile",
    icon: <BlocksIcon />,
  },
  {
    href: "https://github.com/geekguy10021",
    alt: "GitHub Profile",
    icon: <TvIcon />,
  },
  {
    href: "https://github.com/geekguy1002",
    alt: "GitHub Profile",
    icon: <CogIcon />,
  },
]

export function SocialGrid() {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-2 gap-4">
        {socials.map(({ icon, alt, href }) => {
          return (
            <NavigationButton title={alt} className="size-14" href={href} key={href}>
              {icon}
            </NavigationButton>
          )
        })}
      </div>
    </div>
  )
}
