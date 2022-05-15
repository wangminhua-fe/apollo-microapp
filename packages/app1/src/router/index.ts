/*
 * @Author: Marshall
 * @Date: 2022-05-15 08:45:10
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-15 08:46:29
 * @Description: 
 * @FilePath: /apollo-microapp/packages/app1/src/router/index.ts
 */
const routes = [
  { path: '/', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue') },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue') },
];

export default routes;