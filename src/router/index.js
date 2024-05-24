import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '/src/views/AboutView.vue';
import DefaultLayout from '/src/layouts/DefaultLayout.vue';

const routes = [
    {
      path: '/',
      name: 'Public',
      redirect: '/',
      children: [
          {
            path: '/',
            name: 'HomePage',
            component: DefaultLayout
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