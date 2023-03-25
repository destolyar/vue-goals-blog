import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

import App from './App.vue'
import router from './router'
import "./assets/main.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app
  .use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })

app.mount('#app')
