import { Arrow, ArrowMarkers, Box } from './parts'
import styles from './Diagram.module.css'

const M = 'seta-facial'
const STEPS = [
  { label: 'Câmera', sub: 'throttling de frames' },
  { label: 'Detecção do rosto', sub: 'Google ML Kit' },
  { label: 'Prova de vida', sub: 'piscar · sorrir · virar', accent: true },
  { label: 'Embedding', sub: 'TensorFlow Lite' },
  { label: 'Comparação local', sub: 'rostos cadastrados' },
]
const TOP = 44
const H = 44
const GAP = 22

export function FacialDiagram() {
  return (
    <svg
      viewBox="0 0 360 426"
      className={styles.svg}
      role="img"
      aria-labelledby="diagrama-facial-titulo diagrama-facial-desc"
    >
      <title id="diagrama-facial-titulo">Pipeline de reconhecimento facial on-device</title>
      <desc id="diagrama-facial-desc">
        Todo o processamento acontece no aparelho, sem nuvem: a câmera envia frames com throttling,
        o Google ML Kit detecta o rosto, a prova de vida pede desafios como piscar, sorrir e virar a
        cabeça, o TensorFlow Lite gera o embedding e a comparação é feita localmente com os rostos
        cadastrados. Em paralelo, há monitoramento de saúde do aparelho e logs estruturados.
      </desc>
      <ArrowMarkers id={M} />

      <rect x={8} y={8} width={344} height={378} rx={12} fill="none" className={styles.boundary} />
      <text x={22} y={30} className={styles.note}>
        no aparelho · sem nuvem
      </text>

      {STEPS.map((step, i) => {
        const y = TOP + i * (H + GAP)
        return (
          <g key={step.label}>
            {i > 0 && <Arrow x1={180} y1={y - GAP} x2={180} y2={y - 2} marker={M} />}
            <Box
              x={70}
              y={y}
              w={220}
              h={H}
              label={step.label}
              sub={step.sub}
              accent={step.accent}
            />
          </g>
        )
      })}

      <text x={180} y={410} textAnchor="middle" className={styles.note}>
        saúde do aparelho · logs estruturados · modo kiosk
      </text>
    </svg>
  )
}
