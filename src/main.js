// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vpay from '@/lib/vpay'
import vpay from 'vue-vpay'

Vue.use(vpay);

Vue.config.productionTip = false

/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
