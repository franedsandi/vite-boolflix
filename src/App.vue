<script>
import axios from 'axios';
import { store } from './data/store';
import HeaderApp from './components/HeaderApp.vue';
import Cardcontainer from './components/Cardcontainer.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    Cardcontainer,
  },
  data() {
    return {
      store,
      message: 'make a research',
    };
  },
  methods: {
    getApi(type) {
      axios.get(`${store.apiUrl}/${type}`, {
          params: store.apiParams,
        })
        .then((response) => {
          store[type] = response.data.results;
          console.log('store.movie', store.movie); 
          console.log('store.tv', store.tv);
          if(store[type].length === 0){
            this.message = 'not found';
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    startsearches() {
      this.getApi('movie');
      this.getApi('tv');
    }
  },
  mounted() {
  },
};
</script>

<template>
  <div>
    <HeaderApp @startsearch="startsearches"/>
    <Cardcontainer v-if="store.movie.length > 0" title="Movies" type="movie" />
    <h3 v-else> {{message}} </h3>
    <Cardcontainer v-if="store.tv.length > 0" title="TV Series" type="tv"/>
  </div>
</template>

<style lang="scss">
@use './scss/main';
</style>