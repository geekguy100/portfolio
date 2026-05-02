import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { ComponentProps, ReactNode } from "react"

export type NavButtonProps = {
  href: string
  children: ReactNode
} & Omit<ComponentProps<typeof Button>, "asChild" | "children"> & { newTab?: boolean }

export function NavigationButton({ href, children, newTab = false, ...props }: NavButtonProps) {
  return (
    <Button {...props} asChild>
      <Link target={newTab ? "_blank" : undefined} href={href}>
        {children}
      </Link>
    </Button>
  )
}
