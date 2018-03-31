<template>
  <div>Name:{{name}}<br>Phone:{{phone}}</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'lessons',
  components: {
  },
  data () {
    return {
      name: undefined,
      phone: undefined
    }
  },
  methods: {
  },
  beforeRouteEnter (to, from, next) {
    axios.post('https://schematic-ipsum.herokuapp.com/', {
      'type': 'object',
      'properties': {
        'name': {
          'type': 'string',
          'ipsum': 'name'
        },
        'phone': {
          'type': 'string',
          'format': 'phone'
        }
      }
    }).then(response => {
      next(vm => {
        vm.name = response.data.name
        vm.phone = response.data.phone
      })
    })
  }
}
</script>

<style scoped>
</style>
