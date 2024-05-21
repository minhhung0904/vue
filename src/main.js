import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css';

const app = createApp(App)

app.use(VueCookies)
app.use(router)

app.mount('#app')