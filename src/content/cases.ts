import type { CaseStudy } from './types'

// Estudos de caso: problema, abordagem e decisões. Diagramas são próprios e simplificados
// (nada de código, prints ou diagramas reais da empresa).
export const cases: CaseStudy[] = [
  {
    id: 'pagamentos',
    title: 'Um app, vários meios de pagamento',
    variant: 'full',
    context:
      'Um app Flutter de autoatendimento roda em terminais Android POS de vários fabricantes (Gertec, Sunmi, Positivo, Tectoy, Clover, Elgin e PagSeguro), e cada adquirente fala com o app por meio de um SDK nativo próprio.',
    challenge:
      'Cada SDK tem fluxo, callbacks e códigos de resposta próprios. Duplicar a regra de negócio por fabricante tornaria o app impossível de manter.',
    approach: [
      'Uma camada de abstração em Dart define o contrato comum: pagar, cancelar, reimprimir e consultar.',
      'Cada adquirente vira um adaptador. O app escolhe o adaptador por flavor de build, e o mesmo código de checkout atende seis hardwares de pagamento (Stone, PagSeguro, Elgin, SiTef, Clover e Gertec).',
      'Os adaptadores falam com plugins nativos escritos em Java via Platform Channels: MethodChannel para comandos e EventChannel para eventos em tempo real.',
      'Builds por fabricante automatizados com Makefiles e atualização remota via OTA (Shorebird).',
    ],
    decisions: [
      'Contrato pequeno e estável: as diferenças de cada SDK ficam contidas no adaptador, não vazam para as telas.',
      'Fila offline de retentativa de pagamentos em SQLite, para o app continuar operando quando a rede cai.',
      'Modo kiosk com inicialização automática, validação de operador e tratamento global de exceções, para o terminal se recuperar sozinho.',
    ],
    result:
      'Aplicativo homologado no marketplace Clover da América Latina, após um plano de 17 sequências de teste: comunicação, débito, crédito, PIX, reimpressão, cancelamento e envio de trace.',
    technologies: [
      'Flutter',
      'Dart',
      'Java',
      'Platform Channels',
      'TEF',
      'PIX',
      'Clover SDK',
      'SiTef',
      'Makefiles',
      'Shorebird',
    ],
    diagram: 'payments',
  },
  {
    id: 'lockers',
    title: 'Comandar travas de lockers no local e a distância',
    variant: 'full',
    context:
      'Lockers inteligentes para guardar e retirar objetos, controlados por um app Flutter em modo kiosk e também remotamente.',
    challenge:
      'As travas ficam em controladoras ligadas por porta serial, num barramento compartilhado. Comandos simultâneos colidem, e o comando remoto precisa funcionar mesmo com conexão instável.',
    approach: [
      'Comunicação serial UART por plugin nativo Android (Java) com uma ponte JNI/C (termios).',
      'Fila half-duplex por porta serial e limpeza de buffer, para que só um comando trafegue por vez no barramento.',
      'Controle remoto via MQTT (publish/subscribe), com autenticação por token do dispositivo e reconexão automática.',
    ],
    decisions: [
      'Serializar o acesso ao barramento em vez de tentar paralelizar: previsível vale mais que rápido quando o comando abre uma porta física.',
      'Tratar o estado desconhecido da célula como estado de primeira classe (aberta, fechada ou desconhecida), em vez de supor que o último comando funcionou.',
    ],
    technologies: ['Flutter', 'Java', 'JNI/C', 'UART', 'MQTT', 'IoT', 'Modo kiosk'],
    diagram: 'lockers',
  },
  {
    id: 'facial',
    title: 'Reconhecimento facial sem nuvem',
    variant: 'compact',
    context:
      'Reconhecimento facial em tempo real 100% on-device, com prova de vida por desafios (piscar, sorrir e virar a cabeça). Usa Google ML Kit para detecção e TensorFlow Lite para embeddings, com pipeline de câmera otimizado para tablets Android de baixo custo.',
    technologies: ['Flutter', 'Google ML Kit', 'TensorFlow Lite', 'Visão computacional'],
  },
]
