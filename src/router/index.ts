import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Login from '@/views/login/Login.vue';
import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import Layout from '@/views/Home.vue';

Vue.use(VueRouter);
Vue.use(VueSidebarMenu);

const requireAuth = () => (from: any, to: any, next: any) => {
  const isAuthenticated = false
  if (isAuthenticated) return next()
  next('/login?returnPath=Dashboard')
}

const routes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
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
      },
      {
        meta: {
          title: 'Notice',
        },
        path: '/notice',
        name: 'Notice',
        component: () => import('@/components/Notice/index.vue'),
        //beforeEnter: requireAuth(),
      },
      {
        path: '/notice/list',
        name: 'List',
        component: () => import('@/views/Notice/NoticeList.vue'),
      },
      {
        path:'/notice/write',
        name: 'Write',
        component: () => import('@/views/Notice/NoticeWrite.vue'),
      },
      {
        path: '/board/view',  //상세페이지 추가
        name: 'View',
        component: () => import('@/views/Notice/NoticeView.vue'),
      },
      {
        meta: {
          title: 'Push',
        },
        path: '/push',
        name: 'Push',
        component: () => import('@/components/Push/index.vue'),
        //beforeEnter: requireAuth(),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      if(localStorage.getItem('accesstoken')){
        next({name:'Dashboard'})
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
