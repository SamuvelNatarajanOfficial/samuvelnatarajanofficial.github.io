import { Reveal } from './Reveal'

interface Props {
  eyebrow: string
  title: string
  description?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, id }: Props) {
  return (
    <Reveal className="mb-10 max-w-2xl sm:mb-12">
      <p className="font-mono text-xs uppercase tracking-widest text-sky-400">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-base leading-relaxed text-slate-400">{description}</p>}
    </Reveal>
  )
}
