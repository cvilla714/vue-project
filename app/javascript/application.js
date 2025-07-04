console.log('Application script loaded');

import { createApp } from 'vue';
import ProductList from './components/ProductList.vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, looking for app element');
  const appElement = document.getElementById('app');
  if (appElement) {
    console.log('Found app element, mounting Vue');
    const app = createApp({
      components: {
        ProductList,
      },
    });
    app.mount('#app');
    console.log('Vue app mounted successfully');
  } else {
    console.error('Could not find app element to mount Vue');
  }
});
