export interface Link {
  label: string
  href: string
}

export interface HighlightArea {
  title: string
  items: string[]
}

export interface ExperienceRole {
  role: string
  period: string
  summary?: string
  /** Tópicos soltos (cargos mais simples). */
  bullets?: string[]
  /** Tópicos agrupados por área (cargo atual). */
  areas?: HighlightArea[]
}

export interface ExperienceGroup {
  organization: string
  period: string
  roles: ExperienceRole[]
}

export interface Degree {
  title: string
  institution: string
  detail: string
  description?: string
}

export interface Certificate {
  title: string
  issuer: string
  date: string
}

export interface Language {
  name: string
  level: string
}

export interface SkillGroup {
  group: string
  items: string[]
}

export type DiagramId = 'payments' | 'lockers'

export interface CaseStudy {
  id: string
  title: string
  /** 'full' = bloco largo com diagrama; 'compact' = cartão menor. */
  variant: 'full' | 'compact'
  context: string
  challenge?: string
  approach?: string[]
  decisions?: string[]
  result?: string
  technologies: string[]
  diagram?: DiagramId
}
