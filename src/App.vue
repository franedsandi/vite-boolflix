<script>
import { store } from './data/store'
import Header from './components/Header.vue'
import Cardcontainer from './components/Cardcontainer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Cardcontainer
  },
  data(){
    return{
      store,
    }
  }

}
</script>

<template>
  <Header />
  <Cardcontainer />
</template>



<style lang="scss">
@use './scss/main';
</style>