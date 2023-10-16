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
    <div class="custom-card mb-4">
      <div v-if="poster_path">
        <img :src="`https://image.tmdb.org/t/p/w342/${poster_path}`" :alt="title" class="card-image" />
      </div>
      <div v-else>
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
  height: 24vw;
  display: flex;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  h3{
    width: 100%;
    text-align: center;
    font-size:20px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
  &:hover img,
  &:hover h3
  {
    opacity: .3;
  }
  .info {
    display: none;
    position: absolute;
    top: 0;
    height: 100%;
    overflow-Y: auto;
  }
  &:hover .info {
    display: block;
  }
  
}
</style>
