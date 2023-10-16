<script>
import axios from 'axios';
import { store } from './data/store'
import HeaderApp from './components/HeaderApp.vue'
import Cardcontainer from './components/Cardcontainer.vue'

export default {
  name: 'App',
  components:{
    HeaderApp,
    Cardcontainer
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getFilmApi(){
      axios.get(store.filmApiUrl)
      .then(res => {
        store.filmlist = res.data.results
        console.log(store.filmlist)/* can be deleted */
      })
      .catch(err => {
        console.log (err)
      });
    },
    getTvApi(){
      axios.get(store.tvApiUrl)
      .then(res => {
        console.log(res.data.results)
        store.tvlist = res.data.results
        console.log(store.tvlist)/* can be deleted */
      })
      .catch(err => {
        console.log (err)
      });
    }
  },
  mounted(){
    this.getFilmApi();
    this.getTvApi();
  }
}
</script>

<template>
  <HeaderApp />
  <Cardcontainer />
</template>

<style lang="scss">
@use './scss/main';
</style>