import Vue from 'vue';
import App from './App';

Vue.prototype.$chrome = chrome;

/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App),
});
