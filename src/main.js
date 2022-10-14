import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import JQuery from 'jquery'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
//window.$ = JQuery
import 'jquery/dist/jquery.min.js';

import  'bootstrap';
// ***********************************************************************
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// **********************************************************
import VueElementLoading from "vue-element-loading";
Vue.component("VueElementLoading", VueElementLoading);
// ************************************************************

import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);















Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
