import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueGridLayout from 'vue-grid-layout'
import { createPinia } from 'pinia'
import Print from 'vue-print-nb'

createApp(App)
    .use(VueGridLayout)
    .use(createPinia())
    .use(Print)
    .mount('#app')
