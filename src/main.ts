import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { makeServer } from './server';
import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

makeServer();

app.use(router);
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  },
});

app.mount('#app');
