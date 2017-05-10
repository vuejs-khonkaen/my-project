<template lang="html">
  <div class="">
    <span v-for="album in albums">
      <router-link :to="'album/' + album.id">
        <img :src="album.picture.data.url" alt="">
      </router-link>
    </span>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      albums: []
    }
  },
  created () {
    axios.get('https://graph.facebook.com/v2.9/cupemag/albums?fields=picture,name&access_token=EAACEdEose0cBAIwSOuvHSD82CPpX56SF5SllIKUdNx326aa3tMSr8p956U7rMjZB1w6Y54p57ZBlXkJFF1GC2DoDERtCUKzE1WN3iZB7D68vHdBfZARaFIFBt3ecx35NbnlfqTO2u6rZBVBE2pqVuZAh9wpSyTR1ZANVJmwuJJmbdAMRNDZCZAkuf')
    .then(response => {
      this.albums = response.data.data
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang="css">
</style>
