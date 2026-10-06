import { Button } from '../components/Button'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { ResumeButton } from '../components/ResumeButton'
import { ResumePreview } from '../components/ResumePreview'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { isConfigured, profile } from '../data/profile'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon width={22} height={22} /> },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin, icon: <LinkedInIcon width={22} height={22} /> },
  { label: 'GitHub', value: profile.github, href: profile.github, icon: <GitHubIcon width={22} height={22} /> },
]

export function Contact() {
  return (
    <>
      <Section id="resume" labelledBy="resume-title" tinted>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="resume-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Interested in working together?
          </h2>
          <p className="mt-4 text-lg text-slate-400">{profile.availability}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ResumeButton />
            <ResumePreview />
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section id="contact" labelledBy="contact-title">
        <SectionHeading eyebrow="05 / Contact" title="Get in Touch" id="contact-title" />
        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map((c) => {
            const ok = isConfigured(c.value)
            const body = (
              <>
                <span className="text-sky-400">{c.icon}</span>
                <span className="mt-4 block text-sm font-semibold text-white">{c.label}</span>
                <span className="mt-1 block break-all text-sm text-slate-400">
                  {ok ? c.value.replace(/^https?:\/\//, '') : 'Not set — edit src/data/profile.ts'}
                </span>
              </>
            )
            const cls = 'block h-full rounded-xl border p-6 transition-colors duration-200'
            return (
              <Reveal key={c.label}>
                {ok ? (
                  <a
                    href={c.href}
                    className={`${cls} border-slate-800 bg-slate-900/60 hover:border-slate-600`}
                    {...(c.label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={`${cls} border-dashed border-slate-800 opacity-60`}>{body}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </Section>
    </>
  )
}
