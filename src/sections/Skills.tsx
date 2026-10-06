import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import { skillGroups } from '../data/profile'

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" tinted>
      <SectionHeading
        eyebrow="02 / Skills"
        title="Technical Skills"
        id="skills-title"
        description="Tools and platforms I work with, grouped by area."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 70}>
            <div className="h-full rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors duration-200 hover:border-slate-600">
              <h3 className="text-lg font-semibold text-white">{g.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{g.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
