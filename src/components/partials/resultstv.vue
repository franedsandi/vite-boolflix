<script>
import {store} from '../../data/store'
export default {
  name: 'resultstv',
  data(){
    return{
      store,
    }
  },
  computed:{
    resultstv () {
      if(store.tvlist.length > 0){
        return 'TV Series (' + store.tvlist.length +')'
      }
      return ''
    }
  }
}
</script>

<template>
  <h1 class="mb-3">{{ resultstv }}</h1>
</template>
<style>

</style>
