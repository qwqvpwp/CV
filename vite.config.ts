import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CV/',
  plugins: [react()],
  publicDir: 'data',
  build: {
    assetsInlineLimit: 0,
  },
})