import { createApp } from 'vue'
import './style.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.mount('#app')
app.use(PrimeVue)
