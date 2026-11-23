// Injeta o HTML gerado pelo React no dist/index.html, depois do build.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const indexPath = `${root}dist/index.html`
const ssrEntry = pathToFileURL(`${root}dist-ssr/entry-server.js`).href

const { render } = await import(ssrEntry)
const template = await readFile(indexPath, 'utf8')
const placeholder = '<div id="root"></div>'

if (!template.includes(placeholder)) {
  throw new Error('Marcador <div id="root"></div> não encontrado em dist/index.html')
}

await writeFile(indexPath, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(`${root}dist-ssr`, { recursive: true, force: true })
console.log('Pré-renderização concluída: dist/index.html')
