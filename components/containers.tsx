"use client"
import { containerSlideInProps } from "@/lib/animation"
import { motion } from "motion/react"
import type { CustomComponentPropsWithRef, HTMLAttributes } from "react"

const COMMON_CLASSNAME: HTMLAttributes<"article">["className"] = "site-section flex flex-col p-6 *:lg:mx-48"

export function Article(props: CustomComponentPropsWithRef<typeof motion.article>) {
  return (
    <div className={COMMON_CLASSNAME}>
      <motion.article {...containerSlideInProps} {...props} />
    </div>
  )
}
