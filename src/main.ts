import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, vuexKey } from './store'
import './style/index.scss'
const app = createApp(App)
app.use(router).use(store, vuexKey)
app.mount('#app')
