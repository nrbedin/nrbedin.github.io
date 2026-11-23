/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site de usuário do GitHub Pages (nrbedin.github.io) é servido na raiz.
export default defineConfig({
  base: '/',
  define: {
    // Ano fixado no build: o HTML pré-renderizado e o do navegador ficam iguais.
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
})
