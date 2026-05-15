"use client"
import { MotionArticle } from "@/components/motion-primitives"
import { containerSlideInProps } from "@/lib/animation"
import type { CustomComponentPropsWithRef } from "react"

export function MotionArticleContainer(props: CustomComponentPropsWithRef<typeof MotionArticle>) {
  return <MotionArticle {...containerSlideInProps} {...props} />
}
