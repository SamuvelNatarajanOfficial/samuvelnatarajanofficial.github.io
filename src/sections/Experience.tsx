import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import { experience } from '../data/profile'

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title" tinted>
      <SectionHeading eyebrow="03 / Experience" title="Experience" id="experience-title" />
      <ol className="relative space-y-8 border-l border-slate-800 pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.85rem] top-2 h-3 w-3 rounded-full border-2 border-sky-400 bg-slate-950 sm:-left-[2.35rem]"
            />
            <Reveal>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <span className="font-mono text-sm text-sky-400">{job.period} · {job.duration}</span>
                </div>
                <p className="mt-1 text-slate-300">
                  {job.company} · {job.location}
                </p>
                <p className="mt-3 text-sm text-slate-400">{job.summary}</p>
                <ul className="mt-5 space-y-2.5 text-slate-300">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                      {r}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.stack.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
