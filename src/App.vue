<template>
  <div id="app" class="container">
    <h2>{{ title }}</h2>
    <add-item-component :items="items"></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr/>
      <change-title-component v-model="title"></change-title-component>
    </div>
  </div>
</template>

<script>
import AddItemComponent from './components/AddItemComponent'
import ItemsComponent from './components/ItemsComponent'
import ChangeTitleComponent from './components/ChangeTitleComponent'

export default {
  name: 'App',
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent
  },
  data () {
    return {
      title: '静音寺业务管理系统',
      items: [
        {text: 'Bananas', checked: true},
        {text: 'Apples', checked: false}
      ]
    }
  },
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
  .container {
    width: 40%;
    margin: 60px auto 0px auto;
  }
</style>
