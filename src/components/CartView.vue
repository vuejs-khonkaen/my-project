<template lang="html">
  <div class="">
    <h1>Cart</h1>
    <h2>{{ sumPrice }}</h2>
    <ul>
      <li v-for="item in cart">
        {{ item.name }} {{ item.price }} x {{ item.amount }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cart', 'sumPrice'])
  }
}
</script>

<style lang="css">
</style>
