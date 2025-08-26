import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/home/index.vue'),
      name: 'home.index'
    },
    {
      path: '/shop',
      component: () => import('@/pages/shop/index.vue'),
      name: 'shop.index'
    },
    {
      path: '/about',
      component: () => import('@/pages/about/index.vue'),
      name: 'about.index'
    },
    {
      path: '/contact',
      component: () => import('@/pages/contact/index.vue'),
      name: 'contact.index'
    }
  ]
})

export default router