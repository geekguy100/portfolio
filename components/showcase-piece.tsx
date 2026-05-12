import Image from "next/image"
import Link from "next/link"
import { type CSSProperties } from "react"

export interface ShowcasePieceProps {
  title: string
  descriptions: string[]
  id: string
  img: string
  animIndex?: number
}

export function ShowcasePiece({ title, descriptions, id, img, animIndex }: ShowcasePieceProps) {
  const slideStyle = animIndex === undefined ? undefined : ({ "--base-delay": `${animIndex * 400}ms` } as CSSProperties)

  return (
    <Link href={`/projects/${id}`}>
      <article className="flex flex-col gap-4 rounded-md p-6 outline-primary hover:outline-3 sm:flex-row">
        <div className="relative aspect-300/160 size-full max-h-40 max-w-75 flex-none self-center max-sm:mx-auto">
          <Image fill unoptimized loading="eager" src={img} alt={`Thumbnail for content titled "${title}"`} />
        </div>

        <div className={animIndex !== undefined ? "group-slide" : ""} style={slideStyle}>
          <h3 className="text-center sm:text-left">{title}</h3>
          {descriptions.map((desc, i) => {
            const style = { "--delay-index": i + 1 } as CSSProperties
            return (
              <p key={i} style={style}>
                {desc}
              </p>
            )
          })}
        </div>
      </article>
    </Link>
  )
}
