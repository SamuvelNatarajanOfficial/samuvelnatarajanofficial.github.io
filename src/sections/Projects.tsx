import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/profile'

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <SectionHeading
        eyebrow="04 / Projects"
        title="Projects"
        id="projects-title"
        description="Selected projects with their delivery and hosting setup."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
