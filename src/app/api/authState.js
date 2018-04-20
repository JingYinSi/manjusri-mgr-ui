import StateMachine from 'javascript-state-machine'
const fsm = new StateMachine({
  init: 'landing',
  transitions: [
    { name: 'signup', from: 'landing', to: 'signup' },
    { name: 'signin', from: 'landing', to: 'signin' },
    { name: 'signin', from: 'signup', to: 'signin' },
    { name: 'resolve', from: 'signup', to: 'signin' },
    { name: 'reject', from: 'signup', to: 'signup' },
    { name: 'resolve', from: 'signin', to: 'authed' },
    { name: 'signup', from: 'signin', to: 'signup' },
    { name: 'reject', from: 'signin', to: 'signin' },
    { name: 'signout', from: 'authed', to: 'landing' }
  ],
  methods: {
    onInvalidTransition: function (transition, from, to) {
    }
  }
})

export default fsm
