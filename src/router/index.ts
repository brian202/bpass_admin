import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '@/views/LogIn.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        meta: {
          title: 'Dashboard',
        },
        path: '/',
        name: 'Dashboard',
        component: () => import('@/components/DashBoard/index.vue'),
      },
      {
        meta: {
          title: 'Notice',
        },
        path: '/notice',
        name: 'Notice',
        component: () => import('@/components/Notice/index.vue'),
      },
      {
        meta: {
          title: 'Push',
        },
        path: '/push',
        name: 'Push',
        component: () => import('@/components/Push/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      if(localStorage.getItem('accesstoken')){
        next({name:'Home'})
      } else {
        next();
      }
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


export default router;
