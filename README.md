# nrbedin.github.io

Portfólio de **Naiara Bedin**, desenvolvedora de software: Flutter (Android e iOS), pagamentos TEF/POS e IoT.

**Site:** https://nrbedin.github.io

O próprio site também serve como amostra técnica: React + TypeScript, HTML pré-renderizado no build, testes, CI e deploy automatizado.

## Stack

- **React 19 + Vite + TypeScript** (modo strict), página única com âncoras
- **CSS Modules**, sem biblioteca de componentes; tema claro e escuro (segue o sistema e tem botão)
- **Fontes hospedadas no próprio site** (Inter e JetBrains Mono, via Fontsource), sem chamadas a terceiros
- **Diagramas em SVG** próprios, como componentes React, que seguem o tema e têm descrição acessível
- **Pré-renderização:** o build gera o HTML completo da página (`src/entry-server.tsx` + `scripts/prerender.mjs`); no navegador o React só hidrata
- **Qualidade:** ESLint (com regras de acessibilidade), Prettier, `tsc` e testes com Vitest + Testing Library
- **SEO:** meta tags, Open Graph/Twitter Card (`public/og-image.png`), JSON-LD `Person`, `sitemap.xml` e `robots.txt`
- **Sem rastreadores** nem cookies

Lighthouse (celular, 23/11/2026): Performance 98 · Acessibilidade 100 · Boas práticas 100 · SEO 100.

## Como rodar

Requer Node.js 20.19+ (recomendado 24).

```bash
npm install
npm run dev           # servidor local em http://localhost:5173
npm test              # testes
npm run lint          # lint
npm run typecheck     # checagem de tipos
npm run format        # formata com Prettier
npm run build         # build de produção pré-renderizado em dist/
npm run preview       # serve o build em http://localhost:4173
```

## Como editar o conteúdo

Todo o texto fica em `src/content/`. Não é preciso mexer nos componentes:

| Arquivo         | Conteúdo                                                                   |
| --------------- | -------------------------------------------------------------------------- |
| `profile.ts`    | Nome, título, apresentação, Sobre, especialidades e links                  |
| `cases.ts`      | Estudos de caso (o diagrama de cada um fica em `src/components/diagrams/`) |
| `projects.ts`   | Projetos em destaque (`published: true` para exibir) e de estudo           |
| `experience.ts` | Linha do tempo profissional                                                |
| `education.ts`  | Formação, certificados e idiomas                                           |
| `skills.ts`     | Tecnologias agrupadas                                                      |
| `navigation.ts` | Itens do menu                                                              |

Ao mudar o título ou a descrição, atualize também as meta tags e o JSON-LD em `index.html` e, se fizer sentido, a imagem `public/og-image.png`.

## Deploy

O workflow `.github/workflows/deploy.yml` roda formatação, lint, tipos, testes e build em todo pull request. A cada push na `main`, publica o site no GitHub Pages.

## Histórico

A versão anterior do portfólio (Flutter Web) está preservada na branch `legacy-flutter`.
