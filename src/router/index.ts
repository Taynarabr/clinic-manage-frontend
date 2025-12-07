import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/admin/login' },
  { path: '/admin/login', name: 'admin-login', component: () => import('@/views/admin/AdminLogin.vue') },
  { path: '/dashboard', name: 'dashboard', component: () => import('@/views/admin/Dashboard.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
