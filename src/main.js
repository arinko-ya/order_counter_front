import Vue from "vue"
import Vuex from "vuex"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from "bootstrap-vue"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from "./router.js"
import view from "./stores/view.js"
import resourceStore from "./stores/resourceStore.js"
import App from "./App.vue"

Vue.use(BootstrapVue);
Vue.use(Vuex);

library.add(faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  modules: {
    view,
    resourceStore
  },
});

router.beforeEach((to, from, next) => {
  store.commit("view/start");
  setTimeout(next, 10);
});

router.afterEach(() => {
  store.commit("view/end");
});


new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
