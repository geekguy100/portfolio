"use client"

import { usePDFDocument, useRenderedPDF } from "@/components/pdf-viewing/hooks/use-pdf"
import { useState, type ComponentPropsWithoutRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Spinner } from "../ui/spinner"
import { cn } from "@/lib/utils"
export interface PdfViewerProps extends Omit<ComponentPropsWithoutRef<"canvas">, "width" | "height"> {
  src: string
}

export function _PdfViewer({ src, ...props }: PdfViewerProps) {
  const { pdf } = usePDFDocument(src)
  const numPages = pdf?.numPages ?? 0

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
  const { viewport, isLoading, isRendering } = useRenderedPDF(src, canvasRef, page)
  return isLoading || isRendering ? (
    <div style={{ height: viewport?.height }} className={cn("flex items-center justify-center", !viewport && "h-96")}>
      <Spinner className="size-16" />
    </div>
  ) : (
    <canvas {...props} width={viewport?.width} height={viewport?.height} ref={setCanvasRef} />
  )
}
