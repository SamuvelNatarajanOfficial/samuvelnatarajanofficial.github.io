import { MainLayout } from './layouts/MainLayout'
import { About } from './sections/About'
import { Architecture } from './sections/Architecture'
import { Cloud } from './sections/Cloud'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Monitoring } from './sections/Monitoring'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Workflow } from './sections/Workflow'

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Cloud />
      <Experience />
      <Projects />
      <Workflow />
      <Architecture />
      <Monitoring />
      <Contact />
    </MainLayout>
  )
}
