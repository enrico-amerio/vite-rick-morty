<script>
import axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import { store } from './data/store'
  export default {
    components:{
      Header,
      Main,
    },
    data(){
      return{
        store

      }
    },
    methods:{
      getApi(){
        console.log(this.store);
        axios.get(this.store.apiUrl).then(result => { console.log(result.data)})
      }
    },
    mounted(){
      this.getApi();
    }
  }
</script>

<template>
  <Header/>
  <Main/>
</template>



<style lang="scss" scoped>
@use './assets/scss/main.scss';
</style>