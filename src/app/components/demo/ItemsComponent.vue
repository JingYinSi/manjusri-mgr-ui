<template>
  <div>
    <item-component v-for="item in items" :id="id" :item="item" :key="item.text"/>
  </div>
</template>

<script>

import ItemComponent from './ItemComponent'

export default {
  name: 'items-component',
  components: {
    ItemComponent
  },
  props: ['id', 'items']
}
</script>

<style scoped>

</style>
