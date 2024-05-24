// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/Home.vue';
import AboutPage from './views/About.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;