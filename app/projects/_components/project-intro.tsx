"use client"
import { SectionTitle } from "@/components/section-title"
import { childSlideInProps, containerSlideInProps } from "@/lib/animation"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import type { PropsWithChildren } from "react"

export function ProjectIntro({ children }: PropsWithChildren) {
  return <motion.div>{children}</motion.div>
}

export function ProjectTitle({ children }: PropsWithChildren) {
  return <SectionTitle className="capitalize">{children}</SectionTitle>
}

export function ProjectDescription({ className, children }: PropsWithChildren & { className?: string }) {
  return (
    <motion.p {...childSlideInProps} className={cn("text-left", className)}>
      {children}
    </motion.p>
  )
}
