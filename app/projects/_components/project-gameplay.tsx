import { SectionTitle } from "@/components/section-title"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

type ContentItem =
  | {
      src: string
      title: string
      mimeType: string
    }
  | ExternalContentItem

type ExternalContentItem = {
  src: `http${string}`
  title: string
  mimeType?: never
}

export type ProjectGameplayProps = { content: ContentItem[] }
export function ProjectGameplay({ content }: ProjectGameplayProps) {
  return (
    <section>
      <SectionTitle>Gameplay</SectionTitle>
      <Carousel className="mx-auto">
        <CarouselContent>
          {content.map((t, i) => (
            <CarouselItem key={i}>
              <div className="flex h-full items-center justify-center">
                {isUrl(t.src) && <EmbeddedGameplay {...t} />}
                {!isUrl(t.src) && (
                  <div className="relative size-full">
                    {t.mimeType!.includes("video") ? <VideoItem item={t} /> : <ImgItem item={t} />}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {content.length > 1 && (
          <>
            <CarouselNext size="icon-lg" />
            <CarouselPrevious size="icon-lg" />
          </>
        )}
      </Carousel>
    </section>
  )
}

interface ItemProps {
  item: ContentItem
}

function VideoItem({ item }: ItemProps) {
  const { mimeType, title, src } = item
  return (
    <video className="mx-auto" controls title={title} width={1120}>
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
    <iframe
      src={src}
      title={title}
      width="1120"
      height="630"
      allow="autoplay; clipboard-write; encrypted-media; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

function isUrl(value: string): value is `http${string}` {
  return value.startsWith("http")
}
