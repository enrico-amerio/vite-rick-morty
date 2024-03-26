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
    <div v-if="this.store.cardList.length > 0" class="container d-flex flex-wrap justify-content-center ">
      <Card v-for="card in this.store.cardList" :key="card.id"
        :img="card.image"
        :name="card.name"
        :status="card.status"
        :species="card.species"
      />
    </div>
    <div v-else class="text-center mt-4 ">
      <h1>{{ this.store.searchParams.error }}</h1>
    </div>
  </main>
</template>



<style lang="scss" scoped>

</style>