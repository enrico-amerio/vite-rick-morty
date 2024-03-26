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
        console.log(this.store.searchParams.name );
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
          <input class="form-control me-2"  placeholder="Search by name" aria-label="Search" v-model.trim="nameToSearch" @keyup.enter="search" >
          <button class="btn btn-primary me-2" type="submit" @click="search">Search</button>
          <button class="btn btn-outline-primary" type="submit">Reset</button>
        </div>
    </div>
  </header>
</template>



<style lang="scss" scoped>

</style>