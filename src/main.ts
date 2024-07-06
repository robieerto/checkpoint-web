// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'
import './styles/global.css'
import '../node_modules/flowbite-vue/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

createApp(App).use(router).mount('#app')
