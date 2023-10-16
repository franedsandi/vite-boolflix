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
    <div :class="['custom-card mb-4' , {'no-poster': !poster_path}]">
      <div v-if="poster_path" class="image">
        <img :src="`https://image.tmdb.org/t/p/w342/${poster_path}`" :alt="title" class="card-image" />
      </div>
      <div v-else class="image">
        <h3>{{ title }}</h3>
      </div>
      <div class="info p-3">
        <div class="title mb-3">
          Title: {{ title }}
        </div>
        <div class="original_title mb-3">
          Original Title: {{ original_title }}
        </div>
        <div class="lenguaje mb-3">
          Language: {{ language }}
        </div>
        <div class="vote_average mb-3">
          Vote: {{ vote }}
        </div>
        <div class="overview">
          Overview: {{ overview }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-card {
  position: relative;
  color: white;
  min-height: 240px;
  object-fit: fill;
  &:hover img,
  &:hover h3
  {
    opacity: .3;
  }

  .image{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  &:hover .info {
    display: block;
  }
  .info {
    color: white;
    display: none;
    position: absolute;
    top: 0;
    height: 100%;
    overflow: auto;
    .overview {
      height: 100%;
    }
  }
  img, 
  h3{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h3{
    color: black;
  }
  &.no-poster {
    background-color: grey;
  }
}
</style>
