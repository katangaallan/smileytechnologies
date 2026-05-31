import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Team from '../pages/Team.vue'
import Why from '../pages/Why.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/why',
    name: 'Why',
    component: Why
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
