//import './style.css';
import Vue from 'vue';
import App from './app.vue';

//document.getElementById('app').innerHTML = 'Hello webpack.';
new Vue({
    el: '#app',
    render: h=>h(App)
});