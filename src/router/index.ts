import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */ '@/views/login/index.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: () => import(/* webpackChunkName: 'course' */ '@/views/course/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: '404' */ '@/views/error/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
