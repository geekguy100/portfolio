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
      const customSlideInProps: Mutatable<typeof containerSlideInProps> = { ...containerSlideInProps }
      customSlideInProps.variants.visible.transition.delayChildren = motionStagger(stagger ?? DEFAULT_STAGGER, {
        startDelay: startDelay ?? DEFAULT_START_DELAY,
      })

      // We cast to make TypeScript consider the object no longer mutatable - this will prevent type-checking errors.
      return customSlideInProps as typeof containerSlideInProps
    }

    return containerSlideInProps
  }, [stagger, startDelay])

  return <motion.div {...memoizedAnimateProps} {...props} />
}
