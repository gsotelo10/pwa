// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMdl from 'vue-mdl'

import routes from './routes'

Vue.use(VueMdl)
Vue.use(VueRouter)
Vue.config.productionTip = false

require('material-design-lite')


const router = new VueRouter({
  routes,
  mode: 'history',

})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
