"use client"
import type { ComponentProps } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import Image from "next/image"
import { motion } from "motion/react"
import { childSlideInVariants } from "@/lib/animation"

export type PopupImageProps = ComponentProps<typeof Image> & { title: string; width: number; height: number }

export function PopupImage(props: PopupImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div variants={childSlideInVariants}>
          <Image role="button" {...props} style={{ width: "auto", height: "auto" }} />
        </motion.div>
      </DialogTrigger>
      <DialogContent className="w-max sm:max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription className="sr-only">An larger version of the image titled {props.title}</DialogDescription>
        </DialogHeader>
        <Image
          width={props.width * 1.25}
          height={props.height * 1.25}
          src={props.src}
          alt={props.alt}
          className="mx-auto"
        />
      </DialogContent>
    </Dialog>
  )
}
