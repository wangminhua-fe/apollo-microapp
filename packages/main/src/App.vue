<!--
 * @Author: Marshall
 * @Date: 2022-05-10 07:13:54
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-06 09:20:19
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/App.vue
-->
<template>
  <div class="layout-wrapper">
    <router-view></router-view>
    <div id="apollo-viewport"></div>
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
