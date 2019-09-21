import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/views/Home';
import About from '@/components/views/About';
import RootChrome from '@/components/RootChrome';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: RootChrome,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'about',
          name: 'about',
          component: About,
        },
      ],
    },
  ],
});
