"use client"
import { motion } from "motion/react"
import type { CustomComponentPropsWithRef } from "react"

/* This module contains the motion components I need to access from server components. */

export function MotionArticle(props: CustomComponentPropsWithRef<typeof motion.article>) {
  return <motion.article {...props} />
}

export function MotionBlockquote(props: CustomComponentPropsWithRef<typeof motion.blockquote>) {
  return <motion.blockquote {...props} />
}

export function MotionParagraph(props: CustomComponentPropsWithRef<typeof motion.p>) {
  return <motion.p {...props} />
}

export function MotionDiv(props: CustomComponentPropsWithRef<typeof motion.div>) {
  return <motion.div {...props} />
}

export function MotionHeader5(props: CustomComponentPropsWithRef<typeof motion.div>) {
  return <motion.h5 {...props} />
}
