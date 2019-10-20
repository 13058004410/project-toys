import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'

import yourHeader from './components/yourHeader'

//引入element-ui组件库及其样式文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//1.5：引入axios库
import axios from 'axios'
//1.6：配置请求时保存seesion信息
axios.defaults.withCredentials=true
//1.7:配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
//注意：地址栏请务必输入 ：
//http://127.0.0.1:8080/
//如果输入：http://localhost 报错
//1.8:注册axios
Vue.prototype.axios = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.component("my-header",myHeader)
Vue.component('my-footer',myFooter)
Vue.component('your-header',yourHeader)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
