<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>


<template>
  <header>
    <div class="container text-center ">
      <h1>Rick&Morty</h1>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        
        <button class="btn btn-primary me-2" type="submit">Search</button>
        <button class="btn btn-outline-primary" type="submit">Reset</button>
      </form>
    </div>
  </header>
</template>



<style lang="scss" scoped>
h1{
 
}
</style>