import { Arrow, ArrowMarkers, Box } from './parts'
import styles from './Diagram.module.css'

const M = 'seta-white-label'
const FLAVORS = [
  { x: 15, name: 'Cliente A' },
  { x: 130, name: 'Cliente B' },
  { x: 245, name: 'Cliente C' },
]

export function WhiteLabelDiagram() {
  return (
    <svg
      viewBox="0 0 360 500"
      className={styles.svg}
      role="img"
      aria-labelledby="diagrama-white-label-titulo diagrama-white-label-desc"
    >
      <title id="diagrama-white-label-titulo">Pipeline dos apps white-label</title>
      <desc id="diagrama-white-label-desc">
        Uma única base Flutter gera um flavor por cliente. Um pipeline com Makefile e Codemagic
        produz o AAB para Android e o IPA para iOS de cada flavor, publicados na Google Play e na
        App Store. No totem, a identidade visual de cada cliente vem sem novo build: o app baixa de
        uma CDN na AWS as cores e o logo, valida e guarda em cache.
      </desc>
      <ArrowMarkers id={M} />

      <Box
        x={60}
        y={8}
        w={240}
        h={48}
        accent
        label="Base Flutter única"
        sub="código, testes e telas"
      />
      {FLAVORS.map((f) => {
        const cx = f.x + 50
        return (
          <g key={f.name}>
            <Arrow x1={cx} y1={56} x2={cx} y2={86} marker={M} />
            <Box x={f.x} y={88} w={100} h={46} label={f.name} sub="flavor" />
            <Arrow x1={cx} y1={134} x2={cx} y2={176} marker={M} />
          </g>
        )
      })}
      <Box x={30} y={178} w={300} h={52} label="Pipeline de build" sub="Makefile · Codemagic" />

      <Arrow x1={100} y1={230} x2={100} y2={262} marker={M} />
      <Arrow x1={260} y1={230} x2={260} y2={262} marker={M} />
      <Box x={40} y={264} w={120} h={44} label="AAB" sub="Android" />
      <Box x={200} y={264} w={120} h={44} label="IPA" sub="iOS" />

      <Arrow x1={100} y1={308} x2={100} y2={340} marker={M} />
      <Arrow x1={260} y1={308} x2={260} y2={340} marker={M} />
      <Box x={40} y={342} w={120} h={44} label="Google Play" />
      <Box x={200} y={342} w={120} h={44} label="App Store" />

      <line x1={10} y1={408} x2={350} y2={408} className={styles.boundary} />
      <text x={180} y={428} textAnchor="middle" className={styles.note}>
        sem novo build · totem
      </text>
      <Box x={15} y={440} w={135} h={50} label="CDN (AWS S3)" sub="cores e logo" />
      <Arrow x1={150} y1={465} x2={208} y2={465} marker={M} />
      <Box x={210} y={440} w={135} h={50} accent label="Totem" sub="valida e guarda" />
    </svg>
  )
}
