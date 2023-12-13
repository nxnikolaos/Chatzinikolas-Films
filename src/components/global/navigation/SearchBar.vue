<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import SearchResults from './SearchResults.vue'

const input = ref('')
const results = ref([])
const open = ref(false)

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
      open.value = results.value.length > 0
    })
    .catch(function (error) {
      console.error(error)
    })
}

const updateOpen = (value) => {
  open.value = value
}
const clearSearch = () => {
  input.value = ''
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
})
</script>
<template>
  <div class="text-black relative max-w-sm w-full">
    <input
      v-model="input"
      type="search"
      class="w-full px-4 py-2 rounded-t-lg"
      placeholder="Search movie..."
    />
    <SearchResults
      v-if="open"
      :posts="results"
      :updateOpen="updateOpen"
      :clearSearch="clearSearch"
    ></SearchResults>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>
