import { profile } from './content/profile'
import styles from './App.module.css'

export function App() {
  const { email, linkedin, github } = profile.links

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.badge}>Site em construção</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
        <p className={styles.tagline}>{profile.tagline}</p>
        <ul className={styles.links}>
          <li>
            <a className={`${styles.link} ${styles.primary}`} href={linkedin} rel="noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <a className={styles.link} href={github} rel="noopener">
              GitHub
            </a>
          </li>
          {email && (
            <li>
              <a className={styles.link} href={email}>
                E-mail
              </a>
            </li>
          )}
        </ul>
      </div>
    </main>
  )
}
