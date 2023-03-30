import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faXmark, faWrench, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faXmark, faWrench, faArrowLeft)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
