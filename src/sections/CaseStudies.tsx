import type { ReactNode } from 'react'
import { FacialDiagram } from '../components/diagrams/FacialDiagram'
import { LockersDiagram } from '../components/diagrams/LockersDiagram'
import { PaymentsDiagram } from '../components/diagrams/PaymentsDiagram'
import { WhiteLabelDiagram } from '../components/diagrams/WhiteLabelDiagram'
import { Section } from '../components/Section'
import { cases } from '../content/cases'
import type { CaseStudy, DiagramId } from '../content/types'
import styles from './CaseStudies.module.css'

const diagrams: Record<DiagramId, () => ReactNode> = {
  payments: PaymentsDiagram,
  lockers: LockersDiagram,
  whitelabel: WhiteLabelDiagram,
  facial: FacialDiagram,
}

function Technologies({ items }: { items: string[] }) {
  return (
    <ul className={styles.tags} aria-label="Tecnologias">
      {items.map((item) => (
        <li key={item} className={styles.tag}>
          {item}
        </li>
      ))}
    </ul>
  )
}

function FullCase({ study, index }: { study: CaseStudy; index: number }) {
  const Diagram = study.diagram ? diagrams[study.diagram] : null
  return (
    <article
      id={`caso-${study.id}`}
      className={styles.full}
      aria-labelledby={`caso-${study.id}-titulo`}
    >
      <p className={styles.number}>Caso {index + 1}</p>
      <h3 id={`caso-${study.id}-titulo`} className={styles.title}>
        {study.title}
      </h3>
      <div className={styles.layout}>
        <div className={styles.text}>
          <h4 className={styles.label}>Contexto</h4>
          <p>{study.context}</p>
          {study.challenge && (
            <>
              <h4 className={styles.label}>Desafio</h4>
              <p>{study.challenge}</p>
            </>
          )}
          {study.approach && (
            <>
              <h4 className={styles.label}>Abordagem</h4>
              <ul className={styles.list}>
                {study.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {study.decisions && (
            <>
              <h4 className={styles.label}>Decisões técnicas</h4>
              <ul className={styles.list}>
                {study.decisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {study.result && (
            <>
              <h4 className={styles.label}>Resultado</h4>
              <p className={styles.result}>{study.result}</p>
            </>
          )}
          <Technologies items={study.technologies} />
        </div>
        {Diagram && (
          <figure className={styles.figure}>
            <Diagram />
            <figcaption className={styles.caption}>
              Diagrama simplificado, feito para este portfólio.
            </figcaption>
          </figure>
        )}
      </div>
    </article>
  )
}

function CompactCase({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article
      id={`caso-${study.id}`}
      className={styles.compact}
      aria-labelledby={`caso-${study.id}-titulo`}
    >
      <p className={styles.number}>Caso {index + 1}</p>
      <h3 id={`caso-${study.id}-titulo`} className={styles.title}>
        {study.title}
      </h3>
      <p>{study.context}</p>
      <Technologies items={study.technologies} />
    </article>
  )
}

export function CaseStudies() {
  return (
    <Section id="casos" title="Estudos de caso">
      <p className={styles.intro}>
        Problemas reais, contados sem expor código: o contexto, o que estava em jogo e as decisões
        que tomei.
      </p>
      <div className={styles.cases}>
        {cases.map((study, index) =>
          study.variant === 'full' ? (
            <FullCase key={study.id} study={study} index={index} />
          ) : (
            <CompactCase key={study.id} study={study} index={index} />
          ),
        )}
      </div>
    </Section>
  )
}
