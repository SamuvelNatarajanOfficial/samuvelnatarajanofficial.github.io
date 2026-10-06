import { Button } from './Button'
import { DownloadIcon } from './Icons'
import { profile } from '../data/profile'

interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  className?: string
  label?: string
}

/** Downloads public/resume.pdf. Works with any Vite `base` path. */
export function ResumeButton({ variant = 'primary', size = 'md', className, label = 'Download Resume' }: Props) {
  return (
    <Button
      href={`${import.meta.env.BASE_URL}${profile.resume.path}`}
      download={profile.resume.downloadName}
      variant={variant}
      size={size}
      className={className}
      icon={<DownloadIcon width={18} height={18} />}
    >
      {label}
    </Button>
  )
}
