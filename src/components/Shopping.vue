<template lang="html">
  <div class="">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products">
        {{ product.name }} {{ product.price }}
        <button @click="addToCart(product)">add to cart</button>
      </li>
    </ul>

    <hr>

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
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['products', 'cart', 'sumPrice'])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style lang="css">
</style>
