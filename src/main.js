import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import Home from './components/Home.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [{
    name: 'Home',
    path: '/',
    component: Home
}];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
    render: h => h(App),
    router
}).$mount('#app')