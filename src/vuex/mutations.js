import _ from 'underscore'

export default {
  changeTitle (state, data) {
    const item = _.findWhere(state.shoppinglists, {id: data.id})
    item.title = data.title
  }
}
