import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Foundation from '../views/Foundation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/polityka-prywatnosci',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/fundacja',
    name: 'Foundation',
    component: Foundation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




// route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
