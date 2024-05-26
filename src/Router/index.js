import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue' // Adjust the import path
import ShoppingCartView from '../views/ShoppingCart.vue' // Adjust the import path

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: ShoppingCartView }, // Assuming '/about' corresponds to ShoppingCart
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
