import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { ComponentProps, ReactNode } from "react"

export type DownloadButtonProps = {
  href: string
  fileName: string
  children: ReactNode
} & Omit<ComponentProps<typeof Button>, "asChild" | "children">

export function DownloadButton({ href, fileName, children, ...props }: DownloadButtonProps) {
  return (
    <Button {...props} asChild>
      <Link download={fileName} href={href}>
        {children}
      </Link>
    </Button>
  )
}
