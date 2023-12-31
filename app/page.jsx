import styles from './page.module.css'
import LandingPage from '@/components/landing-page/landing-page.component'
import TechStack from '@/components/tech-stack/tech-stack.component'
import Education from '@/components/education/education.component'
import ProjectsPreview from '@/components/projects-preview/projects-preview.component'

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage/>
      <TechStack />
      <Education/>
      <ProjectsPreview />
    </main>
  )
}
