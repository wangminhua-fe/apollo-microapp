/*
 * @Author: Marshall
 * @Date: 2022-05-14 16:55:30
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 17:20:58
 * @Description: 
 * @FilePath: /apollo-microapp/packages/app2/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// useDevMode 开启时与热更新插件冲突
const useDevMode = true     // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('app2', { useDevMode })],
  server: {
    open: true,
    host: "0.0.0.0",
    port: 3001,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:80',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})
