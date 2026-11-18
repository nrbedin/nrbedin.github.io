import { ButtonLink } from '../components/ButtonLink'
import { profile } from '../content/profile'
import styles from './Hero.module.css'

export function Hero() {
  const { cv, linkedin, github } = profile.links
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className={styles.hero}>
      <div className={styles.inner}>
        <h1 id="inicio-titulo" className={styles.name}>
          {profile.name}
        </h1>
        <p className={styles.title}>{profile.title}</p>
        <p className={styles.tagline}>{profile.tagline}</p>
        <div className={styles.actions}>
          {/* TODO (Fase 3): botão "Ver estudos de caso" quando a seção existir. */}
          {cv && (
            <ButtonLink variant="primary" href={cv} download>
              Baixar currículo (PDF)
            </ButtonLink>
          )}
          <ButtonLink variant={cv ? 'secondary' : 'primary'} href={linkedin} external>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={github} external>
            GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
