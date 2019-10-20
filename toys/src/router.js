import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import login from './views/login'
import gaodi from './views/gaodi'
import about from './views/about'
import contact from './views/contact'



Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path:'/',component:index
    },
    {
      path:'/index',
      component:index
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/gaodi',
      component:gaodi
    },
    {
      path:'/about',
      component:about
    },
    {
      path:'/contact',
      component:contact
    }
     
  ]
})
