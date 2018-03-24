<template>
  <div>
    <div class="input-group">
      <input type="text" class="input form-control" v-on:keyup.enter="addItem" v-model="newItem"
             placeholder="add shopping list item">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" v-on:click="addItem">Add!</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-item-component',
  data: function () {
    return {
      newItem: ''
    }
  },
  props: ['items'],
  methods: {
    addItem: function () {
      var text
      text = this.newItem.trim()
      if (text) {
        this.$emit('add', this.newItem)
        this.newItem = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
