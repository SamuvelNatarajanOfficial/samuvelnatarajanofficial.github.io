import type { ReactNode } from 'react'

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-slate-700/80 bg-slate-800/50 px-2.5 py-1 font-mono text-xs text-slate-300">
      {children}
    </span>
  )
}
