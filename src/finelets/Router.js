import Vue from 'vue'
import Router from 'vue-router'
import _ from 'underscore'

Vue.use(Router)

export default (config) => {
  let routes = []
  _.mapObject(config, (val, key) => {
    let route = val.component
      ? {
        path: val.path,
        name: key,
        component: val.component
      }
      : {
        path: val.path,
        name: key,
        components: val.components
      }
    if (val.children) route.children = val.children
    routes.push(route)
  })
  return new Router({
    routes: routes
  })
}
