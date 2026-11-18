# Briefing — Novo portfólio nrbedin.github.io

> Documento vivo: atualizar a cada fase. Última revisão: 18/11/2026.

> **Para o Claude Code:** este arquivo é a especificação completa do novo portfólio da Naiara Bedin. Leia tudo antes de começar. Trabalhe **por fases** (seção 9) e pare ao fim de cada uma para revisão. Use **somente** os fatos deste documento: não invente números, clientes, empresas, nomes de produto ou resultados. Onde faltar informação, deixe `TODO:` visível e avise.

---

## 1. Objetivo

Substituir o portfólio atual (Flutter Web, título "Desenvolvedora Front End") por um site rápido, acessível e indexável, alinhado ao novo posicionamento:

**Desenvolvedora de Software · Pagamentos TEF/POS · Android · IoT**

O portfólio precisa responder em 30 segundos a três perguntas de um recrutador técnico:

1. O que ela faz de diferente? → conecta apps a pagamentos, terminais Smart POS e hardware.
2. Ela sabe mesmo? → estudos de caso com arquitetura e decisões técnicas.
3. Dá para ver código? → projetos públicos no GitHub, com README e testes.

O próprio site também é prova técnica: React + TypeScript, deploy automatizado, boa nota no Lighthouse.

---

## 2. Situação atual (levantada em 03/11/2026)

**Site:** Flutter Web renderizado em canvas, o que deixa o texto ilegível para buscadores e leitores de tela. Título "Desenvolvedora Front End" e imagem de cabeçalho gerada por IA. Tem quatro botões: Sobre, Habilidades, Experiências e Projetos.

**Projetos exibidos hoje e repositórios públicos em github.com/nrbedin:**

| Repositório                   | O que é                                                                                                                                                                              | Destino no novo site                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `deliverybida`                | Backoffice de pedidos de delivery em Flutter Web: MVC com Repository/Service, Flutter Modular e MobX                                                                                 | Projetos de estudo                                               |
| `ohmydog`                     | App para petshop com agendamento de serviços: Flutter, Modular e MobX                                                                                                                | Projetos de estudo                                               |
| `lojaVirtual`                 | App de e-commerce de fast food: login, carrinho e status de entrega                                                                                                                  | Projetos de estudo                                               |
| `portfolio_nrbedin`           | `TODO:` confirmar se é cópia duplicada do código-fonte                                                                                                                               | Arquivar (manter público como histórico)                         |
| `nrbedin.github.io`           | Na `main`: código-fonte Flutter completo. Na `gh-pages`: build publicado (`npm run deploy` = `flutter build web` + pacote `gh-pages`). Pages hoje usa a branch `gh-pages` como fonte | **Será substituído pelo novo site**                              |
| `intl_phone_number_countries` | Pacote Dart de parsing de número de telefone internacional (licença MIT)                                                                                                             | `TODO:` Naiara confirma se é autoral ou derivado antes de exibir |

Os três projetos de estudo ficam visíveis, mas numa seção secundária e honesta ("Projetos de estudo"), porque vieram de cursos. Os destaques passam a ser os estudos de caso e os novos projetos da seção 6.

**GitHub, bio do perfil:** hoje diz "Flutter | Dart | Mobile | SQL | Qualidade de Software | Delphi". Trocar por: `Desenvolvedora de Software · Pagamentos TEF/POS · Android · IoT`.

---

## 3. Regras de confidencialidade (obrigatórias)

1. **Nenhum nome interno** de produto, sistema, cliente ou empresa parceira. O nome da empregadora **não aparece** no site (nem na experiência). Descrever só o tipo de trabalho, de forma genérica.
2. **Nenhum código, trecho, print ou diagrama real** dos sistemas da empresa. Os estudos de caso descrevem problema, abordagem e decisões de forma genérica, com diagramas próprios e simplificados.
3. **Projetos novos são escritos do zero**, com SDKs e hardware **simulados**. Nada copiado ou adaptado do código da empresa.
4. **Não mencionar** projeto de rastreabilidade/secagem nem agroindústria. Integração com Mercado Pago: não mencionar.
5. **Sem métricas internas** (número de clientes, lojas, equipamentos, faturamento).
6. Nada de detalhes de segurança dos dispositivos: credenciais, chaves, protocolos proprietários em nível de byte.

---

## 4. Stack e infraestrutura

- **React + Vite + TypeScript** (modo strict), site estático de página única com âncoras.
- **Estilo:** CSS Modules (decidido). Sem bibliotecas de componentes pesadas.
- **Fontes:** hospedadas no próprio site (ex.: `@fontsource`), sem Google Fonts em runtime.
- **SEO:** avaliar pré-renderização do HTML no build (Fase 5).
- **Conteúdo em arquivos de dados** (`src/content/*.ts`), separado dos componentes, para que a Naiara edite textos sem mexer em JSX.
- **Diagramas:** SVG próprios, inline ou em `public/diagrams/`. Não usar Mermaid em runtime.
- **Deploy:** GitHub Actions com o workflow oficial do Pages (`actions/upload-pages-artifact` + `actions/deploy-pages`). Em _Settings → Pages → Source_, selecionar **GitHub Actions**. Como é site de usuário, usar `base: '/'` no Vite.
- **Qualidade:** ESLint + Prettier, `tsc --noEmit` no CI, um teste de fumaça com Vitest + Testing Library.
- **Sem rastreadores de terceiros.** Se quiser métricas, usar uma ferramenta sem cookies e só depois de decidir.

### Estrutura sugerida

```
nrbedin.github.io/
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ cv/Curriculo_Naiara_Bedin.pdf
│  ├─ diagrams/
│  ├─ og-image.png          (1200×630)
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ content/              (perfil, casos, projetos, experiência, formação)
│  ├─ components/
│  ├─ sections/             (Hero, Casos, Projetos, Experiencia, Formacao, Contato)
│  ├─ styles/
│  └─ main.tsx
├─ index.html
└─ README.md
```

### Migração do repositório

1. ✅ Branch `legacy-flutter` criada a partir da `main` (04/11/2026), preservando o código-fonte Flutter completo.
2. ✅ Na `main`, remover o projeto Flutter (`lib/`, `android/`, `ios/`, `build/`, `.dart_tool/` etc., que hoje estão versionados) e o script `gh-pages` do `package.json`, e criar o projeto Vite.
3. Configurar o Pages para GitHub Actions (hoje a fonte é a branch `gh-pages`) e validar o deploy.
4. Depois do deploy novo validado, apagar a branch `gh-pages` (o build antigo pode ser regenerado a partir da `legacy-flutter`).
5. Atualizar o README de `portfolio_nrbedin` com uma nota: "Versão anterior do portfólio (Flutter Web). Versão atual: nrbedin.github.io".

---

## 5. Conteúdo do site

Idioma: **português (pt-BR)**. A versão em inglês fica para depois, mas o conteúdo deve ficar em arquivos que permitam adicionar i18n.

### 5.1 Hero (topo)

- **Nome:** Naiara Bedin
- **Título:** Desenvolvedora de Software · Pagamentos TEF/POS · Android · IoT
- **Proposta de valor:** Desenvolvo software que conecta aplicativos ao mundo físico: maquininhas de cartão, totens de autoatendimento, lockers inteligentes e dispositivos IoT, com o pagamento funcionando de ponta a ponta.
- **Botões:** Ver estudos de caso · Baixar currículo (PDF) · LinkedIn · GitHub
- **Imagem:** foto profissional real (`TODO:` Naiara fornece) ou nenhuma imagem. Não usar ilustração gerada por IA.

### 5.2 Sobre (curto)

> Atuo com Flutter e Dart para Android e iOS, código nativo Android em Java e automações em Node.js, do levantamento de requisitos e da arquitetura até a publicação nas lojas e a sustentação em produção.
>
> Antes do desenvolvimento, passei por suporte técnico e 9 anos de qualidade de software. Por isso penso no que pode quebrar antes de ir para produção, e entrego software testável e bem documentado.
>
> Graduada em Ciência da Computação e pós-graduada em Arquitetura de Software.

Abaixo, quatro "chips" de especialidade: **Pagamentos e Smart POS** · **Android nativo** · **Hardware e IoT** · **Visão computacional on-device**.

### 5.3 Estudos de caso (destaque principal)

Cada estudo de caso tem: contexto → desafio → abordagem (com diagrama) → decisões técnicas → resultado → tecnologias. Textos genéricos, sem nomes internos.

#### Caso 1 — Um app, vários meios de pagamento

**Contexto.** Um app Flutter de autoatendimento roda em terminais Android POS de diferentes fabricantes, e cada terminal fala com um adquirente diferente por meio de um SDK nativo próprio.

**Desafio.** Cada SDK tem fluxo, callbacks e códigos de resposta próprios. Duplicar a regra de negócio por fabricante tornaria o app impossível de manter.

**Abordagem.**

- Uma camada de abstração em Dart define o contrato comum: pagar, cancelar, reimprimir e consultar.
- Cada adquirente é um adaptador. O app escolhe o adaptador por _flavor_ de build, e o mesmo código de checkout atende todos os terminais suportados.
- Os adaptadores falam com plugins nativos escritos em **Java**, via Platform Channels: MethodChannel para comandos e EventChannel para eventos em tempo real.
- Builds por fabricante automatizados com Makefiles e atualização remota via OTA.

**Diagrama (desenhar em SVG):**

```
[Tela de checkout (Flutter)]
        │
[Contrato PaymentGateway (Dart)]
   ├── Adaptador A ── MethodChannel/EventChannel ── Plugin Java ── SDK do adquirente A
   ├── Adaptador B ── ...                                      ── SDK do adquirente B
   └── Adaptador C ── ...                                      ── SDK do adquirente C
```

**Decisões técnicas.**

- Contrato pequeno e estável, com variações de cada SDK contidas no adaptador.
- Fila offline de retentativa de pagamentos (SQLite) para resiliência quando a rede cai.
- Modo kiosk com inicialização automática, validação de operador e tratamento global de exceções, para o terminal se recuperar sozinho.

**Resultado.** Aplicativo homologado em marketplace de terminais POS, após um plano de testes cobrindo comunicação, débito, crédito, PIX, reimpressão, cancelamento e envio de trace. (Genérico: sem nome do marketplace, do cliente ou da empresa.)

**Tecnologias:** Flutter · Dart · Java · Platform Channels · TEF · PIX · Makefiles · Shorebird

> Nomes de fabricantes e SDKs (Clover, SiTef, Gertec etc.) aparecem só na seção 5.7 como habilidades, nunca associados a este caso, para não identificar o produto.

#### Caso 2 — Abrir um armário a partir do celular

**Contexto.** Lockers inteligentes para guardar e retirar objetos, controlados por um app Flutter em modo kiosk e também remotamente.

**Desafio.** As travas ficam em controladoras ligadas por porta serial, em barramento compartilhado. Comandos simultâneos colidem, e o comando remoto precisa funcionar mesmo com conexão instável.

**Abordagem.**

- Comunicação serial UART por plugin nativo Android (Java) com uma ponte JNI/C.
- Fila half-duplex por porta serial e limpeza de buffer, para que só um comando trafegue por vez no barramento.
- Controle remoto via MQTT (publish/subscribe), com autenticação por token do dispositivo e reconexão automática.

**Diagrama (desenhar em SVG):**

```
[App Flutter (kiosk)] ── MethodChannel ── [Plugin Java] ── JNI/C ── UART ── [Controladoras de trava]
        ▲
        └── MQTT ── [Broker] ── [Comando remoto]
```

**Decisões técnicas.** Serializar o acesso ao barramento em vez de tentar paralelizar; tratar estado desconhecido da célula como estado de primeira classe (aberta, fechada ou desconhecida).

**Tecnologias:** Flutter · Java · JNI/C · UART · MQTT · IoT · modo kiosk

#### Caso 3 (cartão menor) — Reconhecimento facial sem nuvem

Reconhecimento facial em tempo real 100% on-device, com prova de vida por desafios (piscar, sorrir, virar a cabeça). Usa Google ML Kit para detecção e TensorFlow Lite para embeddings, com pipeline de câmera otimizado para tablets Android de baixo custo.
**Tecnologias:** Flutter · Google ML Kit · TensorFlow Lite · visão computacional

### 5.4 Projetos

Duas subseções:

**Projetos em destaque:** os novos projetos públicos da seção 6. Cada cartão traz nome, uma frase, stack, links (repositório e demo) e um selo de status. Projeto ainda não publicado **não aparece**; usar a flag `published: false` no arquivo de dados. Se nenhum projeto estiver publicado, a subseção inteira fica oculta.

**Projetos de estudo:** Delivery Bida, OhMyDog e Loja Virtual, em cartões compactos com link para o GitHub. Subtítulo da seção: "Projetos desenvolvidos durante a formação em Flutter."

### 5.5 Experiência (linha do tempo enxuta)

Sem nome de empresa. Cabeçalho do bloco: "Empresa de tecnologia — soluções de autoatendimento e pagamentos" (fev/2011 – atual).

- **Analista Desenvolvedora Flutter** — nov/2023 – atual: pagamentos TEF/POS multi-gateway, Android nativo, IoT, visão computacional e automação com Node.js e MCP.
- **Analista de Qualidade de Software** — jul/2014 – nov/2023: testes, requisitos e qualidade de um ERP. Em paralelo, de jul/2015 a fev/2023, rotinas de importação de dados em Delphi.
- **Analista de Suporte de TI** — fev/2011 – jul/2014.

Botão "Currículo completo (PDF)".

### 5.6 Formação e certificados

- Pós-graduação Lato Sensu em Arquitetura de Software — Faculdade Unyleya, 360h, concluída em 2026
- Bacharelado em Ciência da Computação — UNIP, 2012
- Certificados: Back-end com Dart/Shelf (2025) · Jornada Flutter (2024) · Jornada Dart (2024) · Dart Week (2024), todos pela Academia do Flutter

### 5.7 Tecnologias (agrupadas, nunca em lista solta)

| Grupo                    | Itens                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------- |
| Mobile                   | Flutter, Dart, Java (Android nativo), Platform Channels, Clean Architecture, MobX, Flutter Modular |
| Pagamentos               | TEF, Smart POS, PIX, Clover SDK, SiTef, Stone, PagSeguro, Elgin                                    |
| Hardware e IoT           | UART, JNI/C, Bluetooth LE, MQTT, modo kiosk                                                        |
| Back-end e web           | Node.js, TypeScript, Fastify, React, PostgreSQL, Prisma                                            |
| Cloud e entrega          | Google Cloud, Firebase, AWS S3, GitHub Actions, Docker                                             |
| IA e visão computacional | MCP, Google ML Kit, TensorFlow Lite                                                                |

### 5.8 Contato

E-mail (nrbedin@gmail.com), LinkedIn (linkedin.com/in/naiara-bedin) e GitHub (github.com/nrbedin). **Sem formulário** e **sem telefone**.

---

## 6. Novos projetos públicos (repositórios separados)

Cada projeto é um repositório próprio, com README completo (o quê, por quê, arquitetura em diagrama, como rodar, decisões, limitações), testes automatizados e workflow de CI. Ordem revisada: começar pelo `pix_brcode` (1 fim de semana) para ter um projeto publicado cedo; depois `pos-checkout-kit` e `iot-sensor-dashboard`.

### 6.1 `pos-checkout-kit` — Kit de checkout multi-gateway em Flutter ⭐ prioridade 1

Demonstra o diferencial central sem expor nada da empresa.

- App Flutter de checkout com uma camada `PaymentGateway` e **três adaptadores simulados**, por exemplo `FakeCardGateway`, `FakePixGateway` e `FlakyGateway`, este último com falhas e timeouts aleatórios.
- Um plugin Android em **Java** de verdade, com MethodChannel e EventChannel, que simula um SDK nativo: atraso, callbacks e eventos de status.
- Seleção de adaptador por flavor de build.
- Fila offline de retentativa em SQLite e tela de comprovante.
- Testes: unitários do contrato e dos adaptadores, mais um teste de integração do fluxo de pagamento.
- **Esforço estimado:** 2 a 3 fins de semana.

### 6.2 `iot-sensor-dashboard` — Painel de sensores IoT ⭐ prioridade 2

Prova as competências de back-end e web.

- **Worker** Node.js que publica leituras simuladas via MQTT (Mosquitto). Cenário genérico: estufa ou sala de servidores, com temperatura, umidade e porta aberta/fechada.
- **API** Node.js + TypeScript + Fastify, que assina o MQTT e persiste em PostgreSQL via Prisma, com endpoints REST e WebSocket para tempo real.
- **Dashboard** React + Vite + Mantine com gráficos, histórico e alertas por limite.
- `docker compose up` sobe tudo. Testes com Vitest e CI no GitHub Actions.
- **Opcional:** app Flutter simples consumindo a mesma API, unindo mobile e back-end num só projeto.
- **Esforço estimado:** 3 a 4 fins de semana.

### 6.3 `pix_brcode` — Pacote Dart para PIX (BR Code) ⭐ prioridade 3

Pequeno, útil e ligado a pagamentos.

- Antes de começar: pesquisar pacotes de BR Code já existentes no pub.dev e definir o diferencial.
- Gera e interpreta o payload "copia e cola" do PIX (padrão EMV/BR Code do Banco Central), com cálculo e validação do CRC16.
- 100% testado, documentado e publicável no pub.dev.
- Exemplo em Flutter que gera o QR Code.
- **Esforço estimado:** 1 fim de semana.

### 6.4 Ideia futura: `liveness-demo`

Demonstração pública de detecção facial com prova de vida usando Google ML Kit, escrita do zero. Só depois dos três primeiros.

---

## 7. Direção visual

- **Tom:** técnico, limpo e confiante. Mais "documentação bem feita" do que "landing page de agência".
- **Cores:** base escura em azul-petróleo, mantendo a continuidade com o currículo (`#1F4E5F`), com uma cor de destaque quente para os botões (ex.: coral/laranja) e versão clara (prefers-color-scheme) com o mesmo petróleo como cor principal. Contraste mínimo AA.
- **Tipografia:** uma sans legível para textos (ex.: Inter ou IBM Plex Sans) e uma mono para rótulos técnicos e stacks (ex.: JetBrains Mono). Carregar só os pesos usados.
- **Layout:** página única, largura máxima de ~1100px, menu fixo com âncoras, estudos de caso em blocos largos com diagrama ao lado do texto (empilhados no celular).
- **Movimento:** discreto. Transições curtas e respeito a `prefers-reduced-motion`.
- **Diagramas:** traço fino, poucas cores, legíveis no claro e no escuro.

---

## 8. Requisitos não funcionais (critérios de pronto)

- [ ] Lighthouse ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO (mobile)
- [ ] HTML semântico, `lang="pt-BR"`, títulos em ordem, foco visível, navegação por teclado
- [ ] `<title>`, meta description, Open Graph e Twitter Card com `og-image.png`
- [ ] JSON-LD `Person` (nome, cargo, sameAs: LinkedIn e GitHub)
- [ ] `sitemap.xml` e `robots.txt`
- [ ] Funciona de 360px a 1440px sem rolagem horizontal
- [ ] PDF do currículo em `public/cv/`, com link funcionando
- [ ] Deploy automático a cada push na `main`
- [ ] README do repositório explica stack, como rodar e como editar o conteúdo

---

## 9. Plano de execução por fases

**Fase 1 — Base.** ✅ _Concluída em 18/11/2026 (PR #1). Site no ar via GitHub Actions._ Criar a branch `legacy-flutter`, montar o projeto Vite + TS, lint, workflow de deploy e uma página "em construção". Validar que o Pages publica. ⏸ _Parar para revisão._

**Fase 2 — Conteúdo e layout.** 🟡 _Em revisão (branch `feat/fase-2-conteudo`): menu fixo, Hero, Sobre, Experiência, Formação, Tecnologias, Contato, tema claro/escuro com botão, link "pular para o conteúdo". Botões de currículo e e-mail ficam ocultos até os campos `cv` e `email` serem preenchidos em `src/content/profile.ts`._ Hero, Sobre, Experiência, Formação, Tecnologias e Contato, com o conteúdo vindo de `src/content`. Tema claro e escuro. ⏸ _Parar para revisão._

**Fase 3 — Estudos de caso.** Os três casos, com diagramas SVG. ⏸ _Parar para revisão._

**Fase 4 — Projetos.** Cartões de projetos de estudo e estrutura dos projetos em destaque, com `published: false` até cada repositório existir.

**Fase 5 — Polimento.** SEO, Open Graph, JSON-LD, sitemap, acessibilidade, Lighthouse e README.

**Depois:** cada projeto da seção 6 num repositório próprio. Ao publicar, trocar a flag para `published: true` no portfólio.

---

## 10. Pendências da Naiara

- [ ] Foto profissional (ou decidir ficar sem foto)
- [ ] Confirmar a origem do `intl_phone_number_countries`
- [ ] Confirmar se o reconhecimento facial (Caso 3) é produto da empresa; se for, aplicar as mesmas regras do Caso 1
- [ ] Preencher o e-mail de contato em `src/content/profile.ts` (campo `email`)
- [ ] Decidir se o PDF do currículo público mantém o telefone
- [ ] Confirmar se `portfolio_nrbedin` é cópia duplicada deste repositório
- [ ] Confirmar que Cursor e GitHub usados são da conta **pessoal**
- [ ] Exportar o PDF do currículo completo para `public/cv/`
- [ ] Atualizar a bio do GitHub
