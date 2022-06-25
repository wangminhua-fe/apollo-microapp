<template>
  <div class="login-container">
    <div class="login-left">
      <div class="flex items-center relative text-white">
        <img src="@/assets/images/logo.png" alt="" class="login-left__logo" />
      </div>
      <div class="login-left-body">
        <div>
          <img src="@/assets/images/login-box-bg.svg" alt="" />
          <div class="login-left-body__title">欢迎使用本系统</div>
          <div class="login-left-body__subtitle">联空医加-中后台管理系统</div>
        </div>
      </div>
    </div>
    <div class="login-right">
      <div class="login-right-body">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from './components/LoginForm.vue';
</script>

<style lang="scss" scoped>
.login {
  &-container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    > div {
      flex: 1;
    }
  }

  &-left {
    position: relative;
    padding: 30px;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: #353e54;
      content: '';
    }

    &__logo {
      height: 32px;
    }

    &-body {
      margin: 0 auto;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(100% - 60px);

      img {
        width: 350px;
      }

      &__title {
        font-size: 28px;
      }

      &__subtitle {
        font-size: 14px;
        margin-top: 12px;
      }
    }
  }

  &-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
