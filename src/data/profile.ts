/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — components only render what is here.
 *
 * Values starting with "YOUR_" are placeholders. Links with a placeholder
 * value are hidden from the UI until you replace them (see `isConfigured`).
 */

export const isConfigured = (value: string) => !value.startsWith('YOUR_')

export const profile = {
  name: 'Samuvel Natarajan',
  role: 'DevOps Engineer',
  headline: 'DevOps Engineer | Cloud Infrastructure | CI/CD | Kubernetes',
  experienceYears: '3.6+',
  intro:
    'DevOps Engineer with 3.6+ years of experience in cloud infrastructure, CI/CD automation, containerization, Kubernetes, Linux, and monitoring. Focused on building reliable, automated, and scalable deployment environments.',
  availability: "I'm currently open to DevOps and Cloud Engineering opportunities.",
  siteUrl: 'https://samuvelnatarajanofficial.github.io/',

  // ---- Contact / social: REPLACE the placeholders below ----
  email: 'samuvelnatarajanofficial@gmail.com',
  github: 'https://github.com/SamuvelNatarajanOfficial',
  linkedin: 'https://www.linkedin.com/in/samuvel-devops-5j1996/',

  // Place your PDF at public/resume.pdf (replace the placeholder file).
  resume: { path: 'resume.pdf', downloadName: 'Samuvel_Natarajan_Resume.pdf' },
}

export const about = {
  paragraphs: [
    'I am a DevOps Engineer with 3.6+ years of professional experience working across cloud infrastructure, CI/CD, containerization, and monitoring. My focus is on making software delivery repeatable and dependable — from commit to production.',
    'Day to day I work with Linux, Docker, Kubernetes, Jenkins, and GitHub Actions on AWS and Azure, automating infrastructure and deployments so teams can release with confidence. I use Python and Groovy as scripting tools to support that automation.',
    'I approach systems with a production mindset: automate what is repetitive, make deployments predictable, and keep services observable with Prometheus and Grafana.',
  ],
  focus: [
    'Cloud infrastructure',
    'CI/CD automation',
    'Containers & Kubernetes',
    'Linux administration',
    'Infrastructure automation',
    'Monitoring & observability',
  ],
}

export interface SkillGroup {
  title: string
  description: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud',
    description: 'Public cloud platforms',
    items: ['AWS', 'Microsoft Azure', 'Oracle Cloud (OCI)'],
  },
  {
    title: 'CI/CD & GitOps',
    description: 'Build and delivery automation',
    items: ['GitHub Actions', 'Jenkins', 'ArgoCD', 'Git', 'GitHub'],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Repeatable, multi-environment infrastructure',
    items: ['Terraform', 'Ansible'],
  },
  {
    title: 'Containers & Orchestration',
    description: 'Packaging and running workloads',
    items: ['Docker', 'Kubernetes', 'AKS', 'EKS', 'Helm', 'HPA', 'ECR', 'DockerHub'],
  },
  {
    title: 'Monitoring & Observability',
    description: 'Metrics, logs, dashboards and alerting',
    items: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager'],
  },
  {
    title: 'Security & Quality',
    description: 'Security-conscious pipelines',
    items: ['AWS IAM', 'Trivy', 'SonarQube', 'Gitleaks', 'Hadolint'],
  },
  {
    title: 'Linux & Networking',
    description: 'Systems and cloud networking',
    items: ['Linux', 'Nginx', 'VPC / VNet', 'ALB', 'Route 53', 'Azure DNS', 'Kubernetes Ingress', 'SSL termination'],
  },
  {
    title: 'Scripting',
    description: 'Automation support',
    items: ['Bash', 'Python', 'Groovy', 'YAML'],
  },
]

export interface CloudService {
  name: string
  label: string
}

export const awsServices: CloudService[] = [
  { name: 'IAM', label: 'AWS Identity and Access Management' },
  { name: 'EC2', label: 'Amazon Elastic Compute Cloud' },
  { name: 'EKS', label: 'Amazon Elastic Kubernetes Service' },
  { name: 'ECR', label: 'Amazon Elastic Container Registry' },
  { name: 'S3', label: 'Amazon Simple Storage Service' },
  { name: 'VPC', label: 'Amazon Virtual Private Cloud' },
  { name: 'ALB', label: 'Application Load Balancer' },
  { name: 'Route 53', label: 'Amazon Route 53 (DNS)' },
  { name: 'KMS', label: 'AWS Key Management Service' },
  { name: 'ACM', label: 'AWS Certificate Manager' },
]

/** Only list Azure services you have actually used. */
export const azureServices: CloudService[] = [
  { name: 'Virtual Machines', label: 'Azure Virtual Machines' },
  { name: 'Virtual Network', label: 'Azure Virtual Network (VNet)' },
  { name: 'Storage', label: 'Azure Storage accounts' },
  { name: 'DNS', label: 'Azure DNS zones' },
  { name: 'Entra ID', label: 'Microsoft Entra ID (Azure AD)' },
  { name: 'AKS', label: 'Azure Kubernetes Service' },
]

export const experience = [
  {
    role: 'DevOps Engineer',
    company: 'Majordomo, Inc.',
    location: 'Chennai, India',
    period: 'April 2023 – Present',
    duration: '3.6+ years',
    summary: 'Cloud infrastructure, CI/CD, Kubernetes, GitOps and observability on AWS and Azure.',
    responsibilities: [
      'Architected and automated cloud infrastructure on AWS and Azure with modular Terraform and remote state across dev, staging and production, reducing provisioning time by ~60%.',
      'Designed and maintained CI/CD pipelines with GitHub Actions and Jenkins covering build, test, security scan and deploy stages, reducing deployment time by ~70%.',
      'Deployed and operated containerized microservices on Amazon EKS using Docker and Helm, with Horizontal Pod Autoscaling and resource limits.',
      'Implemented GitOps with ArgoCD for automated, zero-downtime rollouts from a dedicated GitOps repository.',
      'Built an observability stack with Prometheus, Grafana and Loki, with Alertmanager routing to Slack and email, reducing mean time to detect incidents by ~50%.',
      'Integrated SonarQube quality gates and Trivy image scanning into CI pipelines.',
      'Applied cost-optimization practices on AWS and Azure development environments: tagging, budget alerts and scheduled shutdown of non-production instances.',
      'Managed Linux-based EC2 instances and wrote Bash scripts for automation, log management and operational tasks.',
    ],
    stack: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'Helm', 'ArgoCD', 'Docker', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Loki'],
  },
]

export const certifications = [{ name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023' }]

export interface Project {
  name: string
  status: string
  description: string
  highlights: string[]
  stack: string[]
  /** Which architecture diagram to render in the card. */
  diagram: 'platform' | 'cloudnative' | 'traavelite' | 'spendflow'
  /** Omit for internal projects whose source cannot be shared. */
  github?: string
  live?: string
  /** Shown instead of links when the project is internal. */
  privateNote?: string
}

export const projects: Project[] = [
  {
    name: 'End-to-End CI/CD, GitOps & Monitoring Platform on AWS',
    status: 'Production-grade',
    description:
      'A DevOps platform for containerized microservices on AWS covering infrastructure provisioning, CI/CD, GitOps deployments and centralized observability.',
    highlights: [
      'Modular Terraform for EKS, EC2, VPC, Route 53, ALB and IAM with S3 remote state and DynamoDB locking',
      'Docker images in ECR, deployed to EKS with Helm and HPA',
      'CI: Pytest, Trivy, SonarQube quality gates, ECR push, Slack notifications',
      'ArgoCD auto-sync with PR-based promotion',
      'Prometheus, Loki and Grafana with Alertmanager alerting',
    ],
    stack: ['Terraform', 'AWS EKS', 'Docker', 'Helm', 'ArgoCD', 'GitHub Actions', 'Trivy', 'SonarQube', 'Prometheus', 'Grafana', 'Loki'],
    diagram: 'platform',
    privateNote: 'Internal project — source code is not public',
  },
  {
    name: 'Cloud-Native DevOps Platform',
    status: 'Personal project',
    description:
      'A production-inspired cloud-native microservices platform built with Docker, Kubernetes, Terraform, GitHub Actions, Helm, Ansible and AWS EKS.',
    highlights: [
      'Modular Terraform for VPC, IAM and EKS with public/private subnets, NAT Gateway and managed node groups',
      'Multi-stage, non-root Docker builds for Node.js/Express and Python/FastAPI services',
      'GitHub Actions CI with Trivy, Gitleaks and Hadolint',
      'Ansible server configuration and environment-parameterized Helm deployments',
    ],
    stack: ['Terraform', 'AWS EKS', 'Kubernetes', 'Helm', 'Ansible', 'Docker', 'GitHub Actions', 'Trivy', 'Gitleaks', 'Hadolint'],
    diagram: 'cloudnative',
    github: 'https://github.com/SamuvelNatarajanOfficial/cloud-native-devops-platform',
  },
  {
    name: 'Traavelite Attendance Management System',
    status: 'In active development',
    description:
      'A production-oriented driver attendance management system designed for a travel company.',
    highlights: [
      'Automated attendance processing',
      'Leave management',
      'Driver management',
      'Role-based administration',
      'Testing and architecture documentation',
    ],
    // Keep this list in sync with what is actually implemented.
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx', 'GitHub Actions', 'AWS'],
    diagram: 'traavelite',
    privateNote: 'Internal project — source code is not public',
  },
  {
    name: 'SpendFlow',
    status: 'Live',
    description:
      'A personal salary and expense management web application designed for mobile, tablet, and desktop use.',
    highlights: [
      'Monthly salary management',
      'Recurring monthly expenses',
      'Extra / one-time expenses',
      'Payment tracking and monthly records',
      'Dashboard, authentication, responsive UI',
    ],
    stack: ['GitHub Pages'],
    diagram: 'spendflow',
    github: 'YOUR_SPENDFLOW_REPO_URL',
    live: 'https://samuvelnatarajanofficial.github.io/SpendFlow/',
  },
]

export const lifecycle = [
  { step: 'Plan', note: 'Scope and requirements' },
  { step: 'Code', note: 'Implement changes' },
  { step: 'Git', note: 'Version control' },
  { step: 'CI', note: 'Automated builds' },
  { step: 'Testing', note: 'Automated checks' },
  { step: 'Docker', note: 'Containerize' },
  { step: 'Deployment', note: 'Automated release' },
  { step: 'Cloud Infrastructure', note: 'AWS / Azure' },
  { step: 'Monitoring', note: 'Prometheus / Grafana' },
  { step: 'Continuous Improvement', note: 'Feedback loop' },
]

export const heroPipeline = [
  { label: 'Developer', tag: 'commit' },
  { label: 'Git', tag: 'version control' },
  { label: 'CI/CD', tag: 'Jenkins · GitHub Actions' },
  { label: 'Docker', tag: 'container image' },
  { label: 'Kubernetes', tag: 'orchestration' },
  { label: 'Cloud', tag: 'AWS · Azure' },
  { label: 'Monitoring', tag: 'Prometheus · Grafana' },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
