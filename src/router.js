import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [//第一层路由的界面装载在app.vue的router-view中
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/index',
      name: 'index',
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component:Index
    }
  ]
})
