import type { Certificate, Degree, Language } from './types'

export const degrees: Degree[] = [
  {
    title: 'Pós-graduação Lato Sensu em Arquitetura de Software',
    institution: 'Faculdade Unyleya',
    detail: '360h · jan/2026 – out/2026',
    description:
      'Arquitetura e engenharia de requisitos; serviços e microsserviços; nuvem e mobile; modelagem orientada a objetos; DevOps; qualidade, testes e documentação; banco de dados e big data; Scrum.',
  },
  {
    title: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade Paulista (UNIP), Araraquara',
    detail: 'concluído em 2012',
  },
]

export const certificates: Certificate[] = [
  { title: 'Back-end com Dart: Shelf', issuer: 'Academia do Flutter', date: 'jan/2025' },
  { title: 'Jornada Flutter (62h)', issuer: 'Academia do Flutter', date: 'out/2024' },
  { title: 'Dart Week: Fifa World Cup', issuer: 'Academia do Flutter', date: 'set/2024' },
  { title: 'Jornada Dart (28h)', issuer: 'Academia do Flutter', date: 'mai/2024' },
  { title: 'Imersão Dart Week Ed. 10 (14h)', issuer: 'Academia do Flutter', date: '' },
  {
    title: 'Criação de Apps Android, iOS e Web com Flutter (55h)',
    issuer: 'Startto.dev',
    date: '',
  },
  { title: 'Java e Banco de Dados: JDBC, Hibernate e JPA', issuer: 'Globalcode', date: '' },
  { title: 'Delphi 10.2 Berlin (30h)', issuer: 'Udemy', date: '' },
]

export const languages: Language[] = [
  {
    name: 'Inglês',
    level: 'básico a intermediário, com leitura técnica diária (documentação e logs)',
  },
  { name: 'Espanhol', level: 'básico' },
]
