<template>
  <li :class="{ 'removed': item.checked }">
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="item.checked"> {{ item.text }}
      </label>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'item-component',
  props: ['id', 'item'],
  methods: mapActions(['updateListById']),
  watch: {
    'item.checked': function () {
      this.updateListById(this.id)
    }
  }
}
</script>

<style scoped>
  .removed label {
    color: gray;
    text-decoration: line-through;
  }
  li {
    list-style-type: none;
  }
  li span {
    margin-left: 5px;
  }
</style>
