import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: DefaultLayout: () => import('/src/layouts/DefaultLayout.vue')
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutLayout: () => import('/src/layouts/AboutLayout.vue')
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;