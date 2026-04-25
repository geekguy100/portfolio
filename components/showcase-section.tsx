import { PropsWithChildren } from "react"

export interface ShowcaseSectionProps extends PropsWithChildren {
  title: string
  description: string
  id: string
}

export function ShowcaseSection({ title, description, id, children }: ShowcaseSectionProps) {
  return (
    <section className="flex flex-col gap-2" id={id}>
      <div className="text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {children}
    </section>
  )
}
