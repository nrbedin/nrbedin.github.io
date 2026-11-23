import { ButtonLink } from '../components/ButtonLink'
import { Section } from '../components/Section'
import { profile } from '../content/profile'
import styles from './Contact.module.css'

export function Contact() {
  const { email, phone } = profile.contact
  const links = profile.links
  return (
    <Section id="contato" title="Contato">
      <p className={styles.text}>
        Quer conversar sobre pagamentos, apps Android e iOS ou IoT? Fale comigo por qualquer um dos
        canais abaixo.
      </p>
      {(email || phone) && (
        <dl className={styles.details}>
          {email && (
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={links.email}>{email}</a>
              </dd>
            </div>
          )}
          {phone && (
            <div>
              <dt>Telefone</dt>
              <dd>
                <a href={links.phone}>{phone}</a>
              </dd>
            </div>
          )}
        </dl>
      )}
      <div className={styles.actions}>
        {email && (
          <ButtonLink variant="primary" href={links.email}>
            Enviar e-mail
          </ButtonLink>
        )}
        {phone && (
          <ButtonLink href={links.whatsapp} external>
            WhatsApp
          </ButtonLink>
        )}
        <ButtonLink href={links.linkedin} external>
          LinkedIn
        </ButtonLink>
        <ButtonLink href={links.github} external>
          GitHub
        </ButtonLink>
        {links.cv && (
          <ButtonLink href={links.cv} download>
            Currículo (PDF)
          </ButtonLink>
        )}
      </div>
    </Section>
  )
}
