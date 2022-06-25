<!--
 * @Author: Marshall
 * @Date: 2022-04-28 11:13:01
 * @LastEditors: Marshall
 * @LastEditTime: 2022-06-13 13:20:19
 * @Description: 
 * @FilePath: /apollo-microapp/packages/main/src/views/login/components/LoginForm.vue
-->
<template>
  <div class="login-form__title">登 录</div>
  <el-form ref="loginFormRef" label-position="top" label-width="100px" :model="loginForm" :rules="loginRules"
    class="login-form">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username" clearable size="large" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" type="password" show-password clearable size="large" />
    </el-form-item>
    <el-form-item>
      <div class="login-form__row">
        <el-checkbox label="记住我"></el-checkbox>
        <el-link type="primary" :underline="false">忘记密码</el-link>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-form__btn" size="large" @click="handleLogin">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { FormItemRule, ElForm } from 'element-plus';
import { ref, Ref } from 'vue';
// import { validatePassword } from '../rules';
import { useRouter } from 'vue-router';
// import { useUserStore } from '@/store';

// const userStore = useUserStore();

interface LoginForm {
  username: string;
  password: string;
}

interface Rules {
  [key: string]: Array<FormItemRule>;
}

const loginForm = ref<LoginForm>({
  username: 'admin',
  password: '123456',
});

const loginRules: Ref<Rules> = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      // validator: validatePassword(),
    },
  ],
});

// 处理登录
const loading = ref<boolean>(false);
const loginFormRef = ref<InstanceType<typeof ElForm>>();
const router = useRouter();
const handleLogin = async (): Promise<void> => {
  loginFormRef.value?.validate((valid: boolean) => {
    if (!valid) {
      return;
    }
    debugger
    loading.value = true;
    // userStore
    //   .login(loginForm.value)
    //   .then(() => {
    //     loading.value = false;
    //     router.push('/');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     loading.value = false;
    //   });
    
  });
};
</script>

<style lang="scss" scoped>
.login {
  &-form {
    width: 480px;

    &__title {
      text-align: center;
      font-size: 24px;
      margin-bottom: 24px;
      font-weight: bold;
    }

    &__btn {
      width: 100%;
    }

    &__row {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>
