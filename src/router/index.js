import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../views/layouts/MainLayout.vue'
import HomeView from '../views/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout, // ⭐ 所有頁面都包在 MainLayout 裡
    children: [
       {
          path: '',
          name: 'Idx',
          component: HomeView
       },
       {
          path: '/blog',
          name: 'BlogPage',
          component: () => import(/* webpackChunkName: "about" */ '../views/BlogPage.vue')
       },
       {
        path: '/blog/:slug',
        name: 'BlogPost',
        component: () => import('../views/BlogPost.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
