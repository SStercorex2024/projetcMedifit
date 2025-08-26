import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/index.vue'),
      name: 'home.index'
    }
  ]
})

export default router