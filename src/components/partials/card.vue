<script>
export default {
  name: 'filmcard',
  props:{
    title: String,
    original_title: String,
    vote: String,
    overview: String,
    poster_path: String,
    language: String
  }
}
</script>

<template>
  <div class="col-3">
    <div class="custom-card mb-5">
      <img :src="`https://image.tmdb.org/t/p/w342/${poster_path}`" :alt="title">
      <div class="info p-3">
        <div class="title mb-3">
          Title: {{title}}
        </div>
        <div class="original_title mb-3">
          Original Title: {{original_title}}
        </div>
        <div class="lenguaje mb-3">
          Language: {{language}}
        </div>
        <div class="vote_average mb-3">
          Vote: {{vote}}
        </div>
        <div class="overview">
          Overview: {{ overview }}
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.custom-card{
  position: relative;
  color: white;
  min-height: 240px;
  &:hover .info{
    display: block;
  }
  &:hover img{
    opacity: .3
  }
  .info{
    color: white;
    display: none;
    position: absolute;
    top:0;
    height: 100%;
    overflow: auto;
    .overview{
      height: 100%;
    }
  }
  img{
    width: 100%;
  }
}


</style>