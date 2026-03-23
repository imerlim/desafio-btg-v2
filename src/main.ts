import { createApp } from 'vue'
import App from './App.vue'
import msgPlugin from './plugins/msg' // Importe aqui

const app = createApp(App)
app.use(msgPlugin) // Registre aqui
app.mount('#app')
