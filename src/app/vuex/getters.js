
export default {
  maySignUp (state) {
    let s = state.authState.state
    return (s === 'landing' || s === 'signin')
  },
  maySignIn (state) {
    let s = state.authState.state
    return (s === 'signup' || s === 'landing')
  },
  isAuthed (state) {
    let s = state.authState.state
    return s === 'authed'
  }
}
