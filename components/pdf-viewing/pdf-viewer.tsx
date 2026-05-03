"use client"

import { usePDF } from "@/components/pdf-viewing/hooks/use-pdf"
import { useState, type ComponentPropsWithoutRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
export interface PdfViewerProps extends Omit<ComponentPropsWithoutRef<"canvas">, "width" | "height"> {
  src: string
}

export function _PdfViewer({ src, ...props }: PdfViewerProps) {
  const { numPages, isLoading } = usePDF(src, null, 1)

  return (
    <Carousel className="mx-96">
      <CarouselContent>
        {Array.from({ length: numPages }).map((_, i) => (
          <CarouselItem key={i}>
            <PageViewer {...props} src={src} page={i + 1} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {numPages > 1 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  )
}

function PageViewer({ src, page, ...props }: PdfViewerProps & { page: number }) {
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null)
  const { viewport } = usePDF(src, canvasRef, page)
  return <canvas {...props} width={viewport?.width} height={viewport?.height} ref={setCanvasRef} />
}
