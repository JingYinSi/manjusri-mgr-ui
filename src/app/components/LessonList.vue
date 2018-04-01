<template>
  <div>
    <h2>Lessons side bar</h2>
    <ul>
      <li><router-link to="/lessons/1234/">文殊心咒</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/lessons/2345/">观音心咒</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'lesson-list'
}
</script>

<style scoped>

</style>
