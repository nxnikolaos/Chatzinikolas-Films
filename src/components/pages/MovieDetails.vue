<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MovieOverview from '../MovieOverview.vue'

const route = useRoute()
const pageId = route.params.id
const movie = ref([])
const posterUrl = ref('')

onMounted(() => {
  const queryParams = {
    paramId: Number(pageId),
    actors: true
  }
  axios({
    method: 'get',
    // url: `/api/movies/id`,
    url: `https://fontaine-films.onrender.com/api/movies/id`,
    params: queryParams
  })
    .then(function (response) {
      const results = response.data
      movie.value = results
      posterUrl.value = `https://image.tmdb.org/t/p/w342` + movie.value.poster_path
    })
    .catch(function (error) {
      console.log(error)
    })
})
</script>
<template>
  <MovieOverview :post="movie" :imgUrl="posterUrl"></MovieOverview>
</template>

<script>
export default {
  name: 'MovieDetails'
}
</script>
