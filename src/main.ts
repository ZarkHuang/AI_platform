import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from "@tanstack/vue-query";
import { create, NLayout, NLayoutHeader, NLayoutFooter } from 'naive-ui';
import SvgIcon from "@/components/Icons/SvgIcon.vue";
import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router/index'
const naive = create({
    components: [NLayout, NLayoutHeader, NLayoutFooter],
  });

const app = createApp(App)
app.component('SvgIcon', SvgIcon);
    
app.use(naive);
app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin);

app.mount('#app')
