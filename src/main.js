import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/routes.js'
import {Quasar} from 'quasar'
import './style.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


const app = createApp(App)

app.use(Quasar, {
    plugins:{},
})

app.use(router)
app.mount('#app')