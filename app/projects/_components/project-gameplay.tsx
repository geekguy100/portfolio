import { SectionTitle } from "@/components/section-title"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export type ProjectGameplayProps = { content: { src: string; title: string }[] }
export function ProjectGameplay({ content }: ProjectGameplayProps) {
  return (
    <>
      <SectionTitle>Gameplay</SectionTitle>
      <Carousel className="mx-auto">
        <CarouselContent>
          {content.map((t) => (
            <CarouselItem key={t.src}>
              <div className="flex h-full items-center justify-center">
                {isUrl(t.src) ? (
                  <EmbeddedGameplay {...t} />
                ) : (
                  <div className="relative size-full">
                    <Image {...t} fill alt={`Gameplay for "${t.title}"`} />
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
    </>
  )
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

function isUrl(value: string) {
  return value.startsWith("http")
}
