import Image from "next/image"
import Link from "next/link"

export interface ContentCardProps {
  title: string
  descriptions: string[]
  href: string
  img: string
}

export function ShowcaseCard({ title, descriptions, href, img }: ContentCardProps) {
  return (
    <Link href={href}>
      <div className="flex gap-2 rounded-md bg-card p-6">
        <Image src={img} width={300} height={160} alt={`Thumbnail for content titled "${title}"`} />
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
          {descriptions.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}
