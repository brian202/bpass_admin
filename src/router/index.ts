import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';
import Login from '@/views/login/Login.vue';
import Layout from '@/views/Home.vue';
import { userModule } from '@/store/modules/user.state';

Vue.use(VueRouter);

const beforeEnter = (from: Route, to: Route, next: Function) => {
  if (userModule.accessToken) {
    return next();
  }
  next('/login');
};

const routes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        meta: {
          title: 'Dashboard',
        },
        path: '/',
        name: 'Dashboard',
        component: () => import('@/components/DashBoard/index.vue'),
        beforeEnter,
      },
      {
        path: '/notice/list',
        name: 'List',
        component: () => import('@/components/Notice/NoticeList.vue'),
      },
      {
        path: '/notice/write',
        name: 'Write',
        component: () => import('@/components/Notice/NoticeWrite.vue'),
        beforeEnter,
      },
      {
        path: '/notice/list/:postId', // 상세페이지
        name: 'View',
        component: () => import('@/components/Notice/NoticeView.vue'),
        props: true,
        beforeEnter,
      },
      {
        path: '/notice/list/:postId/Modify', // 수정페이지
        name: 'Modify',
        component: () => import('@/components/Notice/NoticeModify.vue'),
        props: true,
        beforeEnter,
      },
      {
        meta: {
          title: 'Push',
        },
        path: '/push',
        name: 'Push',
        component: () => import('@/components/Push/index.vue'),
        beforeEnter,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      if (userModule.accessToken) {
        return next('/');
      }
      next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
