import type { Variants } from "motion"
import { stagger, type motion } from "motion/react"
import type { CustomComponentPropsWithRef } from "react"

export const DEFAULT_STAGGER = 0.1
export const DEFAULT_START_DELAY = 0.05

//#region Container / Parent
export const containerSlideInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: stagger(DEFAULT_STAGGER, { startDelay: DEFAULT_START_DELAY }),
    },
  },
} as const satisfies Variants

export const containerSlideInProps = {
  variants: containerSlideInVariants,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
} as const satisfies CustomComponentPropsWithRef<typeof motion.div>
//#endregion

//#region Children
export const childSlideInVariants = {
  hidden: { opacity: 0, translateX: -50 },
  visible: {
    opacity: 1,
    translateX: 0,
  },
} as const satisfies Variants
export const childSlideInProps = {
  variants: childSlideInVariants,
}

export const childFadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
} as const satisfies Variants
//#endregion
