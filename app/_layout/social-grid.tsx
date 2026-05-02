import { MailIcon } from "lucide-react"
import { NavigationButton } from "../../components/nav-button"
import { GitHubIcon } from "../../components/brand-icons"
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
    href: "https://geekguy100.itch.io",
    title: "Itch.io Profile",
    icon: <Image fetchPriority="high" fill src="/itchio.png" alt="Itch.io profile" className="scale-50 rounded-lg" />,
  },
  {
    href: "mailto:kyle.grenier11@gmail.com",
    title: "Email Kyle",
    icon: <MailIcon className="size-5" />,
  },
  {
    href: "https://www.linkedin.com/in/kyle-grenier/",
    title: "LinkedIn Profile",
    icon: <Image fetchPriority="high" fill src="/linkedin_white.png" alt="Itch.io profile" className="scale-50" />,
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
              newTab
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
