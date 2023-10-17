<script>
import {store} from '../data/store'
import card from './partials/card.vue'

export default {
  name: 'CardContainer',
  props:{
    title:String,
    type:String
  },
  components:{
    card,
  },
  data(){
    return{
      store,
    }
  },
  mounted(){
  }
}
</script>

<template>
  <div class="container my-5">
    <h1 class="mb-4">{{title}} ( {{ store[type].length }} )</h1>
    <div 
    class="row"
    >
      <card 
      v-for="item in  store[type]"
      :key="item.id"
      :title="item.title || item.name "
      :original_title="item.original_title || item.original_name"
      :vote="item.vote_average"
      :language="item.original_language"
      :overview="item.overview"
      :poster_path="item.poster_path" />
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>