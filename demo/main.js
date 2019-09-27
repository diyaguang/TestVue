//import './style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

Vue.use(VueRouter);
//document.getElementById('app').innerHTML = 'Hello webpack.';
const Routers = [
    {
        path:'/index',
        component: (resolve)=>require(['./views/index.vue'],resolve)
    },
    {
        path: '/about',
        component: (resolve) => require(['./views/about.vue'],resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];
const RouterConfig = {
    mode: 'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig);
new Vue({
    el: '#app',
    router: router,
    render: h=>h(App)
});
