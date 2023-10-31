import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/symbols': {
        target: 'https://api.bitfinex.com/v1/symbols',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/symbols/, ''),
      },
      '/currencies': {
        target: 'https://api.bitfinex.com/v1/pubticker/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/currencies/, ''),
      },
    },
  },
})
