// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui';
// import 'font-awesome/css/font-awesome.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

import "./assets/css/fstpublic.less";

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
