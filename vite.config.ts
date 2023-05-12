import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

import { resolve, dirname } from "node:path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      // { find: 'vue-i18n', replacement: 'vue-i18n/dist/vue-i18n.cjs.js' }
    ]
  },
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [path.resolve(__dirname, 'src/assets/styl/global.styl')]
      }
    }
  }
})

