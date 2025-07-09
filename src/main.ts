import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

function updateSizeVars() {
  const appH = window.innerHeight
  const header = document.querySelector<HTMLElement>('.site-header')
  const headerH = header?.offsetHeight || 0

  document.documentElement.style.setProperty('--app-height', `${appH}px`)
  document.documentElement.style.setProperty('--header-height', `${headerH}px`)
}

updateSizeVars()
window.addEventListener('resize', updateSizeVars)
window.addEventListener('orientationchange', updateSizeVars)

app.use(router)

app.mount('#app')
