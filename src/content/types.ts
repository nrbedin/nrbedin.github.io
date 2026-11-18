export interface Link {
  label: string
  href: string
}

export interface ExperienceRole {
  role: string
  period: string
  summary?: string
  notes?: string[]
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
}

export interface Certificate {
  title: string
  year: number
}

export interface SkillGroup {
  group: string
  items: string[]
}
