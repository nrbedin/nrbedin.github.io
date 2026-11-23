import type { FeaturedProject, StudyProject } from './types'

// Projetos novos (docs/BRIEFING.md, seção 6). Troque `published` para true
// quando o repositório estiver público, com README e testes.
export const featuredProjects: FeaturedProject[] = [
  {
    id: 'intl-phone-number-countries',
    name: 'intl_phone_number_countries',
    description:
      'Campo de telefone internacional para Flutter, publicado no pub.dev: seletor de país, máscara enquanto digita, validação e parsing. Fork do intl_phone_number_input (MIT) que acrescenta o modo somente leitura (readOnly), criado para uma necessidade de produção.',
    stack: ['Dart', 'Flutter', 'dlibphonenumber'],
    repo: 'https://github.com/nrbedin/intl_phone_number_countries',
    pubdev: 'https://pub.dev/packages/intl_phone_number_countries',
    status: 'estável',
    published: true,
  },
  {
    id: 'pix-brcode',
    name: 'pix_brcode',
    description:
      'Pacote Dart que gera e interpreta o payload "copia e cola" do PIX (padrão EMV/BR Code), com cálculo e validação do CRC16.',
    stack: ['Dart', 'Flutter', 'PIX', 'EMV'],
    repo: 'https://github.com/nrbedin/pix_brcode',
    status: 'em evolução',
    published: false,
  },
  {
    id: 'pos-checkout-kit',
    name: 'pos-checkout-kit',
    description:
      'Kit de checkout multi-gateway em Flutter: contrato PaymentGateway, adaptadores simulados e plugin Android em Java com MethodChannel e EventChannel.',
    stack: ['Flutter', 'Dart', 'Java', 'Platform Channels', 'SQLite'],
    repo: 'https://github.com/nrbedin/pos-checkout-kit',
    status: 'em evolução',
    published: false,
  },
  {
    id: 'iot-sensor-dashboard',
    name: 'iot-sensor-dashboard',
    description:
      'Painel de sensores IoT: worker que publica leituras via MQTT, API Fastify com PostgreSQL e WebSocket, e dashboard em React.',
    stack: ['Node.js', 'TypeScript', 'Fastify', 'MQTT', 'PostgreSQL', 'React', 'Docker'],
    repo: 'https://github.com/nrbedin/iot-sensor-dashboard',
    status: 'em evolução',
    published: false,
  },
]

export const studyProjectsIntro = 'Projetos desenvolvidos durante a formação em Flutter.'

export const studyProjects: StudyProject[] = [
  {
    name: 'Delivery Bida',
    description:
      'Backoffice de pedidos de delivery em Flutter Web, com MVC e os padrões Repository e Service.',
    stack: ['Flutter Web', 'Flutter Modular', 'MobX'],
    repo: 'https://github.com/nrbedin/deliverybida',
  },
  {
    name: 'OhMyDog',
    description: 'App para petshop com agendamento de serviços.',
    stack: ['Flutter', 'Flutter Modular', 'MobX'],
    repo: 'https://github.com/nrbedin/ohmydog',
  },
  {
    name: 'Loja Virtual',
    description: 'App de e-commerce de fast food: login, carrinho e status de entrega.',
    stack: ['Flutter', 'Dart'],
    repo: 'https://github.com/nrbedin/lojaVirtual',
  },
]

export function publishedProjects(projects: FeaturedProject[] = featuredProjects) {
  return projects.filter((project) => project.published)
}
