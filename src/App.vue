<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class="index===selected ? 'active' : ''" v-for="(list, index) in shoppinglists"
          role="presentation" @click="choose(index)" :key="list.id">
        <shopping-list-title-component :id="list.id" :title="list.title"/>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class="index===selected ? 'active' : ''" v-for="(list, index) in shoppinglists"
           class="tab-pane" role="tabpanel" :key="list.id">
        <shopping-list-component :list="list"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
import ShoppingListComponent from './components/ShoppingListComponent'
import store from './vuex/store'
import {mapGetters, mapActions} from 'vuex'
import _ from 'underscore'

export default {
  components: {
    ShoppingListTitleComponent,
    ShoppingListComponent
  },
  store,
  computed: mapGetters({
    selected: 'getSelected',
    shoppinglists: 'getShoppinglists'
  }),
  methods: _.extend({}, mapActions([
    'populateShoppingLists',
    'createShoppingList'
  ]), {
    choose (index) {
      if (index < 0) {
        this.$store.state.selected = 0
      }
      this.$store.state.selected = index
    },
    addShoppingList () {
      let list = {
        title: 'New Shopping List',
        items: []
      }
      this.createShoppingList(list)
    }
  }),
  mounted () {
    this.populateShoppingLists()
    // this.currentList = this.shoppinglists[0]
  }
}
</script>

<style>
  .container {
    width: 40%;
    margin: 20px auto 0 auto;
  }
</style>
