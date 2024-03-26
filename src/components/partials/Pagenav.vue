<script>
import {store} from '../../data/store'
  export default {
    data(){
      return{
        store
      }
    },
    methods:{
      nextPage(){
        this.store.searchParams.page++
        this.store.counter++
        this.$emit('goNext')
        window.scrollTo(0,0);
      },
      prevPage(){
        this.store.searchParams.page--
        this.store.counter--
        this.$emit('goPrev')
        window.scrollTo(0,0);
      },
    }
    
  }
</script>

<template>
  <div v-if="this.store.searchParams.totPages > 0" class="container d-flex justify-content-center align-content-center pagenav">
    <p>Pagina {{ this.store.counter }} di {{ this.store.searchParams.totPages }}</p>
    <button v-if="this.store.searchParams.page > 1" @click="prevPage" class="btn button me-2">&lt;</button>
    <button v-if="this.store.searchParams.totPages != this.store.counter" @click="nextPage" class="btn button">&gt;</button>
  </div>
</template>

<style lang="scss" scoped>

  p{
    margin: 10px 10px 0 0;
  }
  .button{
    border: 0px;
    background-color: rgba(0,124,185, 0.05);
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

</style>