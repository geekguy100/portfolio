import type { ComponentProps } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import Image from "next/image"
import { childSlideInVariants } from "@/lib/animation"
import { MotionDiv } from "./motion-primitives"

export type PopupImageProps = ComponentProps<typeof Image> & { title: string; width: number; height: number }

export function PopupImage(props: PopupImageProps) {
  return (
    <Dialog>
      <DialogTrigger className="mx-auto w-fit" asChild>
        <MotionDiv variants={childSlideInVariants}>
          <Image role="button" {...props} style={{ width: "auto", height: "auto" }} />
        </MotionDiv>
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
