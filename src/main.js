import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router';
import Echarts from 'echarts';


Vue.use(VueRouter);

Vue.use(ElementUI);

Vue.prototype.echarts=Echarts;

Vue.use(Echarts);

//实例化vueRouter
const router = new VueRouter({
			  routes // （缩写）相当于 routes: routes
			})
//挂载


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
