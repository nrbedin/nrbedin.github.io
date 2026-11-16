# nrbedin.github.io

Portfólio de Naiara Bedin: desenvolvedora de software com foco em pagamentos TEF/POS, Android e IoT.

Site publicado: https://nrbedin.github.io

## Stack

- React + Vite + TypeScript (modo strict)
- CSS Modules, sem biblioteca de componentes
- Fontes hospedadas no próprio site (Inter e JetBrains Mono, via Fontsource)
- ESLint (com regras de acessibilidade), Prettier, Vitest + Testing Library
- Deploy no GitHub Pages via GitHub Actions a cada push na `main`

## Como rodar

Requer Node.js 20.19+ (recomendado 24).

```bash
npm install
npm run dev        # servidor local em http://localhost:5173
npm test           # testes
npm run lint       # lint
npm run typecheck  # checagem de tipos
npm run build      # build de produção em dist/
```

## Como editar o conteúdo

Todo o texto do site fica em `src/content/`. Edite esses arquivos sem mexer nos componentes.

## Histórico

A versão anterior do portfólio (Flutter Web) está preservada na branch `legacy-flutter`.

A especificação completa e o andamento do projeto estão em [docs/BRIEFING.md](docs/BRIEFING.md).
