<script>
import {store} from '../../data/store'
  export default {
    data(){
      return{
        store
      }
    },
    props:{
      img: String,
      name: String,
      status : String,
      species: String
    }
  };
</script>

<template>
  <div class="card m-3" style="width: 18rem;">
    <img :src="img" class="card-img-top" :alt="name">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <h6 class="card-title">{{ status }}</h6>
      <h6 class="card-title">{{ species }}</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>