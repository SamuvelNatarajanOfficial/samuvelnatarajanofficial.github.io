export interface FlowNode {
  label: string
  sub?: string
}

interface Props {
  nodes: FlowNode[]
  /** `col`: vertical pipeline with connectors. `row`: compact wrapping chain. */
  direction?: 'col' | 'row'
  label: string
}

function Arrow({ vertical }: { vertical: boolean }) {
  return vertical ? (
    <span aria-hidden className="mx-auto flex h-5 flex-col items-center">
      <span className="h-full w-px bg-gradient-to-b from-slate-600 to-sky-500/60" />
      <svg width="8" height="5" viewBox="0 0 8 5" className="-mt-px text-sky-500/70">
        <path d="M0 0h8L4 5z" fill="currentColor" />
      </svg>
    </span>
  ) : (
    <span aria-hidden className="text-slate-600">
      →
    </span>
  )
}

/** Ordered pipeline diagram. Rendered as a list so it reads well to screen readers. */
export function Flow({ nodes, direction = 'col', label }: Props) {
  const vertical = direction === 'col'
  return (
    <ol
      aria-label={label}
      className={vertical ? 'flex flex-col' : 'flex flex-wrap items-center gap-x-2 gap-y-2'}
    >
      {nodes.map((node, i) => (
        <li
          key={node.label}
          className={vertical ? 'flex flex-col' : 'flex items-center gap-2'}
        >
          <div
            className={`rounded-md border border-slate-700 bg-slate-900 ${
              vertical ? 'px-4 py-2.5 text-center' : 'px-2.5 py-1.5'
            }`}
          >
            <span className={`block font-mono text-slate-100 ${vertical ? 'text-sm' : 'text-xs'}`}>
              {node.label}
            </span>
            {node.sub && vertical && (
              <span className="mt-0.5 block text-xs text-slate-500">{node.sub}</span>
            )}
          </div>
          {i < nodes.length - 1 && <Arrow vertical={vertical} />}
        </li>
      ))}
    </ol>
  )
}
