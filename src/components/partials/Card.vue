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
  <div class="card m-3 text-center " style="width: 18rem;">
    <img :src="img" class="card-img-top" :alt="name" tabindex="0">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-title">{{ status }}</p>
      <p class="card-title">{{ species }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  // background-color:transparent;
  border: 0px;
  background-color: rgba(0,124,185, .05);
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  .card-body{
    margin-top:20px;
    border-radius: 10px;
    h5{
      padding-bottom: 10px;
      border-bottom: 1px solid black;
    }
  }
  img{
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
      transition: 1.2s;  
    &:hover{
      box-shadow: 0px 0px 0px rgba(255,255,255,0);
    }
    &:focus{
      transform:  scale(1.2);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    }
  }
}
</style>