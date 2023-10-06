<script setup lang="ts">
import LoginIntroduce from './LoginIntroduce.vue'
import LoginForm from './LoginForm.vue'
import ModifyForm from './ModifyForm.vue'
import RegisterForm from './RegisterForm.vue'
// hooks
import { LoginStateEnum, useLoginState } from './useLogin.ts'
const { getLoginState } = useLoginState()
</script>

<template>
  <div class="login">
    <div class="login-wrap">
      <LoginIntroduce />
      <div class="login-form">
        <LoginForm v-if="getLoginState === LoginStateEnum.LOGIN" />
        <RegisterForm v-if="getLoginState === LoginStateEnum.REGISTER" />
        <ModifyForm v-if="getLoginState === LoginStateEnum.MODIFY" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #eff5f9;
}

.login-wrap {
  display: flex;
  width: 1000px;
  height: 620px;
  border-radius: 4px;
  overflow: hidden;
}

.login-form {
  flex-grow: 1;
  padding: 50px 20px;
  background-color: #fff;
}
</style>
