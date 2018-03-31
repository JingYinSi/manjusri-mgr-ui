<template>
  <form @submit.prevent="preventSubmit">
    <div v-for="field in config.fields" :key="field.name">
      <label>{{field.label || field.name}}</label>
      <input :type="field.type ? field.type : 'text'" :required="field.required">
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
  props: ['config'],
  computed: {
  },
  methods: {
    preventSubmit () {
      console.info('fake AJAX request')
    }
  }
}
</script>

<style scoped>

</style>
