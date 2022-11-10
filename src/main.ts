import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/assets/styles/style.sass'
const app = createApp(App)
import Ui from '@/components/Ui/Ui'
Ui.forEach((component) => {
  app.component(component.name, component)
})
app.use(store).use(router).mount('#app')
