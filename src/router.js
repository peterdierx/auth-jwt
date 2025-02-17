import Vue    from 'vue'
import Router from 'vue-router'
import Home   from '@/views/Home'
import Signup from '@/components/Signup'
import Login  from '@/components/Login'

Vue.use( Router )

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',       name: 'home',   component: Home },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login',  name: 'login',  component: Login }
  ]
})
