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
  headline: 'DevOps Engineer | Azure & AKS | CI/CD | Infrastructure as Code | Kubernetes',
  experienceYears: '3.5+',
  intro:
    'DevOps Engineer with 3.5+ years of experience in cloud infrastructure, CI/CD automation, and containerized software delivery on Azure and AWS. Focused on reliable, automated, and secure deployments across development, staging, and production.',
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
    'I am a DevOps Engineer with 3.5+ years of professional experience working across cloud infrastructure, CI/CD, containerization, and monitoring. My focus is on making software delivery repeatable and dependable — from commit to production.',
    'Day to day I work with Docker, Kubernetes (AKS and EKS), Terraform, Jenkins, GitHub Actions, and Argo CD on Azure and AWS, automating infrastructure and deployments so teams can release with confidence. I integrate Trivy, SonarQube, Gitleaks, and OWASP Dependency Check into pipelines, and use Python and Bash to automate recurring work.',
    'I approach systems with a production mindset: automate what is repetitive, make deployments predictable, keep services observable with Prometheus, Grafana, and Loki, and keep an eye on cloud cost. I also contribute to internal AI-agent tooling, including MCP tools and LLM-as-a-judge evaluation.',
  ],
  focus: [
    'Cloud infrastructure',
    'CI/CD automation',
    'Containers & Kubernetes',
    'DevSecOps & GitOps',
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
    items: ['Microsoft Azure', 'AWS'],
  },
  {
    title: 'CI/CD & GitOps',
    description: 'Build and delivery automation',
    items: ['Jenkins', 'GitHub Actions', 'Argo CD', 'Git', 'GitHub'],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Repeatable, multi-environment infrastructure',
    items: ['Terraform', 'Reusable modules', 'Remote state', 'Ansible'],
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
    items: ['Microsoft Entra ID', 'Azure RBAC', 'AWS IAM', 'Azure Key Vault', 'Trivy', 'SonarQube', 'Gitleaks', 'OWASP Dependency Check', 'Hadolint'],
  },
  {
    title: 'Linux & Networking',
    description: 'Systems and cloud networking',
    items: ['Linux', 'Nginx', 'VPC / VNet', 'Azure Firewall & NSGs', 'ALB', 'Route 53', 'Azure DNS', 'Kubernetes Ingress', 'SSL/TLS'],
  },
  {
    title: 'Scripting & Testing',
    description: 'Automation and test support',
    items: ['Python', 'Bash', 'Groovy', 'YAML', 'Pytest', 'Selenium'],
  },
  {
    title: 'Databases & Practices',
    description: 'Data stores and ways of working',
    items: ['PostgreSQL', 'MongoDB', 'Agile / Scrum'],
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
  { name: 'RBAC', label: 'Azure role-based access control' },
  { name: 'AKS', label: 'Azure Kubernetes Service' },
  { name: 'Key Vault', label: 'Azure Key Vault' },
  { name: 'Logic Apps', label: 'Azure Logic Apps' },
  { name: 'Firewall & NSGs', label: 'Azure Firewall and network security groups' },
]

export const experience = [
  {
    role: 'DevOps Engineer',
    company: 'Majordomo Systems India Private Limited',
    location: 'Chennai, India',
    period: 'Jul 2025 – Present',
    summary: 'Kubernetes, CI/CD, DevSecOps, GitOps and observability on Azure and AWS.',
    responsibilities: [
      'Kubernetes and containers: deployed and operated containerized workloads on Azure AKS and AWS EKS using Docker, Helm and kubectl across development, staging and production, including Kubernetes networking and ingress.',
      "CI/CD and DevSecOps: built Jenkins pipelines triggered by code changes to automate builds, testing, security scans and deployments. Integrated Trivy, SonarQube, Gitleaks and OWASP Dependency Check, introducing Gitleaks and OWASP Dependency Check as the organization's first implementation.",
      'GitOps: managed Argo CD deployments from Git-based Kubernetes manifests and Helm configurations in non-production environments.',
      'Cloud infrastructure and IaC: provisioned and managed AWS infrastructure (VPCs, EKS, EC2) using reusable Terraform modules across development, staging and production.',
      'Monitoring and operations: used Prometheus and Grafana for metrics and dashboards, Loki for centralized logging, and Slack/email alerting. Administered Linux workloads, troubleshot operational issues and automated recurring tasks with Bash and Python.',
      'Testing automation: developed Pytest and Selenium suites for API, regression and UI testing, integrated into CI/CD pipelines.',
      'Cost optimization: improved cloud cost visibility through non-production resource scheduling, tagging, instance rightsizing, usage reviews and AWS budget alerts.',
      'AI-agent tooling and backend: contributed to internal AI-agent tooling, built MCP (Model Context Protocol) tools, developed and tested Go backend features, and evaluated LLM outputs using an LLM-as-a-judge approach.',
      'PaaS and SaaS operations: supported cloud infrastructure and software delivery across PaaS and SaaS product environments.',
    ],
    stack: ['Azure AKS', 'AWS EKS', 'Terraform', 'Helm', 'Argo CD', 'Docker', 'Jenkins', 'Prometheus', 'Grafana', 'Loki', 'Trivy', 'SonarQube', 'Gitleaks', 'Pytest', 'Go'],
  },
  {
    role: 'DevOps Engineer',
    company: 'Tailwinds Cloud Services Private Limited',
    location: 'Chennai, India',
    period: 'Jul 2023 – Jun 2025',
    summary: 'Supported secure delivery of a PaaS product, maintaining CI/CD environments and Azure and AWS infrastructure.',
    responsibilities: [
      'Client: Payment Gateway Company. Migrated Docker-based application services to Kubernetes on AWS and introduced Kong for internal service routing.',
      'Client: Payment Gateway Company. Automated application deployments using Jenkins and Argo CD, improving release consistency and operational reliability.',
      'Client: Payment Gateway Company. Supported cost optimization and infrastructure monitoring through proactive maintenance and automation.',
      'Client: IIT Madras Research Park. Deployed and maintained WordPress websites on AWS, managing provisioning, scaling, patching and updates.',
      'Client: IIT Madras Research Park. Monitored infrastructure health and applied maintenance updates, contributing to reported service uptime.',
    ],
    stack: ['Docker', 'Kubernetes', 'Kong', 'MongoDB', 'Jenkins', 'Argo CD', 'AWS', 'WordPress'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Tailwinds Cloud Services Private Limited',
    location: 'Chennai, India',
    period: 'Apr 2023 – Jun 2023',
    summary: 'Internship before moving into the DevOps Engineer role.',
    responsibilities: ['Started at Tailwinds as a Software Engineer Intern, then transitioned to DevOps Engineer.'],
    stack: [] as string[],
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
      'A production-inspired cloud-native microservices platform built with Node.js/Express, Python/FastAPI, PostgreSQL, Docker, Kubernetes, Terraform, GitHub Actions, Helm, Ansible and AWS EKS.',
    highlights: [
      'Modular Terraform for VPC, IAM and EKS with public/private subnets, NAT Gateway and managed node groups',
      'Multi-stage, non-root Docker builds for Node.js/Express and Python/FastAPI services',
      'GitHub Actions CI with Trivy, Gitleaks and Hadolint',
      'Kubernetes health probes, resource requests and limits, and environment-parameterized Helm deployments',
      'Ansible server configuration, with credentials and Terraform state kept out of source control',
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
    github: 'https://github.com/SamuvelNatarajanOfficial/SpendFlow',
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
  { step: 'Cloud Infrastructure', note: 'Azure / AWS' },
  { step: 'Monitoring', note: 'Prometheus / Grafana' },
  { step: 'Continuous Improvement', note: 'Feedback loop' },
]

export const heroPipeline = [
  { label: 'Developer', tag: 'commit' },
  { label: 'Git', tag: 'version control' },
  { label: 'CI/CD', tag: 'Jenkins · GitHub Actions' },
  { label: 'Docker', tag: 'container image' },
  { label: 'Kubernetes', tag: 'orchestration' },
  { label: 'Cloud', tag: 'Azure · AWS' },
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
