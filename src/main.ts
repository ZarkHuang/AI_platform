import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "@tanstack/vue-query";
import { create, NLayout, NLayoutHeader, NLayoutFooter } from 'naive-ui';


import App from './App.vue'
import router from './router/index'
const naive = create({
    components: [NLayout, NLayoutHeader, NLayoutFooter],
  });

const app = createApp(App)

app.use(naive);
app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin);

app.mount('#app')
