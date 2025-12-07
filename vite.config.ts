import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    host: 'localhost',
    open: false,  // Não abre navegador automaticamente
    hmr: true,
    watch: {
      usePolling: false
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'primevue/config'],
    exclude: []  // Não exclui nada por padrão
  }
})
