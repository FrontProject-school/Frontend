import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

import axios from 'axios'

const app = createApp(App)
app.use(router)

// 다른 컴포넌트에서는 import 없이 this.$axios로 사용가능
app.config.globalProperties.$axios = axios


app.mount('#app')
