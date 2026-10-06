import { Button } from '../components/Button'
import { ArrowRightIcon } from '../components/Icons'
import { Flow } from '../components/Flow'
import { ResumeButton } from '../components/ResumeButton'
import { SocialLinks } from '../components/SocialLinks'
import { heroPipeline, profile } from '../data/profile'

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 font-mono text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Open to DevOps &amp; Cloud Engineering roles
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-sky-400 sm:text-xl">{profile.headline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" icon={<ArrowRightIcon width={18} height={18} />} className="flex-row-reverse">
              View My Projects
            </Button>
            <ResumeButton variant="secondary" />
          </div>
          <SocialLinks className="mt-8" />
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl shadow-black/30 sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-mono text-xs text-slate-400">delivery-pipeline</span>
              <span className="font-mono text-xs text-emerald-400">commit → production</span>
            </div>
            <Flow nodes={heroPipeline.map((n) => ({ label: n.label, sub: n.tag }))} label="Delivery pipeline" />
          </div>
        </div>
      </div>
    </section>
  )
}
