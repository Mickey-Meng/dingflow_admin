<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
// hook
import { LoginStateEnum, useLoginState } from './useLogin'
const { setLoginState } = useLoginState()

// el-form
const formRef = ref<FormInstance>()
const formData = reactive({
  username: 'zhangsan',
  password: '123456',
  remember: false,
})
const formRules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 4, max: 20, message: '用户名长度在4到20字符之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 4, max: 20, message: '密码长度在4到20字符之间', trigger: 'blur' },
  ],
})

// loading
const loading = ref(false)

// login
const router = useRouter()
const route = useRoute()
const login = () => {
  const redirect = route.query.redirect || '/home'
  router.push(redirect)
}
</script>

<template>
  <div class="form">
    <!-- title -->
    <div class="form-header">
      <h2 class="form-header--title">登录</h2>
      <div class="form-header--subtitle">
        还没有账号？
        <el-link
          class="form-link"
          type="primary"
          :underline="false"
          @click="setLoginState(LoginStateEnum.REGISTER)"
        >
          立即注册
        </el-link>
      </div>
    </div>
    <!-- 表单 -->
    <el-form
      ref="formRef"
      class="form-content"
      label-position="top"
      :model="formData"
      status-icon
      :rules="formRules"
    >
      <!-- 用户名 -->
      <el-form-item label="" prop="username">
        <el-input v-model="formData.username" maxlength="20" size="large"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="" prop="password">
        <el-input v-model="formData.password" type="password" size="large"></el-input>
      </el-form-item>
      <!-- 记住密码 忘记密码？ -->
      <el-form-item>
        <div class="form-change">
          <el-checkbox v-model="formData.remember" label="记住密码" size="large" />
          <el-link type="primary" :underline="false" @click="setLoginState(LoginStateEnum.MODIFY)"
            >忘记密码？</el-link
          >
        </div>
      </el-form-item>
      <!-- 登录 -->
      <el-form-item>
        <el-button
          class="form-button"
          color="#626aef"
          size="large"
          :loading="loading"
          @click.prevent="login"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 第三方登录 -->
    <el-divider content-position="center">其他登录方式</el-divider>
    <div class="form-third">
      <i class="iconfont icon-qiyeweixin1" />
      <i class="iconfont icon-dingding" />
      <i class="iconfont icon-zhifubao" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('./index.less');
</style>
