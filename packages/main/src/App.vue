<!--
 * @Author: Marshall
 * @Date: 2022-05-10 07:13:54
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-14 16:45:34
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/App.vue
-->
<template>
  <div class="layout-wrapper">
    <div>我是主应用的头部, 看看下面我的状态, 是不是能变化</div>
    <div>{{ user.name }}</div>
    <div id="apollo-viewport">main</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import store from './store'

const user = computed(() => store.getGlobalState().user)

const loading = ref(true)
watch(loading, (val) => {
  if (val) {
    console.log('加载中...');
  } else {
    console.log('加载完成...');
  }
})
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

.layout-wrapper {
  width: 100%;
}
</style>
