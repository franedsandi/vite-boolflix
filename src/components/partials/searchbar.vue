<script>
export default {
  name: 'searchbar',
}
</script>

<template>
  <div class="custom-container d-flex gap-2">
    <div class="col">
      <input 
      class="form-control" 
      type="search" 
      placeholder="Search" 
      aria-label="Search">
    </div>
    <div class="col">
      <select 
      class="form-select" 
      aria-label="Default select example">
        <option selected>All</option>
        <option value="1">Movies</option>
        <option value="2">Tv Series</option>
      </select>
    </div>
    <div class="col">
      <button 
      type="button" 
      class="btn btn-outline-secondary">
      Search
      </button>
    </div>
    
  </div>

  
</template>

<style lang="scss" scoped>
.custom-container{
  input{
    width: 20vw;
    height: 100%;
  }
  select{
    width: 100px;
    font-size: 13px;
    height: 100%;
  }
  button{
    font-size: 13px;
    height: 100%;
  }
  }
</style>