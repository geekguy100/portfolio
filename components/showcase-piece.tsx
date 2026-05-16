import { childSlideInVariants, containerSlideInVariants } from "@/lib/animation"
import { motion } from "motion/react"
import Link from "next/link"
import SlideInContainer from "./slide-in-container"
import type { ReactNode } from "react"

export interface ShowcasePieceProps {
  title: string
  icon?: ReactNode
  descriptions: string[]
  id: string
  img: string
}

export function ShowcasePiece({ title, icon, descriptions, id, img }: ShowcasePieceProps) {
  return (
    <Link href={`/projects/${id}`}>
      <article className="flex flex-col gap-4 rounded-md p-6 outline-primary hover:outline-3 sm:flex-row">
        <div className="relative aspect-300/160 size-full max-h-40 max-w-75 flex-none self-center max-sm:mx-auto">
          <motion.img
            variants={childSlideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            loading="eager"
            src={img}
            className="size-full"
            alt={`Thumbnail for content titled "${title}"`}
          />
        </div>

        <SlideInContainer>
          <motion.h3 variants={containerSlideInVariants} className="flex items-center gap-2 text-center sm:text-left">
            {title} {icon}
          </motion.h3>
          {descriptions.map((desc, i) => {
            let result: ReactNode = (
              <motion.p variants={containerSlideInVariants} key={i}>
                {desc}
              </motion.p>
            )
            // Support for bolding certain text. Might want to consider using Markdown in the future...
            const split = desc.split("**")
            if (split.length > 1) {
              result = (
                <motion.p key={i} variants={containerSlideInVariants}>
                  {split.map((t, i) =>
                    t.trim().length === 0 ? undefined : i % 2 === 0 ? (
                      t
                    ) : (
                      <span key={i} className="font-bold">
                        {t}
                      </span>
                    )
                  )}
                </motion.p>
              )
            }
            return result
          })}
        </SlideInContainer>
      </article>
    </Link>
  )
}
