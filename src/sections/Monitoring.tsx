import { Flow } from '../components/Flow'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

export function Monitoring() {
  return (
    <Section id="monitoring" labelledBy="monitoring-title" tinted>
      <SectionHeading eyebrow="Monitoring" title="Monitoring & Observability" id="monitoring-title" />
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Monitoring and observability are essential for understanding application health, infrastructure
            performance, and production reliability.
          </p>
          <p className="mt-4 text-slate-400">I work with Prometheus for metrics collection and Grafana for dashboards.</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto w-full max-w-[14rem] rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <Flow
              label="Monitoring flow"
              nodes={[
                { label: 'Application' },
                { label: 'Prometheus', sub: 'metrics' },
                { label: 'Grafana', sub: 'visualization' },
                { label: 'Dashboards / Alerts' },
              ]}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
