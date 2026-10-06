import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { Button } from './Button'
import { CloseIcon, ExternalIcon } from './Icons'
import { ResumeButton } from './ResumeButton'

const src = `${import.meta.env.BASE_URL}${profile.resume.path}`

/** Opens the resume in a modal. The PDF is only loaded once the modal is opened. */
export function ResumePreview({ variant = 'secondary' }: { variant?: 'primary' | 'secondary' }) {
  const ref = useRef<HTMLDialogElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const onClose = () => {
      document.body.style.overflow = ''
    }
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [])

  const open = () => {
    setLoaded(true)
    ref.current?.showModal()
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <Button
        href={src}
        variant={variant}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault()
          open()
        }}
        icon={<ExternalIcon width={18} height={18} />}
      >
        Preview Resume
      </Button>

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
          {loaded && (
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
    </>
  )
}
