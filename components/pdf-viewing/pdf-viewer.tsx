"use client"

import { usePDFDocument, useRenderedPDF } from "@/components/pdf-viewing/hooks/use-pdf"
import { useState, type ComponentPropsWithoutRef, type CustomComponentPropsWithRef } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Spinner } from "../ui/spinner"
import { cn } from "@/lib/utils"
export interface PdfViewerProps {
  carouselProps?: CustomComponentPropsWithRef<typeof Carousel>
  canvasProps?: ComponentPropsWithoutRef<"canvas">
  src: string
}

export function _PdfViewer({ src, carouselProps, canvasProps }: PdfViewerProps) {
  const { pdf } = usePDFDocument(src)
  const numPages = pdf?.numPages ?? 0
  return (
    <Carousel {...carouselProps}>
      <CarouselContent>
        {Array.from({ length: numPages }).map((_, i) => (
          <CarouselItem key={i}>
            <PageViewer {...canvasProps} src={src} page={i + 1} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {numPages > 1 && (
        <>
          <CarouselPrevious size="icon-lg" />
          <CarouselNext size="icon-lg" />
        </>
      )}
    </Carousel>
  )
}

function PageViewer({
  src,
  page,
  width,
  height,
  ...props
}: Pick<PdfViewerProps, "src"> & PdfViewerProps["canvasProps"] & { page: number }) {
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null)
  const { viewport, isLoading, isRendering } = useRenderedPDF(src, canvasRef, page)
  return isLoading || isRendering ? (
    <div style={{ height: viewport?.height }} className={cn("flex items-center justify-center", !viewport && "h-96")}>
      <Spinner className="size-16" />
    </div>
  ) : (
    <canvas {...props} width={width ?? viewport?.width} height={height ?? viewport?.height} ref={setCanvasRef} />
  )
}
