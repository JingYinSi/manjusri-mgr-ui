import Home from './components/Home'
import Landing from './components/Landing'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Router from '../finelets/Router'

var routes = {
  Landing: {path: '/', component: Landing, meta: { requiresAuth: false }},
  Home: {path: '/home', component: Home, meta: { requiresAuth: true }},
  Signin: {path: '/signin', component: Signin, meta: { requiresAuth: false }},
  Signup: {path: '/signup', component: Signup, meta: { requiresAuth: false }}
}

var router = Router(routes)
export default router
