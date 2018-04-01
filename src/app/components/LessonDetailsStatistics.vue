<template>
<div>
  <div>This is lesson details statitics view</div>
  name: String,<br>
  desc: String,<br>
  img: String,<br>
  unit: {type: String, default: '遍'},<br>
  begDate: Date,<br>
  endDate: {type: Date, default: new Date(3000, 11, 31)},<br>
  target: Number,<br>
  state: {type: String, default: 'open'}<br>
</div>
</template>

<script>
export default {
  name: 'lesson-deatils-base'
}
</script>

<style scoped>

</style>
