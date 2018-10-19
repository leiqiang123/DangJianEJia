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
    },
    {
      path:'/register',
      name:'register',
      component: () => import('../views/register')
    },
    {
      path:'/life',
      name:'life',
      component: () => import('../views/life')
    },
    {
      path:'/auditStatus',
      name:'auditStatus',
      component: () => import('../views/auditStatus')
    },
    {
      path:'/score',
      name:'score',
      component: () => import('../views/score')
    },
    {
      path:'/scoreDetail',
      name:'scoreDetail',
      component: () => import('../views/scoreDetail')
    },
    {
      path:'/updatePersonDetail',
      name:'updatePersonDetail',
      component: () => import('../views/updatePersonDetail')
    },
    {
      path:'/partyToday',
      name:'partyToday',
      component: () => import('../views/partyToday')
    },
    {
      path:'/interactionReply',
      name:'interactionReply',
      component: () => import('../views/interactionReply')
    },
    {
      path:'/findOrgMap',
      name:'findOrgMap',
      component: () => import('../views/findOrgMap')
    },
    {
      path:'/anytimephoto',
      name:'anytimephoto',
      component: () => import('../views/anytimephoto')
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