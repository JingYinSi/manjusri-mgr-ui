import _ from 'underscore'

const __indexOf = (list, id) => {
  var i
  var length = list.length
  for (i = 0; i < length; i++) {
    if (list[i].id === id) return i
  }
  return -1
}
export default {
  deleteShoppingList: function (state, id) {
    var index = __indexOf(state.shoppinglists, id)
    if (index >= 0) {
      var i = 0
      var len = state.shoppinglists.length
      var left = []
      for (i; i < len; i++) {
        if (i < index) left[i] = state.shoppinglists[i]
        else if (i > index) left[i - 1] = state.shoppinglists[i]
      }
      state.shoppinglists = left
      index--
    } else {
      index = 0
    }
    state.selected = index
  },
  changeTitle (state, data) {
    const item = _.findWhere(state.shoppinglists, {id: data.id})
    item.title = data.title
  },
  populateShoppingLists (state, data) {
    state.selected = 0
    state.shoppinglists = data
  },
  updateShoppingList (state, list) {
    var i
    var length = state.shoppinglists.length
    for (i = 0; i < length; i++) {
      if (state.shoppinglists[i].id === list.id) {
        state.shoppinglists[i] = list
        return
      }
    }
  }
}
