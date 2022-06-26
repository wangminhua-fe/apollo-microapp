<!--
 * @Author: Marshall
 * @Date: 2022-05-02 19:05:42
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 10:46:34
 * @Description: 
 * @FilePath: /apollo-admin-plus/src/layout/components/Sidebar/SidebarItem.vue
-->
<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-sub-menu
    v-if="route.children.length > 0"
    :index="route.path"
  >
    <template #title>
      <menu-item
        :title="route.meta.title"
        :icon="route.meta.icon"
      />
    </template>
    <!-- 循环渲染 -->
    <sidebar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    />
  </el-sub-menu>
  <!-- 渲染 item 项 -->
  <el-menu-item
    v-else
    :index="route.path"
  >
    <menu-item
      :title="route.meta.title"
      :icon="route.meta.icon"
    />
  </el-menu-item>
</template>

<script lang="ts" setup>
import MenuItem from './MenuItem.vue';
import { defineProps } from 'vue';
// 定义 props
defineProps({
  route: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>
