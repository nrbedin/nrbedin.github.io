import { Section } from '../components/Section'
import { certificates, degrees, languages } from '../content/education'
import styles from './Education.module.css'

export function Education() {
  return (
    <Section id="formacao" title="Formação e certificados">
      <ul className={styles.degrees}>
        {degrees.map((degree) => (
          <li key={degree.title} className={styles.card}>
            <h3 className={styles.degreeTitle}>{degree.title}</h3>
            <p className={styles.meta}>
              {degree.institution} · {degree.detail}
            </p>
            {degree.description && <p className={styles.description}>{degree.description}</p>}
          </li>
        ))}
      </ul>

      <div className={styles.columns}>
        <div>
          <h3 className={styles.subheading}>Certificados e cursos</h3>
          <ul className={styles.list}>
            {certificates.map((cert) => (
              <li key={cert.title}>
                <span className={styles.itemTitle}>{cert.title}</span>
                <span className={styles.itemMeta}>
                  {cert.issuer}
                  {cert.date && ` · ${cert.date}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subheading}>Idiomas</h3>
          <ul className={styles.list}>
            {languages.map((lang) => (
              <li key={lang.name}>
                <span className={styles.itemTitle}>{lang.name}</span>
                <span className={styles.itemMeta}>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
