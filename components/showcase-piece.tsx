"use client"
import { childSlideInVariants, containerSlideInVariants, slideInProps } from "@/lib/animation"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import SlideInContainer from "./slide-in-container"

export interface ShowcasePieceProps {
  title: string
  descriptions: string[]
  id: string
  img: string
  animIndex?: number
}

export function ShowcasePiece({ title, descriptions, id, img, animIndex }: ShowcasePieceProps) {
  return (
    <Link href={`/projects/${id}`}>
      <article className="flex flex-col gap-4 rounded-md p-6 outline-primary hover:outline-3 sm:flex-row">
        <div className="relative aspect-300/160 size-full max-h-40 max-w-75 flex-none self-center max-sm:mx-auto">
          <Image fill unoptimized loading="eager" src={img} alt={`Thumbnail for content titled "${title}"`} />
        </div>

        <SlideInContainer>
          <motion.h3 variants={containerSlideInVariants} className="text-center sm:text-left">
            {title}
          </motion.h3>
          {descriptions.map((desc, i) => {
            return (
              <motion.p variants={childSlideInVariants} key={i}>
                {desc}
              </motion.p>
            )
          })}
        </SlideInContainer>
      </article>
    </Link>
  )
}
