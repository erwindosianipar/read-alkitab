import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '../pages/404/NotFound.vue'
import Home from '../pages/home/Home.vue'
import Read from '../pages/read/Read.vue'
import Product from '../pages/product/Product.vue'
import About from '../pages/about/About.vue'
import Faq from '../pages/faq/Faq.vue'

Vue.use(VueRouter)

var appTitle = process.env.VUE_APP_TITLE

const routes = [
    {
        path: '*',
        name: 'Not Found',
        component: NotFound,
        meta: {
            title: 'Not Found | ' + appTitle
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home | ' + appTitle
        }
    },
    {
        path: '/read',
        name: 'Read',
        component: Read,
        meta: {
            title: 'Read | ' + appTitle
        }
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
        meta: {
            title: 'Product | ' + appTitle
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About | ' + appTitle
        }
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: Faq,
        meta: {
            title: 'FAQ | ' + appTitle
        }
    }
]

export default new VueRouter({
    mode: 'history',
    routes: routes
})
