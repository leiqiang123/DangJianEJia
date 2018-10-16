import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)




const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index'),
      meta:{
        title:'首页'
      }
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
    },
    {
      path:'/login',
      name:'login',
      component: () => import('../views/login'),
      meta:{
        title:'登录'
      }
    },
    {
      path:'/newseye',
      name:'newseye',
      component: () => import('../views/newsEyes')
    },
    {
      path:'/newsDetail',
      name:'newsDetail',
      component: () => import('../views/newsDetail')
    },
    {
      path:'/personDetail',
      name:'personDetail',
      component: () => import('../views/personDetail')
    },
    {
      path:'/upPassword',
      name:'upPassword',
      component: () => import('../views/updatePassword')
    },
    {
      path:'/interaction',
      name:'interaction',
      component: () => import('../views/interaction')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.meta.title){
//     document.title = to.meta.title
//   }
//   next()
// })

export default router