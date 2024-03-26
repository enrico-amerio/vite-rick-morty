<script>
import axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Pagenav from './components/partials/Pagenav.vue';
import { store } from './data/store'
  export default {
    components:{
      Header,
      Main,
      Pagenav
    },
    data(){
      return{
        store

      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl,{
          params: store.searchParams
        }).then(result => {
        this.store.cardList = result.data.results
        this.store.searchParams.totPages = result.data.info.pages})
        .catch(error => {
          store.cardList = []
          store.searchParams.totPages = 0
          store.searchParams.error = "Nessun risultato"
        })
      },
      
    },
    mounted(){
      this.getApi();
    }
  }
</script>

<template>
    <Header @search="getApi"/>
    <Main/>
    <Pagenav @goNext="getApi" @goPrev="getApi"/>
</template>



<style lang="scss">
@use './assets/scss/main.scss';
</style>