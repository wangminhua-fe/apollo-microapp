<!--
 * @Author: Marshall
 * @Date: 2022-04-30 09:11:12
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-16 02:39:01
 * @Description: 
 * @FilePath: /apollo-admin/src/layout/components/AppMain.vue
-->
<template>
  <el-main class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <keep-alive>
          <component
            :is="Component"
            :key="route.path"
          />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { isTags } from '@/utils/tags';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/store';

const route = useRoute();

/**
 * 生成 title
 */
const getTitle = (route) => {
  let title = '';
  if (!route.meta) {
    // 处理无 meta 的路由
    const pathArr = route.path.split('/');
    title = pathArr[pathArr.length - 1];
  } else {
    title = route.meta.title;
  }
  return title;
};

/**
 * 监听路由变化
 */
const appStore = useAppStore();
watch(
  route,
  (to) => {
    if (!isTags(to.path)) return;
    const { fullPath, meta, name, params, path, query } = to;
    appStore.addTagsViewList({
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to),
    });
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0;
  box-sizing: border-box;
}
</style>
