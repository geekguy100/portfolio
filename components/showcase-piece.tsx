import Image from "next/image"
import Link from "next/link"

export interface ShowcasePieceProps {
  title: string
  descriptions: string[]
  id: string
  img: string
}

export function ShowcasePiece({ title, descriptions, id, img }: ShowcasePieceProps) {
  return (
    <Link href={`/projects/${id}`}>
      <article className="flex flex-col gap-4 rounded-md p-6 outline-primary hover:outline-3 sm:flex-row">
        <div className="relative h-40 w-75 flex-none max-sm:mx-auto">
          <Image fill unoptimized loading="eager" src={img} alt={`Thumbnail for content titled "${title}"`} />
        </div>

        <div>
          <h3 className="text-center sm:text-left">{title}</h3>
          {descriptions.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      </article>
    </Link>
  )
}
