import { ButtonLink } from '../components/ButtonLink'
import { Section } from '../components/Section'
import { experience } from '../content/experience'
import { profile } from '../content/profile'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <Section id="experiencia" title="Experiência">
      {experience.map((group) => (
        <div key={group.organization} className={styles.group}>
          <p className={styles.organization}>
            {group.organization} <span className={styles.period}>· {group.period}</span>
          </p>
          <ol className={styles.timeline}>
            {group.roles.map((item) => (
              <li key={item.role} className={styles.item}>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.period}>{item.period}</p>
                {item.summary && <p className={styles.summary}>{item.summary}</p>}
                {item.notes?.map((note) => (
                  <p key={note} className={styles.note}>
                    {note}
                  </p>
                ))}
              </li>
            ))}
          </ol>
        </div>
      ))}
      {profile.links.cv && (
        <ButtonLink href={profile.links.cv} download>
          Currículo completo (PDF)
        </ButtonLink>
      )}
    </Section>
  )
}
