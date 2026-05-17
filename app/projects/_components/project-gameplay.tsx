"use client"
import { SectionTitle } from "@/components/section-title"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { childFadeInVariants, childSlideInVariants } from "@/lib/animation"
import { motion } from "motion/react"
import { caption } from "motion/react-client"

type ContentItem = { caption?: string } & (
  | {
      src: string
      title: string
      mimeType: string
    }
  | ExternalContentItem
)

type ExternalContentItem = {
  src: `http${string}`
  title: string
  mimeType?: never
}

export type ProjectGameplayProps = { content: ContentItem[]; title?: string }
export function ProjectGameplay({ content, title }: ProjectGameplayProps) {
  return (
    <article>
      <SectionTitle variants={childFadeInVariants}>{title ?? "Gameplay"}</SectionTitle>
      <motion.div className="mx-auto max-w-xl" variants={childFadeInVariants}>
        <Carousel>
          <CarouselContent>
            {content.map((t, i) => (
              <CarouselItem key={i}>
                <div className="flex h-full items-center justify-center">
                  <div className="aspect-video w-125 lg:w-200">
                    {isUrl(t.src) && <EmbeddedGameplay {...t} />}
                    {!isUrl(t.src) && (
                      <div className="flex size-full flex-col">
                        <div className="relative size-full">
                          {t.mimeType!.includes("video") ? <VideoItem item={t} /> : <ImgItem item={t} />}
                        </div>
                        {t.caption && <p className="text-center text-sm italic">{t.caption}</p>}
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {content.length > 1 && (
            <div className="hidden sm:block">
              <CarouselPrevious size="icon-lg" />
              <CarouselNext size="icon-lg" />
            </div>
          )}
        </Carousel>
      </motion.div>
    </article>
  )
}

interface ItemProps {
  item: ContentItem
}

function VideoItem({ item }: ItemProps) {
  const { mimeType, title, src } = item
  return (
    <video className="mx-auto" controls title={title}>
      <source src={src} type={mimeType} />
      <p>Your browser does not support video playback</p>
    </video>
  )
}

function ImgItem({ item }: ItemProps) {
  const { title, src } = item
  return <Image className="mx-auto" src={src} title={title} fill alt="" />
}

function EmbeddedGameplay({ src, title }: ProjectGameplayProps["content"][number]) {
  return (
    <motion.iframe
      variants={childFadeInVariants}
      src={src}
      title={title}
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="mx-auto size-full"
    />
  )
}

function isUrl(value: string): value is `http${string}` {
  return value.startsWith("http")
}
