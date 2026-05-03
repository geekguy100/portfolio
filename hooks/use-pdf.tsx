import { useEffect, useRef, useState } from "react"
import * as pdf from "pdfjs-dist"
import "pdfjs-dist/build/pdf.worker.min.mjs"

// TODO: Look into use callbacks or try using a ref and just updating the ref, and pass that back to the client.
// Then the client can useEffect() to listen for changes?
// Basically look into how to prevent re-renders on the component that uses this hook and does not use all of its returned values.
// Somehow useSWR accomplishes that...

export function usePDF(src: string, canvas: HTMLCanvasElement | null, initialPageNum: number = 1) {
  const docRef = useRef<pdf.PDFDocumentProxy>(null)
  const pageRef = useRef<pdf.PDFPageProxy>(null)
  const [viewport, setViewport] = useState<pdf.PageViewport>()
  const [pageNum, setPageNum] = useState(initialPageNum)
  const [isLoading, setIsLoading] = useState(true)

  // Loading the document and current page
  useEffect(() => {
    async function loadDocumentAndPage() {
      if (docRef.current === null) await loadDocumentAsync()
      await loadPageAsync()
    }

    async function loadDocumentAsync() {
      setIsLoading(true)
      const doc = await pdf.getDocument(src).promise
      docRef.current = doc
      setIsLoading(false)
    }

    async function loadPageAsync() {
      try {
        const page = await docRef.current!.getPage(pageNum)
        pageRef.current = page

        const viewport = page!.getViewport({ scale: 1 })
        setViewport(viewport)
      } catch (err) {
        if (err instanceof Error) {
          if (err.message.toLowerCase().includes("invalid page request")) {
            console.warn(`Page ${pageNum} is invalid. Resetting page number to 1`)
            setPageNum(1)
            return
          }

          console.error(err)
        }
      }
    }

    loadDocumentAndPage()
  }, [src, pageNum])

  // Rendering current page
  useEffect(() => {
    async function renderPageAsync() {
      setIsLoading(true)
      const viewport = pageRef.current!.getViewport({ scale: 1 })
      await pageRef.current!.render({ canvas, viewport }).promise
      setIsLoading(false)
    }

    if (viewport === undefined || canvas === null) return
    if (pageRef.current === undefined) {
      throw new Error("About to call renderPageAsync() but we do not have a pageRef. This is unexpected...")
    }

    renderPageAsync()
  }, [viewport, canvas])

  return { viewport, pageNum, setPageNum, numPages: docRef.current?.numPages ?? 0, isLoading }
}
