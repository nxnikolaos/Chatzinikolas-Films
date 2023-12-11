<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
const input = ref('')
const results = ref([])

const fetchData = (value) => {
  const queryParams = {
    param1: value
  }

  axios({
    method: 'get',
    url: `https://fontaine-films.onrender.com/api/movies/search`,
    params: queryParams
  })
    .then(function (response) {
      const resultsq = response.data.results.filter((movie) => {
        return value && movie && movie.title && movie.title.toLowerCase().includes(value)
      })
      results.value = resultsq.slice(0, 8)
      console.log(results)
    })
    .catch(function (error) {
      console.error(error)
    })
}

onMounted(() => {
  watch(
    () => input.value,
    (newValue) => {
      const timeoutId = setTimeout(() => {
        fetchData(newValue)
      }, 500)
      return () => clearTimeout(timeoutId)
    }
  )
  console.log(input.value)
})
</script>
<template>
  <div class="text-black">
    <input v-model="input" type="search" placeholder="Search movie..." />
    <p>{{ input }}</p>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>
