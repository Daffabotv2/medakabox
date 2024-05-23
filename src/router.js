// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './views/Home.vue';
import AboutPage from './views/About.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
});