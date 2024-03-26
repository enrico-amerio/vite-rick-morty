<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store,
        statusToSearch: ""
      }
    },
    methods:{
      search(){
        this.store.searchParams.totPages = 0
        this.store.searchParams.page = 1
        this.store.counter = 1
        this.store.searchParams.name = this.nameToSearch
        this.store.searchParams.status = this.statusToSearch
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
          <input class="form-control me-2"  placeholder="Search by name" v-model.trim="nameToSearch" @input="search">
          <select class=" form-select" v-model="statusToSearch" @change="search" >
            <option value="" >Search by status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
    </div>
  </header>
</template>



<style lang="scss" scoped>

</style>