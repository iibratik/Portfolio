import '@/assets/styles/style.sass'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
import Ui from '@/components/Ui/Ui'
Ui.forEach((component) => {
  app.component(component.name, component)
})
app.use(store).use(router).mount('#app')
