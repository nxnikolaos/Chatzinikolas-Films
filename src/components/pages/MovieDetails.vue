<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

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

      console.log(movie)
    })
    .catch(function (error) {
      console.log(error)
    })
})
</script>
<template>
  <section class="flex p-8 items-center max-w-screen-lg">
    <section class="p-4">
      <img class="max-w-xs" :src="posterUrl" />
    </section>
    <section class="text-white p-4 [&>p]:py-2 [&>p]:text-lg [&>p>span]:font-bold">
      <h2 class="text-2xl font-bold">{{ movie.original_title }}</h2>
      <p>
        Release Date : <span>{{ movie.release_date }}</span>
      </p>
      <p>
        Genres :
        <span
          class="after:content-[',_'] after:last:content-['']"
          v-for="genre in movie.genres"
          :key="genre.id"
          >{{ genre.name }}</span
        >
      </p>
      <p>{{ movie.overview }}</p>
      <p>
        Runtime : <span>{{ movie.runtime }} minutes.</span>
      </p>
      <div class="flex justify-between [&>p>span]:font-bold">
        <p>
          Popularity : <span>{{ movie.popularity }}</span>
        </p>
        <p>
          Rating : <span>{{ movie.vote_average }}</span>
        </p>
        <p>
          Vote Count : <span>{{ movie.vote_count }}</span>
        </p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'MovieDetails'
}
</script>
