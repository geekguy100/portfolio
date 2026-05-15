"use client"

import type { _PdfViewer, PdfViewerProps } from "@/components/pdf-viewing/pdf-viewer"
import { PdfViewer } from "@/components/pdf-viewing/pdf-viewer-lazy"
import { childSlideInVariants } from "@/lib/animation"
import { motion } from "motion/react"

export function MotionPdfViewer(props: PdfViewerProps) {
  return (
    <motion.div variants={childSlideInVariants}>
      <PdfViewer {...props} />
    </motion.div>
  )
}
