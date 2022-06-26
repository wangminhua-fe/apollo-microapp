/*
 * @Author: Marshall
 * @Date: 2022-06-05 22:20:56
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-26 14:56:57
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { microApps } from '../microapp'
import Layout from "@/views/layout/Index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/app1'
  },
  {
    path: '/:app*/:morePath*',
    component: Layout,
  },
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
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const hasToken = localStorage.getItem('token')

  if (to.path === '/login' || to.path === '/init-password') {
    next()
    return false
  }
  if (!localStorage.getItem('token')) {
    next('/login')
    return false
  }
  if (to.name) {
    next()
    return false
  }
  if (microApps.some((item) => to.path.includes(item.name))) {
    next()
    console.log('child')

    return false
  }
  // 如果找不到路由跳转到404
  next('/404')
  return false
})

export default router
