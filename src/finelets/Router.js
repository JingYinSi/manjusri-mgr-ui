import Vue from 'vue'
import Router from 'vue-router'
import _ from 'underscore'

Vue.use(Router)

export default (config) => {
  let routes = []
  _.mapObject(config, (val, key) => {
    val.component
      ? routes.push({
        path: val.path,
        name: key,
        component: val.component
      })
      : routes.push({
        path: val.path,
        name: key,
        components: val.components
      })
  })
  return new Router({
    routes: routes
  })
}
