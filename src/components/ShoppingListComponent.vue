<template>
  <div id="list.id">
    <add-item-component @add="addItem"/>
    <items-component :id="list.id" :items="list.items"/>
    <div class="footer">
      <hr/>
      <change-title-component :id="list.id" :titleVal="list.title"/>
    </div>
  </div>
</template>

<script>
import AddItemComponent from './AddItemComponent'
import ItemsComponent from './ItemsComponent'
import ChangeTitleComponent from './ChangeTitleComponent'

export default {
  name: 'App',
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent
  },
  props: ['list'],
  methods: {
    addItem (text) {
      this.list.items.push({
        text: text,
        checked: false
      })
      this.$store.dispatch('updateList', this.list)
    }
  }
}
</script>

<style>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>
