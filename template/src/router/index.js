import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// use this dynamic import if you want to split
// your code on chunks
// if don't then use import comp from '...' as usual
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
