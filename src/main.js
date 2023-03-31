// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
// import client from './services/axiosClient'

// prototype.$client = client
// prototype.$appName = 'My App'
createApp(App).use(router).mount('#app')
