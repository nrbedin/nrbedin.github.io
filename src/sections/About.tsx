import { Section } from '../components/Section'
import { profile } from '../content/profile'
import styles from './About.module.css'

export function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className={styles.text}>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <h3 className="visually-hidden">Especialidades</h3>
      <ul className={styles.chips}>
        {profile.specialties.map((item) => (
          <li key={item} className={styles.chip}>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  )
}
