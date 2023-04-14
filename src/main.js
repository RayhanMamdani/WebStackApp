import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bulma/css/bulma.css'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
library.add(faHatWizard)


app.use(createPinia())
app.use(router)

app.mount('#app')
