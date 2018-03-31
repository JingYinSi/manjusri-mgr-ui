import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import SPA from './spa'
import Home from './components/app/Home'
import Lessons from './components/app/Lessons'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/lessons', component: Lessons }
  ]
})

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#app',
  components: { spa: SPA }
})
