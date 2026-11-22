import { Section } from '../components/Section'
import { skills } from '../content/skills'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <Section id="tecnologias" title="Tecnologias">
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.group} className={styles.card}>
            <h3 className={styles.group}>{group.group}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
