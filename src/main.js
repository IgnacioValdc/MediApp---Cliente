import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import router from './router/router'
import './assets/app.css'



createApp(App).use(router).mount('#app')
