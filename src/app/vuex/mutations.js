export default {
  setAuthState (state, val) {
    state.authState[val]()
  },
  setUser (state, val) {
    state.user = val
  },
  setError (state, val) {
    state.error = val
  },
  setLoading (state, val) {
    state.loading = val
  }
}
