import Link from "next/link"
import { Button } from "../ui/button"

export interface NavButtonProps {
  href: string
  title: string
}
export function NavigationButton({ href, title }: NavButtonProps) {
  return (
    <Button asChild>
      <Link href={href}>{title}</Link>
    </Button>
  )
}
