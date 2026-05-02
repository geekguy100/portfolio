import Link from "next/link"
import { Button } from "../ui/button"
import type { ComponentProps, ReactNode } from "react"

export type NavButtonProps = {
  href: string
} & Omit<ComponentProps<typeof Button>, "asChild" | "children"> & { newTab?: boolean } & (
    | {
        content?: never
        children: ReactNode
      }
    | { content: string; children?: never }
  )

export function NavigationButton({ href, children, newTab = false, ...props }: NavButtonProps) {
  return (
    <Button {...props} asChild>
      <Link target={newTab ? "_blank" : undefined} href={href}>
        {children ?? props.content}
      </Link>
    </Button>
  )
}
