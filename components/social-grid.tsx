import { BlocksIcon, CogIcon, TvIcon } from "lucide-react"
import { NavigationButton } from "./layout/nav-button"
import { GitHubIcon, ItchIoIcon } from "./brand-icons"
import Image from "next/image"
import type { ReactNode } from "react"

interface SocialProps {
  href: string
  icon: ReactNode
  title: string
}
const socials: SocialProps[] = [
  {
    href: "https://github.com/geekguy100",
    title: "GitHub Profile",
    icon: <GitHubIcon className="size-7" />,
  },
  {
    href: "https://github.com/geekguy1003",
    title: "Itch.io Profile",
    icon: <Image fill src="/itchio.png" alt="Itch.io profile" className="scale-50 rounded-lg" />,
  },
  {
    href: "https://github.com/geekguy10021",
    title: "GitHub Profile",
    icon: <TvIcon />,
  },
  {
    href: "https://github.com/geekguy1002",
    title: "GitHub Profile",
    icon: <CogIcon />,
  },
]

export function SocialGrid() {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-2 gap-4">
        {socials.map(({ icon, ...props }) => {
          return (
            <NavigationButton
              variant="outline"
              className="relative size-14 hover:scale-110"
              key={props.href}
              {...props}
            >
              {icon}
            </NavigationButton>
          )
        })}
      </div>
    </div>
  )
}
