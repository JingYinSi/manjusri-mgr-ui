import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import SPA from './spa'
import routes from './app/routes'
import Router from './finelets/Router'

const router = Router(routes)

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#app',
  components: { spa: SPA }
})
