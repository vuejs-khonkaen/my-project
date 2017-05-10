<template lang="html">
  <div class="">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products">
        {{ product.name }} {{ product.price }}
        <button @click="addToCart(product)">add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style lang="css">
</style>
