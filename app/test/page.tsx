import { PdfViewer } from "@/components/pdf-viewing/pdf-viewer-lazy"

export default function Page() {
  return (
    <div className="sm:bg-green-500 md:bg-red-500 lg:bg-orange-500">
      <PdfViewer src="/dgcodedocs.pdf" />
    </div>
  )
}
