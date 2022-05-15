/*
 * @Author: Marshall
 * @Date: 2022-05-10 07:13:54
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 15:40:56
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:80',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})
