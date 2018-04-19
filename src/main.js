import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import router from './app/routes'
import store from './app/vuex'
import VueSessionStorage from 'vue-sessionstorage'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueSessionStorage)

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  el: '#app',
  components: { app: App },
  watch: {
    '$route': 'checkLogin' // 监听路由检查登录
  },
  created () {
    this.checkLogin()
  },
  methods: {
    signined () {
      let exist = this.$session.exists('session')
      return exist
    },
    checkLogin () {
      const requiresAuth = this.$route.matched.some(record => record.meta.requiresAuth)
      // 检查是否存在session
      if (requiresAuth && !this.signined()) {
        // 如果没有登录状态则跳转到登录页
        return this.$router.push({name: 'Landing'})
      }
      return this.$router.push({name: this.$router.currentRoute.name})
    }
  }
})
