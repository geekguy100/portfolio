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
      <div className="flex gap-4 rounded-md p-6 outline-primary hover:outline-3">
        <Image
          className="object-contain"
          unoptimized
          src={img}
          width={300}
          height={160}
          alt={`Thumbnail for content titled "${title}"`}
        />
        <div className="flex flex-col">
          <h3>{title}</h3>
          {descriptions.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}
