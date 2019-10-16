import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Routers from './router'
import './style.css'

import product_data from './product'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);


const RouterConfig = {
  mode: 'history',
  routes: Routers
};

const router = new VueRouter(RouterConfig);


router.beforeEach((to,from,next)=>{
  window.document.title = to.meta.title;
  next();
});

const store = new Vuex.Store({
  state: {
    productList: [],
    cartList: []
  },
  getters: {},
  mutations: {
    setProductList(state,data){
      state.productList = data;
    }
  },
  actions: {
    getProductList(context){
      setTimeout(()=>{
        context.commit('setProductList',product_data);
      },500);
    }
  }
});

new Vue({
  render: h => h(App),
  router: router,
  store: store

}).$mount('#app')
