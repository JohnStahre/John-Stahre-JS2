<template>
  <div v-if="Product" class="container my-5 py-5">


      <section class="text-center">
          <h3 class="mb-5 font-weight-bold">Product Details</h3>

          <div class="row align-items-center gx-5">

              <div class="col-6">
                  <!-- <img src:="product.image" alt="" class="img-fluid"> -->
                  <img src="product.image" alt="" class="img-fluid">
              </div>

              <div class="col-lg-6 text-center text-lg-start">

                <div> 
                  <h2 class="text-center font-weight-bold">{{ product.name}}</h2>
                    <div class="mb-5">
                        <h5 class="mb-3">Description</h5>
                        <p>{{product.desc}}</p>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-center"> 
                  <h3><span class="text-warning">{{ product.price }}</span>SEK</h3>
                  <button class="btn btn-primary" >add to cart</button>
                </div>
              </div>

          </div>
      </section>

      <!-- <div v-else>
          <h3>Loading</h3>
      </div> --> 
      <!-- laddar emellan kan gör nån spinner eller nåt -->

 </div>

 
 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ProductDetails',
    props: ['id'],
    methods: {
        ...mapActions(['getOneProduct', 'cleanup', 'addProductToCart'])
    },
    computed: {
        ...mapGetters(['products'])
    },
    created() {
        this.getOneProduct(this.id)
    },
    destroyed(){
        this.cleanup()          
    }

}
</script>

<style>

</style>