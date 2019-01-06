import Vue from "vue"
import VueRouter from "vue-router"

import Item from "./pages/Item.vue"
import Genre from "./pages/Genre.vue"
import Counter from "./pages/Counter.vue"
// import OrderHistory from "./pages/OrderHistory.vue"
import DashBoard from "./pages/DashBoard.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path: "/", component: DashBoard },
    { path: "/counter", component: Counter },
    // { path: "/order-history", component: OrderHistory },
    { path: "/item", component: Item },
    { path: "/genre", component: Genre },
  ]
});

export default router
