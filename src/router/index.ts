import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '@/views/MenuView.vue'
import MyOrdersView from '@/views/MyOrdersView.vue'
import ChefQueueView from '@/views/ChefQueueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/menu' },
    { path: '/menu', name: 'menu', component: MenuView },
    { path: '/my-orders', name: 'my-orders', component: MyOrdersView },
    { path: '/chef', name: 'chef', component: ChefQueueView },
  ],
})

export default router
