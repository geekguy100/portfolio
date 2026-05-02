import { SectionTitle } from "@/components/section-title"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react"

export function ProjectRoles({ children }: PropsWithChildren) {
  return (
    <article>
      <SectionTitle>My Roles</SectionTitle>
      <div className="flex flex-col gap-2 text-left">{children}</div>
    </article>
  )
}

export function ProjectRole({ children }: PropsWithChildren) {
  return <div>{children}</div>
}

export function ProjectRoleHeader({ className, children, ...props }: ComponentPropsWithoutRef<"h3">) {
  return <h4 className={cn("text-center underline", className)}>{children}</h4>
}

export function ProjectRoleResponsibilities(props: ComponentPropsWithoutRef<"ul">) {
  return <ul {...props} />
}

export function ProjectRoleResponsibility(props: ComponentPropsWithoutRef<"li">) {
  return <li {...props} />
}
