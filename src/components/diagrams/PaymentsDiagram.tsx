import { Arrow, ArrowMarkers, Box } from './parts'
import styles from './Diagram.module.css'

const COLUMNS = [
  { x: 15, name: 'Stone' },
  { x: 130, name: 'SiTef' },
  { x: 245, name: 'Clover' },
]
const W = 100
const M = 'seta-pagamentos'

export function PaymentsDiagram() {
  return (
    <svg
      viewBox="0 0 360 412"
      className={styles.svg}
      role="img"
      aria-labelledby="diagrama-pagamentos-titulo diagrama-pagamentos-desc"
    >
      <title id="diagrama-pagamentos-titulo">Arquitetura do checkout multi-gateway</title>
      <desc id="diagrama-pagamentos-desc">
        A tela de checkout em Flutter usa um único contrato PaymentGateway em Dart. Cada adquirente
        tem um adaptador, que conversa por MethodChannel e EventChannel com um plugin Java, que por
        sua vez chama o SDK nativo do adquirente.
      </desc>
      <ArrowMarkers id={M} />

      <Box x={60} y={8} w={240} h={44} label="Tela de checkout" sub="Flutter" />
      <Arrow x1={180} y1={52} x2={180} y2={74} marker={M} />
      <Box
        x={30}
        y={76}
        w={300}
        h={56}
        accent
        label="Contrato PaymentGateway"
        sub="pagar · cancelar · reimprimir · consultar"
      />

      {COLUMNS.map((col) => {
        const cx = col.x + W / 2
        return (
          <g key={col.name}>
            <Arrow x1={cx} y1={132} x2={cx} y2={156} marker={M} />
            <Box x={col.x} y={158} w={W} h={44} label={col.name} sub="adaptador" />
            <Arrow x1={cx} y1={202} x2={cx} y2={284} marker={M} />
            <Box x={col.x} y={286} w={W} h={40} label="Plugin Java" />
            <Arrow x1={cx} y1={326} x2={cx} y2={350} marker={M} />
            <Box x={col.x} y={352} w={W} h={44} label={`SDK ${col.name}`} sub="nativo" />
          </g>
        )
      })}

      <line x1={8} y1={244} x2={352} y2={244} className={styles.boundary} />
      <text x={10} y={232} className={styles.note}>
        Dart
      </text>
      <text x={10} y={264} className={styles.note}>
        Android
      </text>
      <rect x={88} y={234} width={184} height={20} rx={10} className={styles.pill} />
      <text x={180} y={248} textAnchor="middle" className={styles.sub}>
        MethodChannel · EventChannel
      </text>
    </svg>
  )
}
