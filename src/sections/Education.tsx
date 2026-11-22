import { Section } from '../components/Section'
import { certificates, certificatesIssuer, degrees } from '../content/education'
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
          </li>
        ))}
      </ul>
      <h3 className={styles.subheading}>Certificados · {certificatesIssuer}</h3>
      <ul className={styles.certificates}>
        {certificates.map((cert) => (
          <li key={cert.title}>
            {cert.title} <span className={styles.year}>{cert.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
