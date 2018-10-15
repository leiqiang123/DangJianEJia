import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index')
    },
    {
      path:'/notice',
      name:'notice',
      component: () => import('../views/notice')
    },
    {
      path:'/person',
      name:'person',
      component: () => import('../views/person')
    }
  ]
})
