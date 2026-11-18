import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    group: 'Mobile',
    items: [
      'Flutter',
      'Dart',
      'Java (Android nativo)',
      'Platform Channels',
      'Clean Architecture',
      'MobX',
      'Flutter Modular',
    ],
  },
  {
    group: 'Pagamentos',
    items: ['TEF', 'Smart POS', 'PIX', 'Clover SDK', 'SiTef', 'Stone', 'PagSeguro', 'Elgin'],
  },
  { group: 'Hardware e IoT', items: ['UART', 'JNI/C', 'Bluetooth LE', 'MQTT', 'Modo kiosk'] },
  {
    group: 'Back-end e web',
    items: ['Node.js', 'TypeScript', 'Fastify', 'React', 'PostgreSQL', 'Prisma'],
  },
  {
    group: 'Cloud e entrega',
    items: ['Google Cloud', 'Firebase', 'AWS S3', 'GitHub Actions', 'Docker'],
  },
  { group: 'IA e visão computacional', items: ['MCP', 'Google ML Kit', 'TensorFlow Lite'] },
]
