<script>
import logo from './partials/logo.vue';
import searchbar from './partials/searchbar.vue';

export default {
  name: 'HeaderApp',
  components:{
    logo,
    searchbar,

  },
  data(){
    return{
    }
  }
}
</script>

<template>
  <div class="headerapp">
    <div class="container d-flex justify-content-between">
      <logo />
      <searchbar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headerapp{  
  color: white;
  background-image: linear-gradient(rgb(90, 90, 90), black);
  .container{
    height: 50px;
    padding: 10px 0px;
  }
}
</style>