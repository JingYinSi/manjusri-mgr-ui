<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li v-bind:class="index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation" :key="list.id">
        <a v-bind:href="'#' + list.id" v-bind:aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-bind:class="index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" v-bind:id="list.id"
           class="tab-pane" role="tabpanel" :key="list.id">
        <shopping-list-component :id="list.id" v-bind:title="list.title" v-bind:items="list.items"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent'
import store from './vuex/store'
import { mapGetters } from 'vuex'

export default {
  components: {
    ShoppingListComponent
  },
  store,
  computed: mapGetters({
    shoppinglists: 'getShoppinglists'
  })
}
</script>

<style>
  .container {
    width: 40%;
    margin: 20px auto 0 auto;
  }
</style>
