<script>
import { store } from '../data/store';

export default {
  name: 'HeaderApp',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="headerapp">
    <div class="container d-flex justify-content-between">
      <div class="logo">
          <img src="img/logo-boolflix.png" alt="logo-boolflix">
      </div>
      <div class="searchbar">
        <div class="custom-container d-flex gap-2">
          <input 
          class="form-control" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          v-model.trim="store.apiParams.query">
          <select 
          class="form-select" 
          aria-label="Default select example">
            <option selected>All</option>
            <option value="1">Movies</option>
            <option value="2">Tv Series</option>
          </select>
          <button 
          type="button" 
          class="btn btn-outline-secondary"
          @click="$emit('startsearch')">
            Search
          </button> 
        </div>
      </div>
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
    img{
      height: 100%;
    }
  }
}
</style>