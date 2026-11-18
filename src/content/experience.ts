import type { ExperienceGroup } from './types'

// Regra: não citar o nome da empresa, clientes ou parceiros (ver docs/BRIEFING.md, seção 3).
export const experience: ExperienceGroup[] = [
  {
    organization: 'Empresa de tecnologia — soluções de autoatendimento e pagamentos',
    period: 'fev/2011 – atual',
    roles: [
      {
        role: 'Analista Desenvolvedora Flutter',
        period: 'nov/2023 – atual',
        summary:
          'Pagamentos TEF/POS multi-gateway, Android nativo, IoT, visão computacional e automação com Node.js e MCP.',
      },
      {
        role: 'Analista de Qualidade de Software',
        period: 'jul/2014 – nov/2023',
        summary: 'Testes, requisitos e qualidade de um ERP.',
        notes: ['Em paralelo, de jul/2015 a fev/2023, rotinas de importação de dados em Delphi.'],
      },
      {
        role: 'Analista de Suporte de TI',
        period: 'fev/2011 – jul/2014',
      },
    ],
  },
]
