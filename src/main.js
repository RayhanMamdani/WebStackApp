import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bulma/css/bulma.css'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
/* add icons to the library */
library.add(faUserSecret)
import './assets/main.css'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)


app.use(createPinia())
app.use(router)

app.mount('#app')
