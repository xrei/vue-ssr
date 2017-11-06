import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = file => () => import(`../views/${file}.vue`)

const routes = [
  {
    path: '/',
    name: 'index',
    component: _import('Home')
  },

  { path: '*', name: 'NotFound404', component: _import('NotFound') }
]

export function createRouter () {
  return new Router({
    routes,
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 })
  })
}
