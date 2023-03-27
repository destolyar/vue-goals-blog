import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Разделить все зависимости из node_modules на отдельный чанк
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
        additionalData: `@import "@/assets/main.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true
    }
  }
})