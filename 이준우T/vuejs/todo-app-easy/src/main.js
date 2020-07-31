import Vue from 'vue'
import App from './App.vue'
import {
  router
} from './routes/index'



const routes = [{
    path: "/foo",
    name: "foo",
    component: Foo
  },
  {
    path: "/bar",
    name: "bar",
    component: Bar
  },
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')