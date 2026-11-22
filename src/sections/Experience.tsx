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
            {group.organization} <span className={styles.orgPeriod}>· {group.period}</span>
          </p>
          <ol className={styles.timeline}>
            {group.roles.map((item) => (
              <li key={item.role} className={styles.item}>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.period}>{item.period}</p>
                {item.summary && <p className={styles.summary}>{item.summary}</p>}
                {item.bullets && (
                  <ul className={styles.bullets}>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {item.areas && (
                  <div className={styles.areas}>
                    {item.areas.map((area, index) => (
                      <details key={area.title} className={styles.area} open={index === 0}>
                        <summary className={styles.areaTitle}>
                          <span>{area.title}</span>
                          <span className={styles.count}>{area.items.length} tópicos</span>
                        </summary>
                        <ul className={styles.bullets}>
                          {area.items.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                )}
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
