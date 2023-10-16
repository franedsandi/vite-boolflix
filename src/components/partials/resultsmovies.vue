<script>
import {store} from '../../data/store'
export default {
  name: 'resultsmovies',
  data(){
    return{
      store,
    }
  },
  computed:{
    resultsmovies () {
      if(store.filmlist.length > 0){
        return 'Movies (' + store.filmlist.length +')'
      }
      return ''
    }
  }
}
</script>

<template>
  <h1 class="mb-3">{{ resultsmovies }}</h1>
</template>
<style>

</style>
