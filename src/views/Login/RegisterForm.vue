<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
// hook
import { LoginStateEnum, useLoginState } from './useLogin'
const { setLoginState } = useLoginState()

// el-form
const formRef = ref<FormInstance>()
const formData = reactive({
  username: '',
  password: '',
  cpassword: '',
})
const vCPassword = (rule, value, callback) => {
  if (value !== this.formData.newpassword) {
    callback(new Error('两次密码不一致，请重新输入'))
  } else {
    callback()
  }
}
const formRules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 4, max: 20, message: '用户名长度在4到20字符之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 4, max: 20, message: '密码长度在4到20字符之间', trigger: 'blur' },
  ],
  cpassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 4, max: 20, message: '密码长度在4到20字符之间', trigger: 'blur' },
    { validator: vCPassword, trigger: 'blur' },
  ],
})

// loading
const loading = ref(false)
const register = () => {}
</script>

<template>
  <div class="form">
    <!-- title -->
    <div class="form-header">
      <h2 class="form-header--title">注册</h2>
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
        <el-input
          v-model="formData.username"
          maxlength="20"
          size="large"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="" prop="password">
        <el-input
          v-model="formData.password"
          type="password"
          size="large"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <!-- 确认密码 -->
      <el-form-item label="" prop="cpassword">
        <el-input
          v-model="formData.password"
          type="password"
          size="large"
          placeholder="确认密码"
        ></el-input>
      </el-form-item>
      <!-- 登录 -->
      <el-form-item>
        <el-button
          class="form-button"
          color="#626aef"
          size="large"
          :loading="loading"
          @click="register"
        >
          注册
        </el-button>
        <el-button
          class="form-button"
          type="default"
          size="large"
          @click="setLoginState(LoginStateEnum.LOGIN)"
        >
          返回登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
@import url('./index.less');
</style>
