<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';
export default {
    data(){
      return{
        store,
      }
    },
    components: {
      Card
    }
  }
</script>


<template>
  <main>
    <Card/>
  </main>
</template>



<style lang="scss" scoped>

</style>