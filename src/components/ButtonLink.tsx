import type { AnchorHTMLAttributes } from 'react'
import styles from './ButtonLink.module.css'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export function ButtonLink({
  variant = 'secondary',
  external = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a className={classes} {...externalProps} {...rest}>
      {children}
      {external && <span className="visually-hidden"> (abre em nova aba)</span>}
    </a>
  )
}
