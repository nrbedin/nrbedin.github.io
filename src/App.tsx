import { Header } from './components/Header'
import { About } from './sections/About'
import { CaseStudies } from './sections/CaseStudies'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Skills } from './sections/Skills'
import { profile } from './content/profile'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <a href="#conteudo" className={styles.skipLink}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <CaseStudies />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} {profile.name} · Feito com React e TypeScript ·{' '}
          <a href="https://github.com/nrbedin/nrbedin.github.io">código-fonte</a>
        </p>
      </footer>
    </>
  )
}
