	
import { reactive } from 'vue';


export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardList: [],
  counter: 1,
  searchParams: {
    name: "",
    status:"",
    error: "",
    page: 1,
    totPages: 0
  }
})