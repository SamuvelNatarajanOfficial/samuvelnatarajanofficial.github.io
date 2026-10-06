# Samuvel Natarajan — DevOps Engineer Portfolio

Personal portfolio for Samuvel Natarajan, a DevOps Engineer with 3.6+ years of experience in cloud infrastructure, CI/CD, containers, Kubernetes, Linux, and monitoring.

Live site: https://samuvelnatarajanofficial.github.io/

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Features

- Responsive design (desktop, tablet, mobile) with a dark, engineering-focused theme
- DevOps-focused portfolio: skills, cloud platforms, workflow, architecture and monitoring sections
- Projects with architecture diagrams
- Experience timeline
- Resume download (`public/resume.pdf`)
- Contact section
- GitHub Pages deployment via GitHub Actions

## Updating Content

All personal content lives in [`src/data/profile.ts`](src/data/profile.ts).

Replace the `YOUR_*` placeholders (email, GitHub, LinkedIn, project repository URLs). Links that still hold a placeholder are hidden from the UI.

Replace `public/resume.pdf` with your own resume (keep the file name).

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview   # optional: serve the production build locally
npm run lint
```

## Deployment

The site deploys to GitHub Pages from the repository `samuvelnatarajanofficial.github.io`.

1. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) checks out the code, installs dependencies, lints, builds, and publishes `dist/`.
3. The site is served at `https://samuvelnatarajanofficial.github.io/`.

Because this is a user site served from the domain root, Vite uses `base: '/'` (see `vite.config.ts`).