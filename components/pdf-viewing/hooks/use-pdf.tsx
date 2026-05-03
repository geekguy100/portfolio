import { useEffect, useRef, useState } from "react"
import * as pdf from "pdfjs-dist"
import "pdfjs-dist/build/pdf.worker.min.mjs"

// TODO: Look into use callbacks or try using a ref and just updating the ref, and pass that back to the client.
// Then the client can useEffect() to listen for changes?
// Basically look into how to prevent re-renders on the component that uses this hook and does not use all of its returned values.
// Somehow useSWR accomplishes that...

// TODO: Add a pendingDocuments Set<string> that can be checked to see if a new load should be started.
// CONSIDER: Consider adding a PDFContext that can store this Map more permanently.

// TODO: Test to make sure that if documents later in the PDF take a while to load that the loading spinner displays correctly.
// TODO: Figure out how to scale the PDF viewport and adjust the width and height of the canvas as the screen size shrinks.
const loadedDocuments: Map<string, pdf.PDFDocumentProxy> = new Map()

export function useRenderedPDF(src: string, canvas: HTMLCanvasElement | null, initialPageNum: number = 1) {
  const { pdf: document, isLoading: isDocumentLoading } = usePDFDocument(src)
  const pageRef = useRef<pdf.PDFPageProxy>(null)
  const [viewport, setViewport] = useState<pdf.PageViewport>()
  const [pageNum, setPageNum] = useState(initialPageNum)
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [isRendering, setIsRendering] = useState(false)

  // Loading the current page
  useEffect(() => {
    async function loadPageAsync() {
      setIsPageLoading(true)
      try {
        const page = await document!.getPage(pageNum)
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
      } finally {
        setIsPageLoading(false)
      }
    }

    if (document === undefined) return
    loadPageAsync()
  }, [document, pageNum])

  // Rendering current page
  useEffect(() => {
    async function renderPageAsync() {
      setIsRendering(true)
      const viewport = pageRef.current!.getViewport({ scale: 1 })
      await pageRef.current!.render({ canvas, viewport }).promise
      setIsRendering(false)
    }

    if (viewport === undefined || canvas === null) return
    if (pageRef.current === undefined) {
      throw new Error("About to call renderPageAsync() but we do not have a pageRef. This is unexpected...")
    }

    renderPageAsync()
  }, [viewport, canvas])

  return {
    viewport,
    pageNum,
    setPageNum,
    numPages: document?.numPages ?? 0,
    isLoading: isDocumentLoading || isPageLoading,
    isRendering,
  }
}

export function usePDFDocument(src: string) {
  const [isLoading, setIsLoading] = useState(loadedDocuments.get(src) === undefined)
  const [pdf, setPdf] = useState<pdf.PDFDocumentProxy | undefined>(loadedDocuments.get(src))

  useEffect(() => {
    async function load() {
      setIsLoading(true)
      const result = await getPdfDocument(src)
      setIsLoading(false)
      setPdf(result)
    }

    if (pdf !== undefined) return
    load()
  }, [src])

  return { isLoading, pdf }
}

/**
 * Gets the requested PDF document from the cache if it exists. Otherwise, loads the document, caches it, then returns the result.
 * @param src The source of the PDF document.
 * @returns A Promise resolving to a PDFDocumentProxy.
 */
async function getPdfDocument(src: string) {
  let doc = loadedDocuments.get(src)
  if (doc) return doc

  doc = await pdf.getDocument(src).promise
  loadedDocuments.set(src, doc)
  return doc
}
