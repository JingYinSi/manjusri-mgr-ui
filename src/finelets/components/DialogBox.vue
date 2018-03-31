<template>
  <div>
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <slot name="message"></slot>
    <div class="buttons">
      <button v-if="cancellable" @click="cancel()">Cancel</button>
      <button @click="ok()">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog-box',
  props: {
    command: String,
    cancellable: Boolean
  },
  methods: {
    cancel () {
      this.$emit('cancel', this.command)
    },
    ok () {
      this.$emit('ok', this.command)
    }
  }
}
</script>

<style scoped>

</style>
