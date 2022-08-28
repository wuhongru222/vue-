import Vue from 'vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'
import store from './store/index'
import router from './router'
 import $ from 'jquery'
 import ElementUI from 'element-ui'


// Vue.prototype.$ = $
// Vue.prototype.jQuery = $
window.$ = $
window.jquery = $

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: '6AGLR4nqhjLxIuOU8AcQsypOqwC0CYm6'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
