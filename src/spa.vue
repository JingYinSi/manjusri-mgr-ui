<template>
  <div id="content">
    <h1>Choppy's Restaurant</h1>
    <ul>
      <li><router-link :to="{name: 'Home'}" exact>Home</router-link></li>
      <li><router-link :to="{name: 'Lessons'}">Lessons</router-link></li>
    </ul>
    <router-view name="sidebar"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'spa'
}
</script>

<style scoped>
  a.router-link-active {
    background-color: gainsboro;
  }
</style>
