"use client"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import type { CustomComponentPropsWithRef, HTMLAttributes } from "react"
import { MotionArticle } from "./motion-primitives"

const COMMON_CLASSNAME: HTMLAttributes<"article">["className"] = "flex flex-col p-6 *:lg:mx-48"

export function Article({ className, ...props }: CustomComponentPropsWithRef<typeof motion.article>) {
  return (
    <div className="site-section">
      <MotionArticle {...props} className={cn(COMMON_CLASSNAME, className)} />
    </div>
  )
}
