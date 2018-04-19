import auth from '@/app/api/auth'
import router from '../routes'

function __signUp (id, pwd) {
  return auth.userSignUp(id, pwd)
    .catch(err => {
      return Promise.reject(new Error('注册失败', err))
    })
}

function __signIn (id, pwd) {
  return auth.userSignIn(id, pwd)
    .catch(err => {
      return Promise.reject(new Error('登录失败', err))
    })
}

function __checkUser (func, commit, data) {
  commit('setLoading', true)
  return func(data.email, data.password)
    .then(user => {
      commit('setAuthState', 'resolve')
      commit('setUser', user)
      commit('setLoading', false)
      commit('setError', null)
    })
    .catch(error => {
      commit('setAuthState', 'reject')
      commit('setError', error.message)
      commit('setLoading', false)
      return Promise.reject(error)
    })
}

export default {
  toSignIn ({commit}, data) {
    return commit('setAuthState', 'signin')
  },
  toSignUp ({commit}, data) {
    return commit('setAuthState', 'signup')
  },
  userSignIn ({commit}, data) {
    return __checkUser(__signIn, commit, data)
  },
  userSignUp ({commit}, data) {
    return __checkUser(__signUp, commit, data)
  },
  userSignOut ({commit}, data) {
    commit('setAuthState', 'signout')
    commit('setUser', null)
    router.push({name: 'Landing'})
  }
}
