<template>
  <form @submit.prevent="preventSubmit">
    <div v-for="field in config.fields" :key="field.name">
      <label>{{field.label || field.name}}</label>
      <input :type="field.type ? field.type : 'text'" :required="field.required"
             v-model="$data.newItem[field.name]" />
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
  data: function () {
    return {
      newItem: {}
    }
  },
  computed: {
  },
  methods: {
    preventSubmit () {
      this.$emit('submited', this.newItem)
    }
  }
}
</script>

<style scoped>

</style>
