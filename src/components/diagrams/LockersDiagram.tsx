import { Arrow, ArrowMarkers, Box } from './parts'
import styles from './Diagram.module.css'

const M = 'seta-lockers'
const CELLS = [
  { x: 25, label: 'aberta' },
  { x: 135, label: 'fechada' },
  { x: 245, label: 'desconhecida' },
]

export function LockersDiagram() {
  return (
    <svg
      viewBox="0 0 360 426"
      className={styles.svg}
      role="img"
      aria-labelledby="diagrama-lockers-titulo diagrama-lockers-desc"
    >
      <title id="diagrama-lockers-titulo">Arquitetura do controle de lockers</title>
      <desc id="diagrama-lockers-desc">
        O app Flutter em modo kiosk chama, por MethodChannel, um plugin Java que usa uma ponte JNI/C
        para falar por UART com as controladoras de trava, com uma fila half-duplex que deixa passar
        um comando por vez. Comandos remotos chegam ao app por um broker MQTT. Cada célula pode
        estar aberta, fechada ou em estado desconhecido.
      </desc>
      <ArrowMarkers id={M} />

      <Box x={230} y={8} w={120} h={40} label="Comando remoto" />
      <Arrow x1={290} y1={48} x2={290} y2={76} marker={M} />
      <Box x={230} y={78} w={120} h={44} label="Broker MQTT" sub="pub/sub" />
      <text x={290} y={144} textAnchor="middle" className={styles.note}>
        token do dispositivo
      </text>
      <text x={290} y={160} textAnchor="middle" className={styles.note}>
        reconexão automática
      </text>

      <Box x={10} y={78} w={170} h={44} label="App Flutter" sub="modo kiosk" />
      <Arrow x1={228} y1={100} x2={182} y2={100} marker={M} both />
      <text x={205} y={92} textAnchor="middle" className={styles.note}>
        MQTT
      </text>

      <Arrow x1={95} y1={122} x2={95} y2={146} marker={M} />
      <text x={103} y={138} className={styles.note}>
        MethodChannel
      </text>
      <Box x={10} y={148} w={170} h={40} label="Plugin Java" />
      <Arrow x1={95} y1={188} x2={95} y2={210} marker={M} />
      <Box x={10} y={212} w={170} h={40} label="Ponte JNI/C" sub="termios" />
      <Arrow x1={95} y1={252} x2={95} y2={274} marker={M} />
      <Box x={10} y={276} w={170} h={44} accent label="UART" sub="fila half-duplex" />
      <Arrow x1={95} y1={320} x2={95} y2={342} marker={M} />

      <rect x={10} y={344} width={340} height={74} rx={8} className={styles.box} />
      <text x={180} y={364} textAnchor="middle" className={styles.label}>
        Controladoras de trava
      </text>
      {CELLS.map((cell) => (
        <g key={cell.label}>
          <rect
            x={cell.x}
            y={376}
            width={90}
            height={30}
            rx={6}
            className={`${styles.box} ${cell.label === 'desconhecida' ? styles.accent : ''}`}
          />
          <text x={cell.x + 45} y={395} textAnchor="middle" className={styles.sub}>
            {cell.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
