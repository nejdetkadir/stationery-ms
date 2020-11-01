import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import { store } from "@/store";

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.filter("currency", (val) => {
  return parseFloat(val).toLocaleString(undefined, {minimumFractionDigits: 2}) + " ₺"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
