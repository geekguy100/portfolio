"use client"
import { SectionTitle } from "@/components/section-title"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { childFadeInVariants } from "@/lib/animation"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

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
  const [api, setApi] = useState<CarouselApi | undefined>()
  const [page, setPage] = useState(1)

  useEffect(() => {
    if (!api) return
    function setState() {
      setPage(api!.selectedScrollSnap() + 1)
    }

    api.on("select", setState)
    return () => {
      api.off("select", setState)
    }
  }, [api])

  return (
    <article>
      <SectionTitle variants={childFadeInVariants}>{title ?? "Gameplay"}</SectionTitle>
      <motion.div className="mx-auto max-w-4xl max-lg:px-12" variants={childFadeInVariants}>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {content.map((t, i) => (
              <CarouselItem key={i}>
                <div className="aspect-video">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          {content.length > 1 && (
            <div className="max-sm:hidden">
              <CarouselPrevious size="icon-lg" />
              <CarouselNext size="icon-lg" />
            </div>
          )}
        </Carousel>
        {content.length > 1 && (
          <p className="text-center text-sm">
            [ {page} / {content.length} ]
          </p>
        )}
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
