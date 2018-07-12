// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
// import 'font-awesome/css/font-awesome.css';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

import "./assets/css/fstpublic.less";
// 公共方法引用
import fstjs from "./assets/js/fstPublic.js";

// 视频播放插件引入配置
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


Vue.use(ElementUI);
Vue.use(fstjs);
Vue.config.productionTip = false

axios.create({
  headers: 'X-Auth-Token'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
