// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './views/Home.vue';
import AboutPage from './views/About.vue';

Vue.use(VueRouter);

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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
