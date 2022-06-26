/*
 * @Author: Marshall
 * @Date: 2022-05-10 07:13:54
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-26 19:25:47
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { start, registerMicroApps, setDefaultMountApp } from 'qiankun'
import microApps from "./microapp";
import router from './router'
import store from './store';
import Layout from "@/views/layout/Index.vue"

const instance = createApp(App).use(router).use(store).use(ElementPlus).mount('#app')

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
function loader(loading) {
  if (instance.loading) {
    instance.loading = loading
  }
}
const apps = microApps.map(item => {
  return {
    ...item,
    component: Layout,
    loader
  };
});
registerMicroApps(apps, {
  beforeLoad: app => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    app => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    }
  ],
  afterMount: [
    app => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    }
  ],
  afterUnmount: [
    app => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    }
  ]
})
start()
