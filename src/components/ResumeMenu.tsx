import { useCallback, useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { DownloadIcon, ExternalIcon } from './Icons'
import { ResumeDialog } from './ResumeDialog'

const src = `${import.meta.env.BASE_URL}${profile.resume.path}`

const itemClass =
  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white'

/** Navbar "Resume" button: hover (or focus/tap) reveals View and Download options. */
export function ResumeMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [viewing, setViewing] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const closeViewer = useCallback(() => setViewing(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onDown)
    }
  }, [menuOpen])

  return (
    <div
      ref={root}
      className="relative"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setMenuOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-lg border border-sky-500 bg-sky-500 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-sky-400"
      >
        Resume
        <svg
          viewBox="0 0 20 20"
          width="14"
          height="14"
          fill="currentColor"
          aria-hidden
          className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
        >
          <path d="M5.5 7.5 10 12l4.5-4.5-1-1L10 10 6.5 6.5z" />
        </svg>
      </button>

      {menuOpen && (
        // pt-2 keeps the hover area continuous between the button and the panel
        <div className="absolute right-0 top-full z-50 w-48 pt-2">
          <div role="menu" className="rounded-lg border border-slate-700 bg-slate-900 p-1.5 shadow-xl">
            <button
              type="button"
              role="menuitem"
              className={itemClass}
              onClick={() => {
                setMenuOpen(false)
                setViewing(true)
              }}
            >
              <ExternalIcon width={16} height={16} />
              View Resume
            </button>
            <a
              role="menuitem"
              href={src}
              download={profile.resume.downloadName}
              className={itemClass}
              onClick={() => setMenuOpen(false)}
            >
              <DownloadIcon width={16} height={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}

      <ResumeDialog open={viewing} onClose={closeViewer} />
    </div>
  )
}
