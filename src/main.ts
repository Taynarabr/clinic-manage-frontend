import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

// SEM import CSS aqui - CSS está no index.html via CDN

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')

console.log("🎯 ClinicManager: TypeScript + CSS (via CDN)")
