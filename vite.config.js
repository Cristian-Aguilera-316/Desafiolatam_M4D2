import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Desafiolatam_M4D2/',
  build: {
    outDir: 'docs'
  }
})