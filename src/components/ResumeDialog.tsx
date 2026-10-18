import { useEffect, useRef } from 'react'
import { profile } from '../data/profile'
import { CloseIcon } from './Icons'
import { ResumeButton } from './ResumeButton'

const src = `${import.meta.env.BASE_URL}${profile.resume.path}`

interface Props {
  open: boolean
  onClose: () => void
}

/** Modal PDF viewer. The PDF is only loaded while the modal is open. */
export function ResumeDialog({ open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const handleClose = () => {
      document.body.style.overflow = ''
      onClose()
    }
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  return (
    <dialog
      ref={ref}
      aria-label="Resume preview"
      className="m-auto h-[90vh] w-[min(56rem,94vw)] overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-0 text-slate-200 backdrop:bg-black/70"
      onClick={(e) => e.target === ref.current && ref.current?.close()}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-4 py-3">
          <p className="font-semibold text-white">Resume</p>
          <div className="flex items-center gap-2">
            <ResumeButton size="sm" label="Download" />
            <button
              type="button"
              aria-label="Close resume preview"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 hover:bg-slate-800"
              onClick={() => ref.current?.close()}
            >
              <CloseIcon width={18} height={18} />
            </button>
          </div>
        </div>
        {open && (
          <object data={src} type="application/pdf" className="min-h-0 w-full flex-1" aria-label="Resume PDF">
            <div className="p-6 text-center">
              <p className="text-slate-400">Your browser can't display the PDF inline.</p>
              <a className="mt-3 inline-block text-sky-400 underline" href={src} target="_blank" rel="noopener noreferrer">
                Open the resume in a new tab
              </a>
            </div>
          </object>
        )}
      </div>
    </dialog>
  )
}
