<template>
  <div>Details</div>
 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ProductDetails',
    props: ['id'],
    methods: {
        ...mapActions(['getOneProduct'])
    },
    computed: {
        ...mapGetters(['product'])
    },
    created(){
        this.getOneProduct(this.id)
    }

}
</script>

<style>

</style>