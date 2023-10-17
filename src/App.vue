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
    };
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl, {
          params: store.apiParams,
        })
        .then(function (response) {
          store.filmlist = response.data.results;
          console.log(store.filmlist); /* Can be deleted */
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  mounted() {
/*     this.getApi(); */
  },
};
</script>

<template>
  <div>
    <HeaderApp @startsearch="getApi"/>
    <Cardcontainer />
  </div>
</template>

<style lang="scss">
@use './scss/main';
</style>