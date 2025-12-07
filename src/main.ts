import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // importa seu router
import "./index.css";


const app = createApp(App)

app.use(router) // ativa o Vue Router
app.mount('#app')
