import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/tailwind.css'
import { Buffer } from 'buffer'
window.Buffer = Buffer

const app = createApp(App)

const SITE_NAME = '最終任務 - 個人品牌網站'

router.beforeEach((to, from, next) => {
  let pageTitle = SITE_NAME

  if (to.meta.title) {
    pageTitle = `${to.meta.title} ⭐ ${SITE_NAME}`
  }

  document.title = pageTitle
  next()
})

app.use(router).mount('#app')
