import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { lifecycle } from '../data/profile'

export function Workflow() {
  return (
    <Section id="workflow" labelledBy="workflow-title" tinted>
      <SectionHeading
        eyebrow="Workflow"
        title="How I Build & Deploy"
        id="workflow-title"
        description="The delivery lifecycle I follow, from planning through continuous improvement."
      />
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {lifecycle.map((s, i) => (
          <li key={s.step}>
            <Reveal delay={(i % 5) * 50} className="h-full">
              <div className="relative h-full rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <span className="font-mono text-xs text-sky-400">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-1 font-semibold text-white">{s.step}</p>
                <p className="mt-1 text-xs text-slate-500">{s.note}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
