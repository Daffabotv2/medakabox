// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/Home.vue';
import AboutPage from './views/About.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    components: { HomePage },
  },
  {
    path: '/about',
    name: 'AboutPage',
    components: { AboutPage },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;