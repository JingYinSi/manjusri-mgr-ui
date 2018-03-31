<template>
  <div id="content">
    <h1>Choppy's Restaurant</h1>
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <li><router-link to="/lessons">Lessons</router-link></li>
    </ul>
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
