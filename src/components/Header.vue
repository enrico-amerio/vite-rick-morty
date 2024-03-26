<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    },
    methods:{
      search(){
        this.store.searchParams.name = this.nameToSearch
        this.$emit('search');
        
      }
    }
    
  }
</script>


<template>
  <header>
    <div class="container text-center ">
      <h1>Rick&Morty</h1>
        <div class="d-flex"> 
          <input class="form-control me-2"  placeholder="Search by name" v-model.trim="nameToSearch" @keyup.enter="search" >
          <button class="btn btn-primary me-2" @click="search">Search</button>
          <button class="btn btn-outline-primary">Reset</button>
        </div>
    </div>
  </header>
</template>



<style lang="scss" scoped>

</style>