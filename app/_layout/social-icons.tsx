import { MailIcon } from "lucide-react"
import { NavigationButton } from "../../components/nav-button"
import { GitHubIcon } from "../../components/icons/brand-icons"
import Image from "next/image"
import { type ReactNode } from "react"

import ItchIoImage from "@/misc/static-icons/itchio.png"
import LinkedInIcon from "@/misc/static-icons/linkedin_white.png"
import { MotionDiv } from "@/components/motion-primitives"
import { childScaleInVariants } from "@/lib/animation"

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
    icon: (
      <Image
        sizes="30px"
        loading="eager"
        quality={50}
        fill
        src={ItchIoImage}
        alt="Itch.io profile"
        className="scale-50 rounded-lg"
      />
    ),
  },
  {
    href: "mailto:kyle.grenier11@gmail.com",
    title: "Email Kyle",
    icon: <MailIcon className="size-5" />,
  },
  {
    href: "https://www.linkedin.com/in/kyle-grenier",
    title: "LinkedIn Profile",
    icon: (
      <Image
        sizes="30px"
        quality={50}
        loading="eager"
        fill
        src={LinkedInIcon}
        alt="LinkedIn profile"
        className="scale-50"
      />
    ),
  },
]

export function SocialIcons() {
  return socials.map(({ icon, ...props }) => {
    return (
      <MotionDiv variants={childScaleInVariants} key={props.href}>
        <NavigationButton variant="outline" className="relative size-14 hover:scale-110" newTab {...props}>
          {icon}
        </NavigationButton>
      </MotionDiv>
    )
  })
}
