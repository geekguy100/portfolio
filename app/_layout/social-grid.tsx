"use client"
import { MailIcon } from "lucide-react"
import { NavigationButton } from "../../components/nav-button"
import { GitHubIcon } from "../../components/brand-icons"
import Image from "next/image"
import { useCallback, useMemo, type PropsWithChildren, type ReactNode } from "react"
import { ButtonGroup } from "@/components/ui/button-group"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

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
    href: "https://www.linkedin.com/in/kyle-grenier",
    title: "LinkedIn Profile",
    icon: <Image fetchPriority="high" fill src="/linkedin_white.png" alt="Itch.io profile" className="scale-50" />,
  },
]

const MOBILE_CLASSNAME = "pb-2"
const DESKTOP_CLASSNAME = "grid grid-cols-2 gap-4"
export function SocialGrid() {
  const isMobile = useIsMobile(640)

  const SocialContainer = useCallback(
    ({ children }: PropsWithChildren) => {
      return isMobile ? (
        <ButtonGroup className={MOBILE_CLASSNAME}>{children}</ButtonGroup>
      ) : (
        <div className={DESKTOP_CLASSNAME}>{children}</div>
      )
    },
    [isMobile]
  )

  return (
    <div className={cn("sm:flex sm:items-center", isMobile && "flex justify-center")}>
      <SocialContainer>
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
      </SocialContainer>
    </div>
  )
}
