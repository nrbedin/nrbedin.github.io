import styles from './Diagram.module.css'

interface BoxProps {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
  accent?: boolean
}

export function Box({ x, y, w, h, label, sub, accent = false }: BoxProps) {
  const cx = x + w / 2
  const cy = y + h / 2
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        className={accent ? `${styles.box} ${styles.accent}` : styles.box}
      />
      <text x={cx} y={sub ? cy - 3 : cy + 4} textAnchor="middle" className={styles.label}>
        {label}
      </text>
      {sub && (
        <text x={cx} y={cy + 14} textAnchor="middle" className={styles.sub}>
          {sub}
        </text>
      )}
    </g>
  )
}

interface ArrowProps {
  x1: number
  y1: number
  x2: number
  y2: number
  marker: string
  both?: boolean
}

export function Arrow({ x1, y1, x2, y2, marker, both = false }: ArrowProps) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={styles.line}
      markerEnd={`url(#${marker})`}
      markerStart={both ? `url(#${marker}-start)` : undefined}
    />
  )
}

export function ArrowMarkers({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M0,0 L10,5 L0,10 z" className={styles.arrowHead} />
      </marker>
      <marker
        id={`${id}-start`}
        viewBox="0 0 10 10"
        refX="1"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="M10,0 L0,5 L10,10 z" className={styles.arrowHead} />
      </marker>
    </defs>
  )
}
