import { ButtonLink } from '../components/ButtonLink'
import { Section } from '../components/Section'
import { profile } from '../content/profile'
import styles from './Contact.module.css'

export function Contact() {
  const { email, linkedin, github } = profile.links
  return (
    <Section id="contato" title="Contato">
      <p className={styles.text}>
        Quer conversar sobre pagamentos, Android ou IoT? Me encontre nos canais abaixo.
      </p>
      <div className={styles.actions}>
        {email && (
          <ButtonLink variant="primary" href={email}>
            E-mail
          </ButtonLink>
        )}
        <ButtonLink variant={email ? 'secondary' : 'primary'} href={linkedin} external>
          LinkedIn
        </ButtonLink>
        <ButtonLink href={github} external>
          GitHub
        </ButtonLink>
      </div>
    </Section>
  )
}
