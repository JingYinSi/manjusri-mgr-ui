import api from '../api/index'
import _ from 'underscore'

export default {
  removePage (store, index) {
    store.commit('removePage', index)
  },
  changeTitle (store, data) {
    store.state.shoppinglists.forEach((list, index) => {
      if (list.id === data.id) {
        list.title = data.title
        return api.updateShoppingList(list)
          .then(response => {
            store.commit('changeTitle', data)
          })
      }
    })
  },
  populateShoppingLists (store) {
    return api.fetchShoppingLists()
      .then(response => {
        store.commit('populateShoppingLists', response.data)
      })
  },
  updateList (store, list) {
    return api.updateShoppingList(list)
      .then(response => {
        store.commit('updateShoppingList', response.data)
      })
  },
  updateListById (store, id) {
    var list = _.findWhere(store.state.shoppinglists, {id: id})
    return api.updateShoppingList(list)
  },
  createShoppingList: (store, shoppinglist) => {
    return api.addNewShoppingList(shoppinglist).then(() => {
      store.dispatch('populateShoppingLists')
    })
  },
  deleteShoppingList: (store, id) => {
    api.deleteShoppingList(id).then(() => {
      store.commit('deleteShoppingList', id)
    })
  }
}
