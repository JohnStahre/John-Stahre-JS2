<template>
  <div class="col mb-5">
      <div class="card h-100 p-3">
          <img :src="product.image" class="card-img-top" alt="">
      </div>
      <!-- så vi kan hämta den och skriva ut den -->
      
  </div>
</template>

<script>
export default {
    name: "ProductCard",
props: ['product']

}
</script>

<style>

</style>