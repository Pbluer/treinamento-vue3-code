import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Feedbbacks = () => import('../views/Feedbacks/index.vue')
const Credecials = () => import('../views/Credecials/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbbacks',
    name: 'Feedbbacks',
    component: Feedbbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credecials',
    name: 'Credecials',
    component: Credecials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
