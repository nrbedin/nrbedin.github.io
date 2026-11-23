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
      'Impressão do comprovante em impressoras POS integradas ao terminal, com tratamento de erro antes de liberar a venda.',
      'Operação observável: logs estruturados por gateway e um relatório operacional, para diagnosticar falhas em campo sem acesso físico ao terminal.',
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
    id: 'white-label',
    title: 'Uma base de código, muitos apps nas lojas',
    variant: 'full',
    context:
      'Uma plataforma de varejo oferece a cada cliente um aplicativo próprio, com a marca dele, publicado na Google Play e na App Store.',
    challenge:
      'Manter um app por cliente sem multiplicar código, e manter todos atualizados e aprovados nas duas lojas, que mudam de exigência com frequência.',
    approach: [
      'Uma única base Flutter, com um flavor por cliente: identidade visual, ícones, nome, ambientes e identificadores de loja.',
      'Builds AAB (Android) e IPA (iOS) automatizados com Makefile e um pipeline no Codemagic que percorre a lista de flavors.',
      'No iOS: configuração por flavor no Xcode e notificações push com Firebase e Notification Service Extension.',
    ],
    decisions: [
      'Tudo o que muda de um cliente para outro é configuração, não código: corrigir um bug corrige todos os apps de uma vez.',
      'Tratar a adequação às lojas como trabalho contínuo, por exemplo o suporte a páginas de memória de 16 KB exigido pela Google Play.',
    ],
    result:
      'Publicar o app de um novo cliente passou a ser configuração e pipeline, e não um projeto novo.',
    technologies: [
      'Flutter',
      'Flavors',
      'Android',
      'iOS',
      'Xcode',
      'Codemagic',
      'Makefile',
      'Firebase',
    ],
    diagram: 'whitelabel',
  },
  {
    id: 'facial',
    title: 'Reconhecimento facial sem nuvem',
    variant: 'full',
    context:
      'Reconhecimento facial em tempo real num tablet Android de baixo custo que fica sozinho, em modo kiosk.',
    challenge:
      'Reconhecer rostos com rapidez e sem depender de internet, impedir fraude com foto e manter o aparelho funcionando sem ninguém por perto.',
    approach: [
      'Tudo on-device: Google ML Kit para detectar o rosto e TensorFlow Lite para gerar e comparar embeddings.',
      'Prova de vida por desafios (piscar, sorrir e virar a cabeça), com cálculo geométrico de ângulos e conversão de coordenadas entre câmera e tela.',
      'Pipeline de câmera ajustado para hardware modesto: throttling de frames, foco e exposição automáticos e calibração de limiares.',
      'Monitoramento de saúde do aparelho (status, permissões e timeouts), coberto por testes automatizados, mais logs estruturados.',
    ],
    decisions: [
      'Processar no aparelho em vez de na nuvem: menor latência, funciona sem rede e a imagem do rosto não sai do dispositivo.',
      'Desafios de prova de vida em vez de uma foto única, para dificultar fraude com imagem impressa ou em tela.',
      'Projetar para o aparelho se recuperar sozinho: modo kiosk, comportamento definido sem rede e diagnóstico remoto pelos logs.',
    ],
    technologies: [
      'Flutter',
      'Google ML Kit',
      'TensorFlow Lite',
      'Visão computacional',
      'Modo kiosk',
      'Testes automatizados',
    ],
    diagram: 'facial',
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
]
