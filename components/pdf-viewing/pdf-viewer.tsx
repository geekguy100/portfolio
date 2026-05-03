"use client"

import { usePDFDocument, useRenderedPDF } from "@/components/pdf-viewing/hooks/use-pdf"
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CustomComponentPropsWithRef,
} from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel"
import { Spinner } from "../ui/spinner"
import { cn } from "@/lib/utils"
export interface PdfViewerProps {
  carouselProps?: Omit<CustomComponentPropsWithRef<typeof Carousel>, "setApi">
  canvasProps?: ComponentPropsWithoutRef<"canvas">
  src: string
  showPageNumber?: boolean
}

export function _PdfViewer({ src, carouselProps, showPageNumber = false, canvasProps }: PdfViewerProps) {
  const { pdf } = usePDFDocument(src)
  const [embla, setEmbla] = useState<CarouselApi>()
  const { currentPage } = usePageNumber(embla)
  const numPages = pdf?.numPages ?? 0

  return (
    <Carousel
      setApi={(api) => {
        if (!showPageNumber) return
        setEmbla(api)
      }}
      {...carouselProps}
    >
      <CarouselContent>
        {Array.from({ length: numPages }).map((_, i) => (
          <CarouselItem key={i}>
            <PageViewer {...canvasProps} src={src} page={i + 1} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {showPageNumber && currentPage !== undefined && (
        <p className="mx-auto w-fit">
          {currentPage} / {numPages}
        </p>
      )}
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

function usePageNumber(api: CarouselApi) {
  const [pageNum, setPageNum] = useState<number | undefined>(undefined)

  const selectCallback = useCallback(
    (api: CarouselApi) => {
      setPageNum(getCurrentSlide(api))
    },
    [setPageNum]
  )

  useEffect(() => {
    if (!api) return
    api.on("select", selectCallback)
    selectCallback(api)
    return () => {
      api.off("select", selectCallback)
    }
  }, [api])

  return { currentPage: pageNum }
}

function getCurrentSlide(api: CarouselApi) {
  if (!api) return -1
  return api.selectedScrollSnap() + 1
}
