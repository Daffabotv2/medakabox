import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/src/views/Home.vue';
import AboutPage from '/src/views/About.vue';
import DefaultLayout from '/src/layouts/DefaultLayout.vue';

const routes = [
    {
      path: '/',
      name: 'Public',
      component: DefaultLayout,
      redirect: '/',
      children: [
          {
            path: '/',
            name: 'HomePage',
            component: HomePage
          }
      ]
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;