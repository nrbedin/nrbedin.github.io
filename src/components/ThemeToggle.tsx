import styles from './ThemeToggle.module.css'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function effectiveTheme(): Theme {
  const explicit = document.documentElement.dataset.theme
  if (explicit === 'light' || explicit === 'dark') return explicit
  const prefersLight =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  return prefersLight ? 'light' : 'dark'
}

/**
 * O ícone (sol ou lua) é escolhido só por CSS, a partir de data-theme e do tema do sistema.
 * Assim o HTML pré-renderizado no build é igual ao do navegador.
 */
export function ThemeToggle() {
  function toggle() {
    const next: Theme = effectiveTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Armazenamento indisponível (modo privado etc.): o tema vale só nesta visita.
    }
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar entre tema claro e escuro"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className={`${styles.icon} ${styles.sun}`}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={`${styles.icon} ${styles.moon}`}>
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
    </button>
  )
}
