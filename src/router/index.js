import Vue from 'vue'
import Router from 'vue-router'
import ListUsers from '@/components/ListUsers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListUsers',
      component: ListUsers
    }
  ]
})
