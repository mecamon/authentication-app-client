import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { i18n } from './i18n/locales';

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);
app.mount('#app');
