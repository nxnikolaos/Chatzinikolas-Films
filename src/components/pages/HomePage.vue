<script setup>
import axios from 'axios'
import CardHome from '../re/CardHome.vue'
import { ref, onMounted } from 'vue'

const theatres = ref([])

onMounted(() => {
  axios({
    method: 'get',
    url: 'https://fontaine-films.onrender.com/api/movies/theatres'
  })
    .then(function (response) {
      theatres.value = response.data.results.slice(0, 9)
    })
    .catch(function (error) {
      console.error(error)
    })
})
</script>

<template>
  <section class="text-white grid grid-cols-3 gap-4 max-w-screen-lg">
    <CardHome v-for="item in theatres" :key="item.id" :movie="item" />
  </section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
