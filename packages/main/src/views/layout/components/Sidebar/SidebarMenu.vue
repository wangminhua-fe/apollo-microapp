<!--
 * @Author: Marshall
 * @Date: 2022-04-30 09:52:44
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-26 19:29:42
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/views/layout/components/Sidebar/SidebarMenu.vue
-->
<template>
  <el-menu :default-active="activeMenu" :collapse="false" :unique-opened="true" router>
    <SidebarItem v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script lang="ts" setup>
import { ComputedRef, computed } from 'vue';
import SidebarItem from './SidebarItem.vue';
import { useRouter, useRoute } from 'vue-router';

// const themeStore = useThemeStore();
// const appStore = useAppStore();
// const mainColor = themeStore.variables.mainColor;

// 计算路由表结构
const router = useRouter();
const routes = computed(() => {
  // const filterRoutes = filterRouters(router.getRoutes());
  // return generateMenus(filterRoutes);
  return [];
});

// 计算高亮 menu 的方法
const route = useRoute();
const activeMenu: ComputedRef<any> = computed((): any => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>

<style lang="scss" scoped>
</style>
