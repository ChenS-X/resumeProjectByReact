import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.join(__dirname, 'index.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [react()],
})
