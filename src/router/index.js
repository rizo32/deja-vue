import EditProduct from '@/components/EditProduct'
import AddProduct from '@/components/AddProduct'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductView from '@/views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/product-create',
    name: 'product-create',
    component: AddProduct
  },
  {
    path: '/product-edit/:id',
    name: 'product-edit',
    component: EditProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
