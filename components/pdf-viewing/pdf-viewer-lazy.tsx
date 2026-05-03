"use client"

import dynamic from "next/dynamic"
export const PdfViewer = dynamic(() => import("./pdf-viewer").then((t) => t._PdfViewer), { ssr: false })
