<template lang="html">
  <div class="">
    <h1>{{ $route.params.id }}</h1>
    <img v-for="image in images" :src="image.images[2].source" alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      images: []
    }
  },
  created () {
    let id = this.$route.params.id
    axios.get('https://graph.facebook.com/v2.9/' + id + '/photos?fields=images&access_token=EAACEdEose0cBAIwSOuvHSD82CPpX56SF5SllIKUdNx326aa3tMSr8p956U7rMjZB1w6Y54p57ZBlXkJFF1GC2DoDERtCUKzE1WN3iZB7D68vHdBfZARaFIFBt3ecx35NbnlfqTO2u6rZBVBE2pqVuZAh9wpSyTR1ZANVJmwuJJmbdAMRNDZCZAkuf')
    .then(response => {
      this.images = response.data.data
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang="css">
img {
  width: 300px;
}
</style>
