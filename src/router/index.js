import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import Admin from '../views/Admin.vue'
import Profile from '../views/Profile.vue'
import Users from '../views/Users.vue'
import AdminProducts from '../views/AdminProducts'
import OrderHistory from '../views/OrderHistory'
import OrdersToBeHandled from '../views/OrdersToBeHandled'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/orderconfirm',
    name: 'OrderConfirm',
    component: OrderConfirm
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/admin/products',
    name: 'AdminProducts',
    component: AdminProducts
  },
  {
    path: '/admin/order-history',
    name: 'OrderHistory',
    component: OrderHistory
  },
  {
    path: '/admin/orders-to-handle',
    name: 'OrdersToBeHandled',
    component: OrdersToBeHandled
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
