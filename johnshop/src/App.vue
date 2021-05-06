<template>
  <div>
  <Navbar />
    <router-view/>
  </div>
</template>
<script>

    import Navbar from './components/navigation/navbar'
    export default {
    components: {
      Navbar
  }
 
 }
 
</script>
<style>

</style>

