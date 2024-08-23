import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      provider: 'v8'
    }
  },
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/styles/main.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
