/*
 * @Author: Marshall
 * @Date: 2022-05-14 16:55:30
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-26 14:08:01
 * @Description: 
 * @FilePath: /apollo-microapp/packages/app1/src/main.ts
 */
import { createApp, CreateAppFunction, App } from 'vue'
import { createRouter, createWebHistory, RouterHistory } from 'vue-router';
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import app from './App.vue'
import routes from './router'

let history: RouterHistory;
let router;
let instance: App<Element>;
function render(props = {}) {
  const { container } = props;
  history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app1' : '/')
  router = createRouter({
    history,
    routes
  })

  router.beforeEach((to, from, next) => {
    console.log('>>>>>>>>', props.getGlobalState && props.getGlobalState());
    // console.log('000000', instance.config.globalProperties.$mainRouter);
    // if(qiankunWindow.__POWERED_BY_QIANKUN__) {
    //   const mainRouter = instance.config.globalProperties.$mainRouter
    //   mainRouter.push('/login')
    //   return
    // }
    next()
    
  })

  instance = createApp(app)
  instance.use(router)
  instance.mount(container ? container.querySelector('#app') : document.getElementById('app'))

  instance.config.globalProperties.$mainRouter = props.router;
  if(qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('正在作为子应用运行中...');
  }
}

renderWithQiankun({
  mount(props) {
    console.log('app1 mount');
    render(props)

    instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    instance.config.globalProperties.$setGlobalState = props.setGlobalState;
  },
  bootstrap() {
    console.log('app1 bootstrap');
  },
  unmount(props) {
    console.log('app1 卸载');
    instance.unmount();
    instance._container.innerHTML = '';
    history.destroy();
    router = null;
    instance = null;
  },
  update() {}
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}