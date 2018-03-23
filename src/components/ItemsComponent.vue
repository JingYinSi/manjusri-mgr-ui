<template>
  <div>
    <item-component v-for="item in items" :item="item" :key="item.text"></item-component>
  </div>
</template>

<script>

import ItemComponent from './ItemComponent'

export default {
  name: 'items-component',
  components: {
    ItemComponent
  },
  props: ['items']
}
</script>

<style scoped>

</style>
