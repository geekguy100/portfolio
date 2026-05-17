"use client"
import { SectionTitle } from "@/components/section-title"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef, CustomComponentPropsWithRef, PropsWithChildren } from "react"
import { childFadeInVariants, childSlideInVariants } from "@/lib/animation"
import SlideInContainer from "@/components/slide-in-container"

export function ProjectRoles({ title, children }: PropsWithChildren & { title?: string }) {
  return (
    <article>
      <SectionTitle>{title ?? "My Roles"}</SectionTitle>
      <div className="flex flex-col gap-6 text-left">{children}</div>
    </article>
  )
}

export function ProjectRole({ children }: PropsWithChildren) {
  return <SlideInContainer>{children}</SlideInContainer>
}

export function ProjectRoleHeader({ className, children, ...props }: CustomComponentPropsWithRef<typeof motion.h4>) {
  return (
    <motion.h4 variants={childFadeInVariants} className={cn("underline", className)} {...props}>
      {children}
    </motion.h4>
  )
}

export function ProjectRoleResponsibilities({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
  return <ul {...props}>{children}</ul>
}

export function ProjectRoleResponsibility(props: CustomComponentPropsWithRef<typeof motion.li>) {
  return <motion.li variants={childSlideInVariants} {...props} />
}
