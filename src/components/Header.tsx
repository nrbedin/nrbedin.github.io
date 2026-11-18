import { navigation } from '../content/navigation'
import { profile } from '../content/profile'
import { ThemeToggle } from './ThemeToggle'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.brand}>
          {profile.name}
        </a>
        <nav aria-label="Seções" className={styles.nav}>
          <ul className={styles.list}>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
