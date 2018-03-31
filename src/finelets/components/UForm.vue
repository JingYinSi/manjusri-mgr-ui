<template>
  <form @submit.prevent="postSubmit">
    <div v-for="field in config.fields" :key="field.name">
      <label>{{field.label || field.name}}</label>
      <input v-if="!model" :type="field.type ? field.type : 'text'" :required="field.required"
             v-model="$data.newItem[field.name]" />
      <input v-else :type="field.type ? field.type : 'text'" :required="field.required"
             v-model="model[field.name]" />
    </div>
    <div>
      <label>Submit</label>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'u-form',
  props: {
    config: Object,
    model: Object
  },
  data: function () {
    return {
      newItem: {}
    }
  },
  computed: {
  },
  methods: {
    postSubmit () {
      this.model
        ? this.$emit('submitted', this.model)
        : this.$emit('submitted', this.newItem)
    }
  }
}
</script>

<style scoped>

</style>
