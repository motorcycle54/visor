import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import WrapperDrag from './components_visor/wrapperDrag/WrapperDraggable.vue';

loadFonts()

const app = createApp(App)
app.component('wrapper-drag', WrapperDrag)




app.use(router)
  .use(vuetify)
  .mount('#app')
