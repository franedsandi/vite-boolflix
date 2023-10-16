<script>
import {store} from '../data/store'
import card from './partials/card.vue'

export default {
  name: 'CardContainer',
  components:{
    card,
  
  },
  data(){
    return{
      store,
    }
  },
  mounted(){
    console.log(store.filmlist) /* can be deleted */
  }
}
</script>

<template>
  <div class="container film my-5">
    <h1 class="mb-3">Movies ({{ store.filmlist.length }})</h1>
    <div class="row">
      <card 
      v-for="film in store.filmlist"
      :key="film.id"
      :title="film.title"
      :original_title="film.original_title"
      :vote="film.vote_average"
      :language="film.original_language"
      :overview="film.overview"
      :poster_path="film.poster_path" />
    </div>
  </div>
  <div class="container tv my-5">
    <h1 class="mb-3">TV Series ({{ store.tvlist.length }})</h1>
    <div class="row">
      <card 
      v-for="series in store.tvlist"
      :key="series.id"
      :title="series.name"
      :original_title="series.original_name"
      :vote="series.vote_average"
      :language="series.original_language"
      :overview="series.overview"
      :poster_path="series.poster_path" />
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>