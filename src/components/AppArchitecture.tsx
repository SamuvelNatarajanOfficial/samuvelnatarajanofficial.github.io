function Box({ children, accent }: { children: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-md border px-3 py-2 text-center font-mono text-xs text-slate-100 sm:text-sm ${
        accent ? 'border-sky-500/50 bg-sky-500/10' : 'border-slate-700 bg-slate-900'
      }`}
    >
      {children}
    </div>
  )
}

const Line = () => <span aria-hidden className="mx-auto block h-5 w-px bg-slate-600" />

/** Request path: Internet → Nginx → (Frontend | FastAPI backend) → PostgreSQL. */
export function AppArchitecture() {
  return (
    <figure aria-label="Traavelite application architecture" className="mx-auto w-full max-w-sm">
      <div className="mx-auto w-40">
        <Box>Internet / User</Box>
      </div>
      <Line />
      <div className="mx-auto w-40">
        <Box accent>Nginx</Box>
      </div>
      <Line />
      <div aria-hidden className="mx-auto h-px w-1/2 bg-slate-600" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Line />
          <Box>React Frontend</Box>
        </div>
        <div>
          <Line />
          <Box>FastAPI Backend</Box>
          <Line />
          <Box accent>PostgreSQL</Box>
        </div>
      </div>
    </figure>
  )
}
