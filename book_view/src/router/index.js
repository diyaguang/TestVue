import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import ShopCart from "../components/ShopCart"

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld，dygstudio',
      component: HelloWorld
    },
    {
      path: '/shopcart',
      name: 'ShowCart',
      component: ShopCart
    }
  ]
})
