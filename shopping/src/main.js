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

//将数组中的数据去重处理
function getFilterArray(array) {
  const res=[];
  const json = {};
  for(let i=0;i<array.length;i++){
    const _self = array[i];
    if(!json[_self]){
      res.push(_self);
      json[_self] = 1;
    }
  }
  return res;
}

const store = new Vuex.Store({
  state: {
    productList: [],
    cartList: []
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item=>item.brand);
      return getFilterArray(brands);
    },
    colors: state => {
      const colors = state.productList.map(item=>item.color);
      return getFilterArray(colors);
    }
  },
  mutations: {
    setProductList(state,data){
      state.productList = data;
    },
    //添加到购物车
    addCart(state,id){
      const idAdded = state.cartList.find(item=>item.id === id);
      if(idAdded){
        idAdded.count++;
      }else{
        state.cartList.push({
          id:id,
          count:1
        })
      }
    },
    //修改商品数量
    editCartCount(state,payload){
      const product = state.cartList.find(item=>item.id === payload.id);
      product.count += payload.count;
    },
    deleteCart(state,id){
      const index = state.cartList.findIndex(item=>item.id === id);
      state.cartList.splice(index,1);
    },
    emptyCart(state){
      state.cartList = [];
    }
  },
  actions: {
    getProductList(context){
      setTimeout(()=>{
        context.commit('setProductList',product_data);
      },500);
    },
    buy(context){
      return new Promise(resolve=>{
        setTimeout(()=>{
          context.commit('emptyCart');
          resolve();
        },500)
      });
    }
  }
});

new Vue({
  render: h => h(App),
  router: router,
  store: store

}).$mount('#app')
