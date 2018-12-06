import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})