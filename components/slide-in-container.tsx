"use client"
import { containerSlideInProps, DEFAULT_STAGGER, DEFAULT_START_DELAY } from "@/lib/animation"
import type { Mutatable } from "@/types"
import { motion, stagger as motionStagger } from "motion/react"
import { useMemo, type CustomComponentPropsWithRef } from "react"

export default function SlideInContainer({
  stagger,
  startDelay,
  ...props
}: CustomComponentPropsWithRef<typeof motion.div> & { stagger?: number; startDelay?: number }) {
  const memoizedAnimateProps: typeof containerSlideInProps = useMemo(() => {
    if (stagger !== undefined || startDelay !== undefined) {
      const customTransition = { ...containerSlideInProps.variants.visible.transition }
      customTransition.delayChildren = motionStagger(stagger ?? DEFAULT_STAGGER, {
        startDelay: startDelay ?? DEFAULT_START_DELAY,
      })

      const visible: Mutatable<typeof containerSlideInProps.variants.visible> = {
        ...containerSlideInProps.variants.visible,
      }
      visible.transition = customTransition
      const variants: Mutatable<typeof containerSlideInProps.variants> = { ...containerSlideInProps.variants }
      variants.visible = visible

      // We cast to make TypeScript consider the object no longer mutatable - this will prevent type-checking errors.
      return { ...containerSlideInProps, variants } as typeof containerSlideInProps
    }

    return containerSlideInProps
  }, [stagger, startDelay])

  return <motion.div {...memoizedAnimateProps} {...props} />
}
