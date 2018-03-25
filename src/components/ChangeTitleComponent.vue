<template>
  <div>
    <em>Change the title of your shopping list here</em>
    <label>
      <input :value="titleVal" @input="onInput({ title: $event.target.value, id: id })"/>
    </label>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'change-title-component',
  props: ['id', 'titleVal'],
  methods: mapActions({
    onInput: 'changeTitle'
  })
}
</script>

<style scoped>

</style>
