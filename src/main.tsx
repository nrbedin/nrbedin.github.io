import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter/wght.css'
import '@fontsource/jetbrains-mono/500.css'
import './styles/global.css'
import { App } from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Elemento #root não encontrado')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Em produção o HTML já vem pré-renderizado (scripts/prerender.mjs): só hidrata.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
