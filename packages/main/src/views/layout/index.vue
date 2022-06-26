<!--
 * @Author: Marshall
 * @Date: 2022-06-25 17:16:11
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-26 22:56:45
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/views/layout/index.vue
-->
<template>
  <el-container class="app-container">
    <!-- 左侧菜单 -->
    <Sidebar title="微前端框架" :style="sidebarStyle" />
    <el-container>
      <el-header class="app-header">
        header
      </el-header>
      <el-main class="app-main">
        <router-view></router-view>
        <div id="apollo-viewport"></div>
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/Index.vue';
import { computed } from 'vue';

const sidebarStyle = computed(() => {
  return {
    backgroundColor: "#409eff",
  };
});
</script>

<style lang="scss" scoped>
.app-container {
  height: 100vh;
}

.app-header {
  padding: 0;
  height: 86px;
}
</style>