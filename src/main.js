import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'

createApp(App).use(router).mount('#app')
