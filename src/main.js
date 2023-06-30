import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "../public/general.scss";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight, faAngleDown, faPlus)

import Vue3Lottie from 'vue3-lottie'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(VueAxios, axios).use(Vue3Lottie).mount('#app')
