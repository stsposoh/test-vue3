import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
import i18n from './i18n'
import App from './App.vue'
import router from './router'

import './assets/styl/main.styl'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(createPinia())

app.mount('#app')

