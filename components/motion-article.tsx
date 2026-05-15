"use client"
import { motion } from "motion/react"
import type { CustomComponentPropsWithRef } from "react"

export function MotionArticle(props: CustomComponentPropsWithRef<typeof motion.article>) {
  return <motion.article {...props} />
}
