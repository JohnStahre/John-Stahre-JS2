
<template>
  <div class="container mt-5">
      <div class="row row-cols-1 row-cols-md-3">
          <!-- loopa ut och skapar en product i components och lägger till den i vår router-->
          <!-- skickar in en produkt och då får vi ta emot den i product.vue -->
         <Product v-for="product in products" :key="product._id" :product="product" />

      </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
// hämtar product från sökadressen nedan
import Product from '../components/Product'
export default {
  components: {
    Product
  },
computed: {
  ...mapGetters(['products'])
}
}
</script>

<style>

</style>