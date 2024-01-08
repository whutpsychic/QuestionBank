import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      redirect: '/home/metallurgicalSafety'
    },
    {
      path: '/home',
      component: HomeView,
      children: [
        {
          path: 'metallurgicalSafety',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/metallurgicalSafety/main.vue')
        }
      ]
    },
  ]
})

export default router
