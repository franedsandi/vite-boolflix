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
      selectedType: 'All',
      message: 'Make a research',
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
            this.message = `ERROR 404 there is no registered media with that name `;
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    startsearches() {
      if (this.selectedType === 'All') {
        this.getApi('movie');
        this.getApi('tv');
      } else if (this.selectedType === 'Movies') {
        this.getApi('movie');
        this.store.tv = [];
      } else if (this.selectedType === 'TV Series') {
        this.getApi('tv');
        this.store.movie = [];
      }
    },
    optionChange(option) {
      this.selectedType = option;
      this.startsearches(); 
    },
  },
  mounted() {
  },
};
</script>

<template>
  <div>
    <HeaderApp @startsearch="startsearches" @optionChange="optionChange"/>
    <div v-if="store.movie.length > 0 || store.tv.length > 0">
      <Cardcontainer v-if="store.movie.length > 0" title="Movies" type="movie" />
      <Cardcontainer v-if="store.tv.length > 0" title="TV Series" type="tv"/>
    </div>
    <div v-else class="container text-center py-5">
      <h3>{{ message }}</h3>
    </div>
  </div>
</template>

<style lang="scss">

@use './scss/main';
</style>