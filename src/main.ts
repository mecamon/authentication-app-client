import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

const app = createApp(App);
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

app.use(i18n);
app.use(createPinia());
app.use(router);
app.mount('#app');
