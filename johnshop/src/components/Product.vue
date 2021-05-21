<template>
  <div class="col mb-4">
      <div class="card h-100 p-3">
          <img :src="product.image" class="card-img-top" alt="">
      
      <!-- så vi kan hämta den och skriva ut den -->

      <div class="card-body">
          <h4 class="card-title">{{ product.name }}</h4>
          <p class="card-text">{{ product.short }}</p>
          <!-- <p class="card-text"> {{ product.desc }}</p> -->
        </div>¨
       <div class="input-group row">  
        <button class="btn btn-primary col-9 ms-" @click="addProductToCart({ product, quantity })">Add to cart</button>
        <input type="number" class="form-contol col-3 border-secondary" v-model="quantity">
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
    name: "ProductCard",
props: ['product'],
data() {
    return {
        quantity:1
    }
}

}
</script>

<style>

</style>