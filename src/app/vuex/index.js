import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import authState from '../api/authState'

Vue.use(Vuex)
const state = {
  appTitle: '静音寺业务管理系统',
  authState: authState,
  user: null,
  error: null,
  loading: false
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
