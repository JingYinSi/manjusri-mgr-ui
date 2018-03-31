import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import Lessons from './components/lessons'

Vue.use(VueRouter)

const Home = { template: '<div>Welcome to Choppy\'s</div>' }
const Menu = { template: '<div>Today we have cookies</div>' }

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/lessons', component: Lessons }
  ]
})

// eslint-disable-next-line no-new
new Vue({
  router,
  el: 'app',
  components: { App }
})
