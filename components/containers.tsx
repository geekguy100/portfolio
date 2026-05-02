import { cn } from "@/lib/utils"
import type { ComponentProps, HTMLAttributes } from "react"

const COMMON_CLASSNAME: HTMLAttributes<"div">["className"] = "site-section flex flex-col p-6"

export function Section(props: ComponentProps<"section">) {
  return <Container type="section" {...props} />
}

export function Article({ children, id, className, ...props }: ComponentProps<"article">) {
  return <Container type="article" {...props} />
}

export function Container<T extends keyof React.JSX.IntrinsicElements>({
  type,
  className,
  ...props
}: ComponentProps<T> & { type: T }) {
  // Have to bypass some TypeScript here to prevent errors, but React allows any intrinsic element provided as a string to be used as a component.
  const Container = type as unknown as "div"
  return <Container className={cn(COMMON_CLASSNAME, className)} {...(props as unknown as ComponentProps<"div">)} />
}
