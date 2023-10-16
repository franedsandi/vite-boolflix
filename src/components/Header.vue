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
  <div class="header">
    <div class="container d-flex justify-content-between">
      <logo />
      <div class="searchzone d-flex gap-3">
        <search />
        <selecttype />
        <bottons />
      </div> 
    </div>
  </div>

</template>

<style lang="scss" scoped>
.header{  
  color: white;
  background-image: linear-gradient(grey, black);
  .container{
  height: 50px;
  padding: 10px 0px;

}}

</style>