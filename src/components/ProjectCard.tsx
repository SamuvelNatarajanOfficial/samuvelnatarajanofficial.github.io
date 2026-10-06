import { isConfigured, type Project } from '../data/profile'
import { Button } from './Button'
import { Flow } from './Flow'
import { CheckIcon, ExternalIcon, GitHubIcon } from './Icons'
import { Tag } from './Tag'

const diagrams: Record<Project['diagram'], { title: string; nodes: { label: string }[] }[]> = {
  platform: [
    {
      title: 'Delivery pipeline',
      nodes: [{ label: 'Git' }, { label: 'CI' }, { label: 'Trivy / SonarQube' }, { label: 'ECR' }, { label: 'ArgoCD' }, { label: 'EKS' }],
    },
    {
      title: 'Infrastructure & observability',
      nodes: [{ label: 'Terraform' }, { label: 'AWS' }, { label: 'Prometheus / Loki' }, { label: 'Grafana' }, { label: 'Alertmanager' }],
    },
  ],
  cloudnative: [
    {
      title: 'CI pipeline',
      nodes: [{ label: 'GitHub Actions' }, { label: 'Test' }, { label: 'Trivy / Gitleaks / Hadolint' }, { label: 'Docker build' }],
    },
    {
      title: 'Infrastructure',
      nodes: [{ label: 'Terraform' }, { label: 'VPC / IAM' }, { label: 'EKS' }, { label: 'Helm' }],
    },
  ],
  traavelite: [
    {
      title: 'Request flow',
      nodes: [{ label: 'User' }, { label: 'Nginx' }, { label: 'Frontend' }, { label: 'FastAPI' }, { label: 'PostgreSQL' }],
    },
    {
      title: 'Delivery pipeline',
      nodes: [
        { label: 'GitHub' },
        { label: 'GitHub Actions' },
        { label: 'Build / Test' },
        { label: 'Docker' },
        { label: 'AWS EC2' },
      ],
    },
  ],
  spendflow: [
    {
      title: 'Hosting',
      nodes: [{ label: 'Browser' }, { label: 'GitHub Pages' }],
    },
  ],
}

export function ProjectCard({ project }: { project: Project }) {
  const showGithub = !!project.github && isConfigured(project.github)
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-slate-600 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.name}</h3>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
          {project.status}
        </span>
      </div>
      <p className="mt-3 leading-relaxed text-slate-400">{project.description}</p>

      <ul className="mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-sky-400" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
        {diagrams[project.diagram].map((d) => (
          <div key={d.title}>
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-slate-500">{d.title}</p>
            <Flow nodes={d.nodes} direction="row" label={`${project.name} ${d.title}`} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
        {project.stack.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        {project.live && (
          <Button href={project.live} external icon={<ExternalIcon width={18} height={18} />}>
            View Project
          </Button>
        )}
        {showGithub && (
          <Button
            href={project.github!}
            external
            variant={project.live ? 'secondary' : 'primary'}
            icon={<GitHubIcon width={18} height={18} />}
          >
            {project.live ? 'GitHub' : 'View Project'}
          </Button>
        )}
        {!project.live && !showGithub && (
          <span className="text-sm text-slate-500">{project.privateNote ?? 'Repository link coming soon'}</span>
        )}
      </div>
    </article>
  )
}
