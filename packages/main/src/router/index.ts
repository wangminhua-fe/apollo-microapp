/*
 * @Author: Marshall
 * @Date: 2022-06-05 22:20:56
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-06 09:17:33
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
    meta: {
      title: '登录'
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const hasToken = localStorage.getItem('token')

  if (to.path === '/login' || to.path === '/init-password') {
    next()
    return false
  }
})

export default router
