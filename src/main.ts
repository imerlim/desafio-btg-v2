import { createApp } from 'vue'
import App from './App.vue'
import msgPlugin from './plugins/msg'

const app = createApp(App)
app.use(msgPlugin)
app.mount('#app')
