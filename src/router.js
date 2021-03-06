import Vue from 'vue';
import Router from 'vue-router';
import {
  Home,
  Login,
  Registration,
  Orders,
  AdList,
  AdNew,
  AdListItem,
} from '@/components';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'Reg',
      component: Registration,
    },
    {
      path: '/list',
      name: 'AdList',
      component: AdList,
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'AdListItem',
      component: AdListItem,
    },
    {
      path: '/new',
      name: 'AdNew',
      component: AdNew,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
    },
  ],
});
