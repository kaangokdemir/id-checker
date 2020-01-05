import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import buefy from "buefy";
import "buefy/dist/buefy.css";
import VueTheMask from 'vue-the-mask'

Vue.config.productionTip = false;
Vue.use(buefy);
Vue.use(VueTheMask);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
