import { profile } from '../data/profile'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-400">{profile.role}</p>
        </div>
        <SocialLinks />
      </div>
      <div className="border-t border-slate-900 px-5 py-5 text-center text-sm text-slate-500">
        © 2026 {profile.name}. Built with React &amp; TypeScript.
      </div>
    </footer>
  )
}
