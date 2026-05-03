"use client"

import { usePDF } from "@/hooks/use-pdf"
import { useEffect, useState, type ComponentPropsWithoutRef } from "react"
export interface PdfViewerProps extends Omit<ComponentPropsWithoutRef<"canvas">, "width" | "height"> {
  src: string
}

export function _PdfViewer({ src, ...props }: PdfViewerProps) {
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null)
  const { viewport, setPageNum } = usePDF(src, canvasRef, 1)

  return <canvas {...props} width={viewport?.width} height={viewport?.height} id="pdf-canvas" ref={setCanvasRef} />
}
