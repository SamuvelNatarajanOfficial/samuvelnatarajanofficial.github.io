import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { about, certifications, profile } from '../data/profile'

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <SectionHeading eyebrow="01 / About" title="About Me" id="about-title" />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <p className="text-3xl font-bold text-white">{profile.experienceYears} years</p>
            <p className="mt-1 text-sm text-slate-400">of professional DevOps experience</p>
            <h3 className="mt-6 font-mono text-xs uppercase tracking-widest text-sky-400">Core focus</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {about.focus.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-sky-400" />
                  {f}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-mono text-xs uppercase tracking-widest text-sky-400">Certification</h3>
            {certifications.map((c) => (
              <p key={c.name} className="mt-3 text-sm text-slate-300">
                {c.name}
                <span className="block text-xs text-slate-500">
                  {c.issuer} · {c.year}
                </span>
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
