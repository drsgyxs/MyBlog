import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Select, Pagination, ConfigProvider } from 'ant-design-vue';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Select);
Vue.use(Pagination);
Vue.use(ConfigProvider);
// Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
