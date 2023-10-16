<script>
export default {
  name: 'selecttype',
}
</script>

<template>
<select 
class="form-select" 
aria-label="Default select example">
  <option selected>All</option>
  <option value="1">Movies</option>
  <option value="2">Tv Series</option>
</select>
</template>

<style lang="scss" scoped>
select{
  font-size: 13px;
}
</style>