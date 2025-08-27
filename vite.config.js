import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {imagetools} from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('skipImagetools')) {
          return new URLSearchParams()
        }

        return new URLSearchParams({
          format: 'avif;webp;png',
          quality: '80'
        })
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
