import Link from "next/link"
import { Button } from "../ui/button"
import type { ComponentProps, ReactNode } from "react"

export type NavButtonProps = {
  href: string
} & Omit<ComponentProps<typeof Button>, "asChild" | "children"> &
  (
    | {
        content?: never
        children: ReactNode
      }
    | { content: string; children?: never }
  )

export function NavigationButton({ href, children, ...props }: NavButtonProps) {
  return (
    <Button {...props} asChild>
      <Link href={href}>{children ?? props.content}</Link>
    </Button>
  )
}
