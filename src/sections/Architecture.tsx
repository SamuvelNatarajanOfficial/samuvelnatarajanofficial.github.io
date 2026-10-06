import { AppArchitecture } from '../components/AppArchitecture'
import { Flow } from '../components/Flow'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'

export function Architecture() {
  return (
    <Section id="architecture" labelledBy="architecture-title">
      <SectionHeading
        eyebrow="Architecture"
        title="Architecture & Infrastructure"
        id="architecture-title"
        description="Architecture of the Traavelite Attendance Management System, which is in active development."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
            <h3 className="font-semibold text-white">Application architecture</h3>
            <p className="mt-1 mb-6 text-sm text-slate-500">Traffic enters through Nginx.</p>
            <AppArchitecture />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
            <h3 className="font-semibold text-white">CI/CD &amp; deployment</h3>
            <p className="mt-1 mb-6 text-sm text-slate-500">From commit to running containers.</p>
            <div className="mx-auto w-full max-w-[14rem]">
              <Flow
                label="CI/CD and deployment pipeline"
                nodes={[
                  { label: 'GitHub' },
                  { label: 'GitHub Actions' },
                  { label: 'Build / Test' },
                  { label: 'Docker Image' },
                  { label: 'AWS EC2' },
                  { label: 'Docker Containers' },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
