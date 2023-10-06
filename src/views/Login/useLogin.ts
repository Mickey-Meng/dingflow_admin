import { ref, computed } from 'vue'

// 枚举
export enum LoginStateEnum {
  LOGIN,
  REGISTER,
  MODIFY,
}

// hook -- useLoginState
const currentState = ref(LoginStateEnum.LOGIN)
export const useLoginState = () => {
  // 设置
  const setLoginState = (state: LoginStateEnum) => {
    currentState.value = state
  }
  // 获取
  const getLoginState = computed<LoginStateEnum>(() => currentState.value)
  // 初始化
  const initLoginState = () => {
    setLoginState(LoginStateEnum.LOGIN)
  }

  return {
    setLoginState,
    getLoginState,
    initLoginState,
  }
}
