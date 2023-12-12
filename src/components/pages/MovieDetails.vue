<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import MovieOverview from '../MovieOverview.vue'
import MovieCast from '../MovieCast.vue'

const route = useRoute()
const pageId = ref(route.params.id)
const movie = ref([])
const posterUrl = ref('')
const imgPath = 'https://image.tmdb.org/t/p/w185'

watch(
  () => route.params.id,
  (newPageId) => {
    fetchData(newPageId)
  }
)

const fetchData = (newPageId) => {
  const queryParams = {
    paramId: Number(newPageId),
    actors: true
  }
  axios({
    method: 'get',
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
}

onMounted(() => {
  fetchData(pageId.value)
})
</script>
<template>
  <div class="border-2 p-8 rounded-xl bg-neutral-700">
    <MovieOverview :post="movie" :imgUrl="posterUrl"></MovieOverview>
    <MovieCast :post="movie" :imgUrl="imgPath"></MovieCast>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails'
}
</script>
