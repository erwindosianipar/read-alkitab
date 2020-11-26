import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '../pages/404/NotFound.vue'
import Home from '../pages/home/Home.vue'
import Read from '../pages/read/Read.vue'
import Product from '../pages/product/Product.vue'
import About from '../pages/about/About.vue'
import Faq from '../pages/faq/Faq.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Not Found',
    component: NotFound,
    meta: {
      title: 'Not Found | Read Alkitab Indonesia'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | Read Alkitab Indonesia'
    }
  },
  {
    path: '/read',
    name: 'Read',
    component: Read,
    meta: {
      title: 'Read | Read Alkitab Indonesia'
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: {
      title: 'Product | Read Alkitab Indonesia'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About | Read Alkitab Indonesia'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: Faq,
    meta: {
      title: 'FAQ | Read Alkitab Indonesia'
    }
  }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})
