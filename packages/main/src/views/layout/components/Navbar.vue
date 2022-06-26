<!--
 * @Author: Marshall
 * @Date: 2022-04-30 09:11:29
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-13 17:30:19
 * @Description: 
 * @FilePath: /apollo-admin-plus/src/layout/components/Navbar.vue
-->
<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" />
    <!-- <breadcrumb id="guide-breadcrumb" class="breadcrumb-container" /> -->

    <div class="right-menu">
      <!-- <header-search class="right-menu-item hover-effect"></header-search> -->
      <!-- <screenfull class="right-menu-item hover-effect" /> -->
      <!-- 头像 -->
      <el-dropdown
        class="avatar-container"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="userStore.userInfo.avatar"
          />
          <i class="el-icon-s-tools" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <el-dropdown-item @click="logout">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hamburger from '@/components/Hamburger/index.vue'
import { useUserStore } from '@/store/index'

const userStore = useUserStore()
const logout = () => {
  userStore.logout()
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    :deep(.right-menu-item) {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    :deep(.avatar-container) {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>