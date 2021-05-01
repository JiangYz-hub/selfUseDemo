import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import login from '../views/login'
import sqlGeneration from '../views/sqlGeneration'
import layout from '../components/layout'

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sqlGeneration',
      name: 'sqlGeneration',
      component: sqlGeneration
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
  ]
})
