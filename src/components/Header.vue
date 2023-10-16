<script>
import logo from './partials/logo.vue';
import search from './partials/search.vue';
import selecttype from './partials/selecttype.vue';
import bottons from './partials/bottons.vue';

export default {
  name: 'header',
  components:{
    logo,
    search,
    selecttype,
    bottons,
  },
  data(){
    return{
    }
  }

}
</script>

<template>
  <h1>HEADER</h1>
  <logo />
  <search />
  <selecttype />
  <bottons />

</template>

<style>

</style>