import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'

import './assets/styl/main.styl'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Explicitly initialize the i18n library
i18n.setup()
// Pass the VueI18n instance as a plugin to use()
app.use(i18n.vueI18n)

// app.use(i18n)
app.use(router)
app.use(createPinia())

app.mount('#app')
