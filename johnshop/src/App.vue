<template>
  <div>
  <Navbar />
    <router-view/>
  </div>
</template>


<script>

    import Navbar from './components/navigation/Navbar'
    import { mapActions } from 'vuex'
    export default {
    components: {
      Navbar
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
 
 }
 
</script>
<style>

</style>

