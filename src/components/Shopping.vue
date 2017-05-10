<template lang="html">
  <div class="">

    <products></products>

    <hr>

    <cart-view></cart-view>

  </div>
</template>

<script>
import Products from './Products'
import CartView from './CartView'

export default {
  components: {
    Products,
    CartView
  }
}
</script>

<style lang="css">
</style>
