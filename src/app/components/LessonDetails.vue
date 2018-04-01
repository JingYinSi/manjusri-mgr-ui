<template>
  <div class="lesson">
    Id: {{$route.params.id}}
    名称：{{name}}
    <div>
    <router-link to="base">基本资料</router-link>
    <router-link to="statistics">统计数据</router-link>
    </div>
    <div>
      view
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lesson-details',
  components: {
  },
  data () {
    return {
      name: '功课名称'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
