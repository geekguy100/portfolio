import type { ComponentProps } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import Image from "next/image"

export type PopupImageProps = ComponentProps<typeof Image> & { title: string }

export function PopupImage(props: PopupImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image role="button" {...props} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[95%]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>
        <Image
          width={(props.width as number) * 2}
          height={(props.height as number) * 2}
          src={props.src}
          alt={props.alt}
          className="mx-auto"
        />
      </DialogContent>
    </Dialog>
  )
}
