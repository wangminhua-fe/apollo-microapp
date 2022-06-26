<!--
 * @Author: Marshall
 * @Date: 2022-05-03 05:25:34
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-26 19:24:58
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/views/layout/components/Sidebar/MenuItem.vue
-->
<template>
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <!-- <el-icon>
    <component :is="Icons[menuIcon]"></component>
  </el-icon> -->
  <span>{{ title }}</span>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import * as Icons from '@element-plus/icons-vue';
// import { transformStr } from '@/utils';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

// const menuIcon = computed(() => transformStr(props.icon));
</script>

<style lang="scss" scoped>
</style>
