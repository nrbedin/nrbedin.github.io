import type { ExperienceGroup } from './types'

// Fonte: currículo (mesmas informações públicas do LinkedIn).
// Regra: sem código, prints ou números internos (ver docs/BRIEFING.md, seção 3).
export const experience: ExperienceGroup[] = [
  {
    organization: 'Accesys Solutions',
    period: 'fev/2011 – atual',
    roles: [
      {
        role: 'Analista Desenvolvedora Flutter',
        period: 'nov/2023 – atual',
        summary:
          'Desenvolvimento e sustentação de múltiplos produtos Flutter para varejo autônomo e automação comercial (self-checkout, Smart POS, lockers inteligentes, reconhecimento facial e gestão de loja) no ciclo completo: requisitos, arquitetura, desenvolvimento, testes, publicação e suporte em produção.',
        areas: [
          {
            title: 'Pagamentos, TEF e Smart POS',
            items: [
              'Manutenção e evolução de três plugins Flutter de integração nativa (Stone, PagSeguro/PagBank e Fiserv CliSiTef/mSiTef/Clover), com código nativo Android em Java e Platform Channels (MethodChannel/EventChannel), incluindo streaming de eventos em tempo real.',
              'Camada de abstração multi-gateway própria em Flutter Modular: o mesmo app opera com seis hardwares de pagamento (Stone, PagSeguro, Elgin, SiTef, Clover e Gertec GPOS780) por troca de flavor de build, sem duplicar regra de negócio.',
              'Fluxos completos de TEF/PDV: crédito, débito, PIX, voucher, parcelamento, cancelamento por chave de transação e reimpressão, com tratamento de callbacks nativos assíncronos.',
              'Integração com o ecossistema Clover (SDK nativo, SiTef Sales App e Payment Connector): modo kiosk com inicialização automática, validação de operador, protetor de tela por inatividade e tratamento global de exceções.',
              'Homologação de aplicativo no marketplace Clover América Latina, conduzida a partir de um plano de 17 sequências de teste (comunicação, débito, crédito, PIX, reimpressão, cancelamento e envio de trace).',
              'Análise de impacto da descontinuação de um fluxo legado do m-SiTef (biblioteca nativa versus integração por Intent) e interlocução técnica com o suporte do fornecedor.',
              'Distribuição do plugin CliSiTef por branches Git de produção, homologação e desenvolvimento, reduzindo o tamanho do APK e acelerando os builds do time.',
            ],
          },
          {
            title: 'Totem de autoatendimento para lojas autônomas',
            items: [
              'App de checkout self-service para terminais Android POS de diversos fabricantes: Gertec, Sunmi, Positivo, Tectoy, Clover, Elgin e PagSeguro.',
              'Fluxos de loja autônoma: pareamento multi-tenant do dispositivo, identificação de cliente (CPF e OTP via SMS/WhatsApp), carrinho, cupons e pós-venda com acionamento remoto de travas e geladeiras.',
              'Integração com periféricos: leitores de código (USB-HID, câmera e BLE), impressoras POS e travas Bluetooth (ESP32) com protocolo autenticado.',
              'Builds multi-flavor (Flavorizr) por adquirente e fabricante, automação de compilação com Makefiles, atualização remota via OTA (Shorebird) e redesign completo da interface.',
              'Resiliência e observabilidade: sessão em Hive, fila offline de retentativa de pagamentos em SQLite, telemetria, health check e comandos remotos com OpenObserve.',
            ],
          },
          {
            title: 'Lockers e armários inteligentes',
            items: [
              'App de autoatendimento em modo kiosk para guardar e retirar objetos, integrado à API de locação e com sincronização do status de cada célula.',
              'Comunicação serial UART com as controladoras de trava via MethodChannel, plugin nativo Android em Java e JNI/C (termios), com protocolo serial de baixo nível.',
              'Fila half-duplex por porta serial e limpeza de buffer em barramento daisy-chain, orquestradas por um serviço dedicado de controle de travas.',
              'Controle remoto via MQTT (publish/subscribe, autenticação por token do dispositivo e reconexão automática) e internacionalização pt-BR/en-US.',
            ],
          },
          {
            title: 'Reconhecimento facial com prova de vida',
            items: [
              'Reconhecimento facial em tempo real 100% on-device: Google ML Kit para detecção e TensorFlow Lite para gerar e comparar embeddings, sem depender de nuvem.',
              'Prova de vida (liveness) com desafios comportamentais (piscar, sorrir e virar a cabeça), com cálculo geométrico de ângulos e conversão de coordenadas entre câmera e tela.',
              'Pacote Flutter próprio e reutilizável, com API pública configurável e implementações nativas para Android e iOS.',
              'Otimização do pipeline de câmera (throttling de frames, foco e exposição automáticos, calibração de limiares) para tablets Android de baixo custo.',
            ],
          },
          {
            title: 'Gestão operacional de loja e plataformas white-label',
            items: [
              'App de reposição, inventário, controle de vencimentos e ajuste de estoque com Clean Architecture por feature, Flutter Modular e MobX.',
              'Persistência offline-first em SQLite com abstração própria e inserção em lote; APIs REST com Dio (interceptors), json_serializable e tratamento padronizado de exceções.',
              'Testes unitários e de integração (flutter_test e integration_test), flutter_lints e pipeline de build e distribuição com Codemagic.',
              'Aplicativos white-label multi-tenant de varejo com Firebase e Google Cloud.',
            ],
          },
          {
            title: 'Automação, documentação e IA aplicada',
            items: [
              'Pipeline em Node.js que sincroniza diariamente a base de conhecimento entre Google Drive e GitHub, convertendo Docs, DOCX, PDF e PPTX em Markdown versionado, com trilha de auditoria e changelog automático.',
              'Esteira de qualidade em pull requests com GitHub Actions: lint de Markdown, validação de links e revisão de conteúdo por IA (Claude).',
              'Servidor MCP (Model Context Protocol) próprio com índice de busca, consumido por agentes de IA de suporte ao cliente.',
              'Portal técnico em Docusaurus com deploy automatizado no AWS S3 e biblioteca de prompts que padroniza commits, PRs, planejamento técnico e critérios de aceite.',
            ],
          },
        ],
      },
      {
        role: 'Analista de Qualidade de Software',
        period: 'jul/2014 – nov/2023',
        bullets: [
          'Planejamento e execução de testes do ERP próprio e de seus módulos a partir dos requisitos, com foco em integridade e consistência de dados.',
          'Identificação, documentação e acompanhamento de defeitos até a correção; definição de cenários de teste com desenvolvimento e produto.',
          'Documentação de apoio ao desenvolvimento, à implantação de sistemas e ao suporte a clientes.',
        ],
      },
      {
        role: 'Desenvolvimento de Importação de Dados em Delphi',
        period: 'jul/2015 – fev/2023, em paralelo',
        bullets: [
          'Rotinas de importação e migração de dados entre sistemas, com ferramentas próprias para detectar divergências e gerar relatórios de inconsistência.',
        ],
      },
      {
        role: 'Analista de Suporte de TI',
        period: 'fev/2011 – jul/2014',
        bullets: [
          'Diagnóstico de hardware, software e redes, implantação de sistemas, treinamento de usuários e manutenção preventiva.',
        ],
      },
    ],
  },
]
