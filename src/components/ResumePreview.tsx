import { useCallback, useState } from 'react'
import { profile } from '../data/profile'
import { Button } from './Button'
import { ExternalIcon } from './Icons'
import { ResumeDialog } from './ResumeDialog'

const src = `${import.meta.env.BASE_URL}${profile.resume.path}`

/** Opens the resume in a modal. */
export function ResumePreview({ variant = 'secondary' }: { variant?: 'primary' | 'secondary' }) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <Button
        href={src}
        variant={variant}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault()
          setOpen(true)
        }}
        icon={<ExternalIcon width={18} height={18} />}
      >
        Preview Resume
      </Button>
      <ResumeDialog open={open} onClose={close} />
    </>
  )
}
