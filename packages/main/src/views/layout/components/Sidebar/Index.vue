<!--
 * @Author: Marshall
 * @Date: 2022-04-30 09:10:37
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-26 19:29:13
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/views/layout/components/Sidebar/Index.vue
-->
<template>
  <el-aside width="200px">
    <div class="logo-container">
      <el-avatar class="logo-img" :size="40" shape="square" src="../../../../assets/images/logo.png" />
      <!-- <span v-if="appStore.sidebarOpened" class="logo-title"> -->
      <span class="logo-title">
        {{ title }}
      </span>
    </div>

    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts" setup>
import SidebarMenu from './SidebarMenu.vue';
// import { constant } from '@apollo-fe/common';
// import { isExternal } from '@/utils/validate';
// import { useAppStore } from '@/store';
// import { computed } from '@vue/reactivity';

// const appStore = useAppStore();

defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin-bottom: 20px;
}

.logo-title {
  padding-left: 10px;
  font-weight: 600;
  font-size: 20px;
  white-space: nowrap;
  color: #ffffff;
}

:deep(.el-avatar) {
  --el-avatar-bg-color: translate;
}

:deep(.el-menu) {
  border-right: none !important;
}
</style>
