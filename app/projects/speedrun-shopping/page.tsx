import { getProjectMetdata } from "@/lib/helpers"
import { PlayProject } from "../_components/play-project"
import { PdfViewer } from "@/components/pdf-viewing/pdf-viewer-lazy"
import { SectionTitle } from "@/components/section-title"
import { ProjectFooter } from "../_components/project-footer"
import Link from "next/link"

export const metadata = getProjectMetdata("speedrun-shopping")

export default function SpeedrunShoppingPage() {
  return (
    <>
      <PlayProject type="embed" downloadLink="" githubLink="https://github.com/geekguy100/CIS497_ComedyGame">
        <iframe src="https://itch.io/embed-upload/3535053?color=333333" width="1000" height="820" />
      </PlayProject>
      <article>
        <SectionTitle>Design Documentation</SectionTitle>
        <PdfViewer
          showPageNumber
          downloadable
          fileName="Speedrun Shopping Design Docs"
          canvasProps={{ className: "mx-auto " }}
          carouselProps={{ className: "mx-48" }}
          src="/speedrunshopping_docs.pdf"
        />
      </article>
      <ProjectFooter>
        <p>
          For a full list of documents, forms, assets, etc., please click{" "}
          <Link
            href="https://drive.google.com/drive/u/0/folders/1c30YEPJtQDrso8lM7uSEHH6bER8n0z2q"
            target="_blank"
            className="underline"
          >
            here
          </Link>
          .
        </p>
      </ProjectFooter>
    </>
  )
}
