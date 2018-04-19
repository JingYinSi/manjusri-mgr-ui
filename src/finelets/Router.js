import Vue from 'vue'
import Router from 'vue-router'
import _ from 'underscore'

Vue.use(Router)

export default (config) => {
  let routes = []
  _.mapObject(config, (val, key) => {
    let route = val
    route.name = key
    routes.push(route)
  })
  return new Router({
    mode: 'history',
    routes: routes
  })
}
