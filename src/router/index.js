import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from "../views/AuthView.vue";
import ProductsView from "../views/ProductView.vue";
import ProdView from "../views/ProdView.vue";
import TableView from "../views/TableView.vue";

const routes = [
  {
    path: '/',
    redirect: '/todos',
  },
  {
    path: '/todos',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/products/:id',
    name: 'productsById',
    component: ProdView
  },
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
