/*
 * @Author: Marshall
 * @Date: 2022-05-10 07:29:31
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-26 23:00:20
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/microapp.ts
 */
import global from "./global";

export const microApps = [
  {
    name: "app1",
    entry: "//localhost:3001/app1",
    activeRule: "/app1",
  },
  {
    name: "app2",
    entry:"//localhost:3002/app2",
    activeRule: "/app2",
  },
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#apollo-viewport',
    props: {
      routerBase: item.activeRule,
      getGlobalState: global.getGlobalState,
    }
  }
})

export default apps;
