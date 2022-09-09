import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import * as echarts from 'echarts';
import VueCookies from 'vue-cookies'


axios.defaults.baseURL = 'https://u498162a27.zicp.fun';
Vue.prototype.$axios = axios;

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(VueCookies)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
