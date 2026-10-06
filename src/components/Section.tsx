import type { ReactNode } from 'react'

interface Props {
  id: string
  labelledBy: string
  children: ReactNode
  tinted?: boolean
}

export function Section({ id, labelledBy, children, tinted }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-20 sm:py-24 ${tinted ? 'border-y border-slate-900 bg-slate-900/30' : ''}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}
