require('./bootstrap');

window.Vue = require('vue');

// import dependecies tambahan
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMeta from 'vue-meta'
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
  })
Vue.use(VueRouter,VueAxios,Axios);
// import file
import App from './components/App.vue';
import Home from './components/Home.vue';

// membuat router
const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
]
const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount("#app");