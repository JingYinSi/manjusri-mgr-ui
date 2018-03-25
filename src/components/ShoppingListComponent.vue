<template>
  <div>
    <h2>{{ title }}</h2>
    <add-item-component v-on:add="addItem"/>
    <items-component v-bind:items="items"/>
    <div class="footer">
      <hr/>
      <change-title-component :id="id" :titleVal="title"/>
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
  props: ['id', 'title', 'items'],
  methods: {
    addItem (text) {
      this.items.push({
        text: text,
        checked: false
      })
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
