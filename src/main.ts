import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as icons from '@element-plus/icons-vue'

import './styles/main.less'

const app = createApp(App)
Object.keys(icons).forEach((key) => {
  app.component(key, (icons as any)[key])
})

app.use(createPinia())
app.use(router)

app.mount('#app')
