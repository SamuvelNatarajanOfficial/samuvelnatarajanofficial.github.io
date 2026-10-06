import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { awsServices, azureServices, type CloudService } from '../data/profile'

function ServiceGrid({ services, accent }: { services: CloudService[]; accent: string }) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-3">
      {services.map((s) => (
        <li key={s.name} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
          <p className={`font-mono text-sm font-semibold ${accent}`}>{s.name}</p>
          <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
        </li>
      ))}
    </ul>
  )
}

export function Cloud() {
  return (
    <Section id="cloud" labelledBy="cloud-title">
      <SectionHeading
        eyebrow="Cloud"
        title="Cloud Platforms"
        id="cloud-title"
        description="AWS and Microsoft Azure are the two cloud platforms I work with."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-slate-800 bg-gradient-to-br from-amber-500/5 to-slate-900/60 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Amazon Web Services</h3>
            <ServiceGrid services={awsServices} accent="text-amber-300" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-slate-800 bg-gradient-to-br from-sky-500/10 to-slate-900/60 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Microsoft Azure</h3>
            <ServiceGrid services={azureServices} accent="text-sky-300" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
