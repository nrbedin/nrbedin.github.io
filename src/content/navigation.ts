// Itens do menu. O id precisa bater com o id da seção.
export const navigation = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'casos', label: 'Estudos de caso' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'formacao', label: 'Formação' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'contato', label: 'Contato' },
] as const

export type SectionId = (typeof navigation)[number]['id']
