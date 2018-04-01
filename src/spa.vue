<template>
  <div id="content">
    <h1>Choppy's Restaurant</h1>
    <ul>
      <li><router-link :to="{name: 'Home'}" exact>Home</router-link></li>
      <li><router-link :to="{name: 'Lessons'}">Lessons</router-link></li>
    </ul>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
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
  .v-enter-active, .v-leave-active {
    transition: opacity .5s;
  }
  .v-enter, .v-leave-active {
      opacity: 0
  }
</style>
