/*
 * @Author: Marshall
 * @Date: 2022-05-14 16:55:30
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-15 11:11:03
 * @Description: 
 * @FilePath: /apollo-microapp/packages/app1/src/main.ts
 */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import App from './App.vue'
import routes from './router'

let history = null;
let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app1' : '/')
  router = createRouter({
    history,
    routes
  })

  instance = createApp(App)
  instance.use(router)
  instance.mount(container ? container.querySelector('#app') : document.getElementById('app'))
  if(qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('正在作为子应用运行中...');
  }
}

renderWithQiankun({
  mount(props) {
    console.log('app1 mount');
    render(props)
  },
  bootstrap() {
    console.log('app1 bootstrap');
  },
  unmount(props) {
    console.log('app1 卸载');
    instance.unmount();
    instance._container.innerHTML = '';
    history.destory();
    router = null;
    instance = null;
  },
  update() {}
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}