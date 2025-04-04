import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),//定义了一个别名@指定到src目录 
        vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
  
})
