import { PdfViewer } from "@/components/pdf-viewing/pdf-viewer-lazy"

export default function Page() {
  return <PdfViewer className="mx-auto" src="/dgcodedocs.pdf" />
}
