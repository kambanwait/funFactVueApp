import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],
  server: {
    proxy: {
      '/.netlify/functions/funfactapi': {
        target: 'https://fun-fact.netlify.app/.netlify/functions/funfactapi',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
