import { isConfigured, profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

/** Icon links; entries still set to a YOUR_* placeholder are omitted. */
export function SocialLinks({ className = '' }: { className?: string }) {
  const links = [
    { label: 'GitHub', href: profile.github, icon: <GitHubIcon />, external: true },
    { label: 'LinkedIn', href: profile.linkedin, icon: <LinkedInIcon />, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, icon: <MailIcon />, external: false, raw: profile.email },
  ].filter((l) => isConfigured(l.raw ?? l.href))

  if (links.length === 0) return null
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            aria-label={l.label}
            title={l.label}
            {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
          >
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
