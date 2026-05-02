import { SectionTitle } from "@/components/section-title"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react"

export function ProjectRoles({ title, children }: PropsWithChildren & { title?: string }) {
  return (
    <article>
      <SectionTitle>{title ?? "My Roles"}</SectionTitle>
      <div className="flex flex-col gap-2 text-left">{children}</div>
    </article>
  )
}

export function ProjectRole({ children }: PropsWithChildren) {
  return <div>{children}</div>
}

export function ProjectRoleHeader({ className, children, ...props }: ComponentPropsWithoutRef<"h3">) {
  return <h4 className={cn("underline", className)}>{children}</h4>
}

export function ProjectRoleResponsibilities({ className, ...props }: ComponentPropsWithoutRef<"ul">) {
  return <ul className={cn("list-disc [&_ul]:ml-4 [&_ul]:list-[circle]", className)} {...props} />
}

export function ProjectRoleResponsibility(props: ComponentPropsWithoutRef<"li">) {
  return <li {...props} />
}
